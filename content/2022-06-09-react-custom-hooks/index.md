---
title: Let's code your React Custom Hook
tags: [javascript, typescript, react, redux, webpack]
date: 2022-06-09T21:24:04.226Z
path: blog/react-custom-hooks
cover: ./react-custom-hooks.png
excerpt: Custom hooks are designed to do exactly what you need to isolate and reuse its logic
show: true
---


<div class="quote">"대부분의 사람들이 커스텀 Hooks를 Hooks API의 꽃이라고 생각합니다. 저희는 사람들이 커스텀 Hooks를 자주 쓸 것이라고 예상했고, 협업 환경에서 이러한 커스텀 Hooks가 충돌을 일으키지 않도록 해주어야 했습니다" -Dan Abramov-</div>

`React hooks`가 정식으로 릴리즈 된 이후 많은 프론트엔드 개발자들이 `react hooks`를 사용하고 있다. `React hooks`는 크게 다음 세가지의 장점을 가진다.

> 1. `class component` 보다 적은 양의 코드로 동일한 로직을 구현할 수 있다.  
> 2. 적은 코드양, 하지만 명료함을 잃지 않는다   
> 3. 상태관리 로직의 재사용성이 매우 높다    

나 또한 `react hooks` + `functional component` 조합으로 개발을 하고 있는 입장에서, `hooks`를 사용하기 전 `class component`로 개발하던 때와 비교해본다면 `hooks`를 사용하는것이 확실히 작성하는 코드의 양도 적고, 그냥 눈으로 코드를 읽었을때 읽기 쉬운 명료함을 가지고 있다고 생각한다.   

`React` <a href="https://reactjs.org/" rel="noopener noreferrer">공식문서</a>에는 `hooks` 사용에 대한 두가지 rule을 명시하고 있다.
1. Only Call Hooks at the Top Level (최상위(*at the Top Level*)에서만 `Hook`을 호출해야한다)  
   반복문, 조건문 혹은 중첩된 함수 내에서 `Hook`을 호출하면 안된다
2. Only Call Hooks from React Functions (오직 React 함수 내에서 `Hook`을 호출해야한다)  
   `Hook`을 일반적인 `JavaScript` 함수에서 호출하면 안된다

위의 두가지 rule을 지키면서 재사용성이 뛰어난 `custom hooks`를 만들어서 사용할 수 있다. (보통 `useSomething`으로 명명하고 `hook`이라고 암묵적으로 통용된다) `Custom hooks` 생성시 다음 두가지를 고려해야한다.

### Composition (합성)  
`custom hook`은 동시에 사용할 수 있어야하고, 서로에게 영향을 끼치지 않고 독립적으로 고유한 로직을 가지고 있어야 한다. 예를 들어 하나의 `component` 내부에서 여러개의 `useState`를 사용하는 `hook`을 사용했을때, 각 `hook`들은 서로에게 영향을 주지않고 독립적으로 동작하게 된다.
```javascript
function useMyCustomHook1() {
   const [value, setValue] = useState(0);
   // What happens here, stays here.
}

function useMyCustomHook2() {
   const [value, setValue] = useState(0);
   // What happens here, stays here.
}

function MyComponent() {
   useMyCustomHook1();
   useMyCustomHook2();
}
```

### Debugging (디버깅)
`custom hook`이 코드의 디버깅 및 플로우를 파악하는데 영향을 끼치지 않아야 한다.
<br/><br/>

위에서 말한 두가지 고려사항은 결국 `custom hook`은 자신을 포함하여 다른 `hook`이나 `component`에 영향을 끼치지 않아야 한다는 것이다. 그리고 실제로 이를 구현하기 위해서는 공통된 값을 다루는 로직을 `custom hook`으로 만들지 않는 것이 중요하다. 특히 공통으로 다루게 되는 `window`의 함수나 값을 다루는 `custom hook`을 여러개 만든다고 가정해본다면, 이는 합성과 디버깅의 고려사항 모두 만족하지 못한다. 이를 공통된 `component`에 중복으로 사용하였을때, 사용된 `hooks`들은 공통된 `window` 글로벌 객체를 참조하게 되므로 서로 영향을 주게되며 (합성 규칙에 위배), `component`에서 에러가 발생되었을때 어떤 `hook`이 원인인지 파악이 어렵고 모든 `hook`을 들여다 봐야한다 (디버깅 규칙에 위배).

간단한 `custom hook`을 만들어보자.
```javascript
import { useState, useCallback } from 'react';

const UseInput = (initialValue = null) => {
   const [value, setValue] = useState(initialValue);
   const handler = useCallback((e) => {
      setValue(e.target.value);
   }, []);
   return [value, handler, setValue];
};

export default UseInput;
```
위는 `react`개발시 `input`을 생성할때에 사용되는 `useState`, `onChange` 를 묶어서 `hook`으로 만들어둔 간단한 `hook`이다.   
`hook`생성시 몇가지 키워드를 본다면
1. 명칭은 useSomething 형태로 생성한다 (use를 앞에 붙인다)
2. 내부에서는 `useState`, `useEffect`같은 내장 `hook`을 사용한다.
3. `return`은 `component`형태가 아닌 `array` 또는 `object`형태를 `return`한다  

이것들만 잘 지키고 독립성을 유지도록 `custom hook`을 생성한다면 가독성이 높고 관리와 재사용성이 용이한 `hook`을 생성할 수 있다.





### 참고문서  
https://reactjs.org/ <br/>
https://overreacted.io/why-isnt-x-a-hook/
