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

그전에 몇가지 짚고 넘어가야할 것들이 있다. 기본적으로 리액트는 `shallow copy`를 실행한다. 참조값만 비교를 한다는 것이다. 그리고 `component`가 렌더링 된다는 것은 함수로 작성된 것을 `call`하여 실행되는것을 말한다. 그렇게 때문에 함수가 실행될 때마다 그 내부에 선언되어 있던 코드들(변수, 또다른 함수들) 또한 매번 다시 선언되어서 사용된다. 이를 잘 유념하면서 `useMemo`, `useCallback`을 생각해보도록 하자.

### useMemo
```typescript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
<a href='https://ko.reactjs.org/docs/hooks-reference.html#usememo' target="_blank" rel="noopener noreferrer">리액트 공식문서</a>에는 `useMemo`를 <b><u><a href='https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98'  target="_blank" rel="noopener noreferrer">메모이제이션(Memoization)</a>된 값을 반환합니다</u></b> 라고 설명한다. 위의 예제를 설명해보자면, `deps`로 넣어준 `a` 또는 `b`가 변경이 될때에만 해당 값을 재계산 하는 것이다. 한 `component`내에 여러개 `state`를 가지고 있을때에 특정한 값에 `useMemo`를 사용하게 되면 최적화를 할 수 있다.
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
하지만! 언제나 그렇듯 모든 함수를 `useMemo`로 감싸게 되면 이 또한 리소스 낭비가 될 수 있으므로, 퍼포먼스 최적화가 필요한 연상량이 많은 곳에 사용하는 것이 좋다. <span style='color:red;'><b><최적화는 공짜가 아니다></b></span>

<br/>
<div style="font-size:10px;color:#8b9196">
<b>이미지 및 내용 출처</b><br/>
- https://ko.reactjs.org<br/>  
</div>
