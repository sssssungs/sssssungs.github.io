---
title: Remember me, useMemo() and useCallback()
tags: [javascript, typescript, html, react, nextjs, webpack]
date: 2022-08-12T18:25:04.226Z
path: blog/usememo-usecallback
cover: ./img.png
excerpt: Shallow and deep consideration to useMemo and useCallback
show: true
---

함수형으로 `react component`를 설계할때 여러가지 `hooks`를 사용할 수 있다. 보통 `useEffect`, `useState`로 웬만한 `props`, `state` 로직을 구현할 수 있기 때문에 부가적인 기능을 도와주는(정확히 말하자면 렌더링 성능을 최적화해주는) `useMemo`나 `useCallback`은 필수로 사용하지 않아도 된다. 하지만 이 두가지 `hook`을 잘 사용하기만 한다면 훨씬 높은 퍼포먼스를 기대할 수 있다.  
그전에 몇가지 짚고 넘어가야할 것들이 있다. 기본적으로 리액트는 `shallow copy`를 실행한다. 참조값만 비교를 한다는 것이다. (즉, `object !== object`인셈) 그리고 `component`가 렌더링 된다는 것은 함수로 작성된 것을 `call`하여 실행되는것을 말한다. 그렇게 때문에 함수가 실행될 때마다 그 내부에 선언되어 있던 코드들(변수, 또다른 함수들) 또한 매번 다시 선언되어서 사용된다. 이를 잘 유념하면서 `useMemo`, `useCallback`을 생각해보도록 하자.

### useMemo()
```typescript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
<a href='https://ko.reactjs.org/docs/hooks-reference.html#usememo' target="_blank" rel="noopener noreferrer">리액트 공식문서</a>에는 `useMemo`를 <b><u><a href='https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98'  target="_blank" rel="noopener noreferrer">메모이제이션(Memoization)</a>된 값을 반환합니다</u></b> 라고 설명한다. 위의 예제를 설명해보자면, `deps`로 넣어준 `a` 또는 `b`가 변경이 될때에만 해당 값을 재계산 하는 것이다. 한 `component`내에 여러개 `state`를 가지고 있을때에 특정한 값에 `useMemo`를 사용하게 되면 최적화를 할 수 있다.  

사용예시
```javascript
//const count = countMember(members);
const count = useMemo(() => countMember(members), [members]); 
// members가 바뀔때에만 계산을 해주면 된다. 그외에 memberName, age 등은 관심밖이다.
return (
	<>
    	<Member 
            memberName={memberName}
            age={age}
            onChange={onChange}
            onCreate={onCreate}
        />
        <MemberList members={members} onRemove={onRemove} onToggle={onToggle} />
        <div>멤버수(명) : {count}</div>
    </>
);
```
아래 코드는 `useMemo`가 내부적으로 동작하는 코드이다 (출처:<a href='https://github.com/facebook/react/blob/1a106bdc2abc7af190b791d13b2ead0c2c556f7a/packages/react-server/src/ReactFizzHooks.js'>Facebook github</a>)  
`areHookInputsEqual`이라는 함수를 통해, 받아올 `deps` 변경이 없을 경우 이전의 `prevState`를 반환한다.
```typescript
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
function useMemo<T>(nextCreate: () => T, deps: Array<mixed> | void | null): T {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  const nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    const prevState = workInProgressHook.memoizedState;
    if (prevState !== null) {
      if (nextDeps !== null) {
        const prevDeps = prevState[1];
        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }
  // ... 중간생략 
}
```

### useCallback()
```typescript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
<a href='https://ko.reactjs.org/docs/hooks-reference.html#usememo' target="_blank" rel="noopener noreferrer">리액트 공식문서</a>에는 `useCallback`를 <b><u><a href='https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98'  target="_blank" rel="noopener noreferrer">메모이제이션(Memoization)</a>된 콜백(함수)을 반환합니다</u></b> 라고 설명한다. 위의 예제를 설명해보자면, `deps`로 넣어준 `a` 또는 `b`가 변경이 될때에만 해당 함수를 다시 생성하는 것이다. 
`component`가 렌더링 될때마다 내부적으로 사용한 함수가 새롭게 생성되는 경우, 자식 `component`에 `props`으로 새로 생성된 함수가 넘겨지게 되면 불필요한 렌더링이 발생할 것이다. 

사용예시 
```javascript
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const onSaveMemberInfo = useCallback(() => saveMemberInfo(name, age), [name, age]);
    // 실제 렌더링에 영향을 끼치는 name, age가 변경될때에 함수를 생성하여 그외의 상황에서 <Member />가 렌더링되는것을 막는다 
    return( 
        <>
            <div>멤버 이름: {name}</div>
            <div>나이 : {age}</div>
            <Member 
                onSave={onSaveMemberInfo}
                setName={setName}
                setAge={setAge} 
            />
        </>
        )
```

아래는 `useCallback`이 내부적으로 동작하는 코드이다 (출처:<a href='https://github.com/facebook/react/blob/1a106bdc2abc7af190b791d13b2ead0c2c556f7a/packages/react-server/src/ReactFizzHooks.js'>Facebook github</a>)  
`useMemo`를 기반으로 함수를 받아오는 형태를 취한다.
```typescript
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
export function useCallback<T>(
  callback: T,
  deps: Array<mixed> | void | null,
): T {
  return useMemo(() => callback, deps);
}
```

그리고 `useMemo`, `useCallback`을 사용할 때에 지켜야할 몇가지 주의사항이 있다.
1. `leaf component`에는 사용하지 말아야한다 (당연)
2. 해당 `hook`안에서 사용하는 `state`, 혹은 `props`가 있다면 꼭 `deps` 배열안에 포함시켜야한다. 만약 그렇지 않으면 해당 값에 대해 최신값을 참조할 것이라고 보장할 수 없다.
3. 의존성 배열에 새로운 객체와 배열을 전달해서는 안된다. 이는 의존성이 달라질 수 있다는 것을 의미하고 메모이제이션을 하는 의미가 없다.

```javascript
const [first, ...rest] = array;
const dontDoLikeThis = useCallback(() => { someFunction(); }, [rest]);
```
4. <b><span style='color:red'>[중요]</span> 무조건 `useMemo`와 `useCallback`을 사용한다고 해서 성능이 더 좋아지지는 않는다.</b>

`React devtool`의 `profiler`를 사용하면 컴포넌트 속도를 측정할 수 있다. 이를 이용해 필요한 경우 `useMemo`, `useCallback`을 사용하여 상태변경을 좀 더 효율적으로 만들 수 있다.

<br/>
<div style="font-size:10px;color:#8b9196">
<b>이미지 및 내용 출처</b><br/>
- https://ko.reactjs.org<br/>  
- https://github.com/facebook/react<br/>
- https://kentcdodds.com/blog/usememo-and-usecallback
</div>
