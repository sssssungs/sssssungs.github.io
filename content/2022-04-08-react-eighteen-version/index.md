---
title: React v18 has been released officially!
tags: [javascript, typescript, react, html, css, nextjs]
date: 2022-04-08T20:51:44.226Z
path: blog/react18
cover: ./react18.png
excerpt: React 18 is now available on npm! Let's dive into this!
show: true
---

최신 주요 버전에는 Automatic Batching와 같은 즉시 사용 가능한 개선 사항, `startTransition`과 같은 새로운 API, `Suspense`를 지원하는 스트리밍 서버 측 렌더링이 포함된다.

### Automatic Batching
`React`의 배치(`Batching`)란, 더 나은 성능을 위해 여러 상태 업데이트를 하나의 `re-rendering`으로 묶는 작업이다. 
```typescript
// Before: only React events were batched.
setTimeout(() => {
    setCount(c => c + 1);
    setFlag(f => !f);
    // React will render twice, once for each state update (no batching)
}, 1000);

// After: updates inside of timeouts, promises,
// native event handlers or any other event are batched.
setTimeout(() => {
    setCount(c => c + 1);
    setFlag(f => !f);
    // React will only re-render once at the end (that's batching!)
}, 1000);
```
automatic batching을 사용하기 위해서는 `ReactDOM.render`를 `ReactDOM.createRoot`로 변경해야한다.


### Concurrency
React 18부터는 `startTransition` API를 제공함으로써 업데이트를 명시적으로 구분하여 진행할 수 있게 되었다.  
`Urgent update(긴급 업데이트)` 는 입력, 클릭, 누르기 등과 같은 직접적인 상호 작용 (ex. text 입력)  
`Transition update(전환 업데이트)` 는 UI를 한 보기에서 다른 보기로 전환(ex. text 입력되었을때 보이는 검색결과)  
```typescript
import {startTransition} from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
    // Transition: Show the results
    setSearchQuery(input);
});

```
`startTransition`로 래핑된 업데이트는 urgent하지 않은것으로 처리되며, 클릭이나 key down과 같은 더 urgent한 업데이트 발생할 경우 중단된다.



공식문서 https://reactjs.org/blog/2022/03/29/react-v18.html
