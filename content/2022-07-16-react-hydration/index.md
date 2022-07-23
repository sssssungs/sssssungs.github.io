---
title: What is hydration in react
tags: [javascript, typescript, react, nextjs, webpack]
date: 2022-07-16T13:21:04.226Z
path: blog/react-hydration
cover: ./hydration.png
excerpt: Understanding React hydration
show: true
---

<div class="quote">In web development, hydration or rehydration is a technique in which client-side JavaScript converts a static HTML web page, delivered either through static hosting or server-side rendering, into a dynamic web page by attaching event handlers to the HTML elements.</div>

`Hydration`은 우리말로 직역하면 수화, 수분보충 등으로 번역될 수 있다. 어떻게 보면 아주 직관적인 단어라고 할 수 있을 것이다. `React`에서 `hydration`이라는 용어는 왜 사용되고 어떤 역할을 하는지 알아보도록 하자.  
`React`는 `DOM`에 컴포넌트를 렌더링 해주는 `render`라는 메소드를 제공해주고 있다.
```javascript
ReactDOM.render(element, container) // container에 element를 rendering
```
이 `render`함수는 `container`의 자식으로 react component를 넣게되는데, 기존에 이미 `rendering`된 react component가 있다면 새로 렌더링 하는게 아니고 update만 진행해준다. 그리고 rendering이 완료되면 세번째 파라미터로 전달된 `callback`이 실행되게 할 수 있다.
