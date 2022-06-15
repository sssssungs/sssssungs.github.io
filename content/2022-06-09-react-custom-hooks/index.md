---
title: Let's code your React Custom Hook
tags: [javascript, typescript, react, webpack]
date: 2022-06-09T21:24:04.226Z
path: blog/react-custom-hooks
cover: ./react-custom-hooks.png
excerpt: Custom hooks are designed to do exactly what you need to isolate and reuse its logic
show: true
---

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

위의 두가지 rule을 지키면서 재사용성이 뛰어난 `custom hooks`를 만들어서 사용할 수 있다. (보통 `useSomething`으로 명명하고 `hook`이라고 암묵적으로 통용된다)  
`Custom hooks` 생성시 다음 두가지를 고려해야한다.
---
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
wip 

### 참고문서  
https://reactjs.org/ <br/>
https://overreacted.io/why-isnt-x-a-hook/
