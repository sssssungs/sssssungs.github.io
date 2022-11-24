---
title: I know you but not exactly, React Context Api
tags: [javascript, typescript, react, redux, nextjs]
date: 2022-11-22T20:31:44.226Z
path: blog/context-api
cover: ./img.png
excerpt: Make a cool state management with pure React! It's React context API!
show: true
---

얼마전까지만 해도 `React`로 업무를 진행한다고 했을때 상태관리를 위해 사용했던 라이브러리는 바로 `Redux` 였을 것이다. 어떻게 보면 `React + Redux` 조합이 뭔가 공식처럼 사용됬던 때가 있었다. 하지만 최근 들어서는 `Recoil`, `SWR`, `React-query` 등 Redux의 역할을 대체할 수 있는 여러 훌륭한 라이브러리들이 등장하였고, 많이 사용되고 있다.
그 중 React 16.3 버전에 출시된 `Context API`에 대해서 알아보자.  
첫번째로 일단 `Redux`와 비교했을때 가장 큰 차이점은 바로 `Context API`는 오직 `React`에서만 사용할 수 있다는 것이다. `Redux`는 사실 다른 `SPA` 프레임워크인 `Angular`, `Vue` 등 과도 많이 사용되지만, `Context API`는 `React`에서 제공해주는 것이기 때문에 다른 라이브러리와 사용할 수 없다. 

