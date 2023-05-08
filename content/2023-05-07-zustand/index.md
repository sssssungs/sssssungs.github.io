---
title: Zustand, small and fast and scalable state manager 
tags: [javascript, typescript, react, html, css, nextjs]
date: 2023-05-07T15:38:32.226Z
path: blog/zustand
cover: ./img.png
excerpt: Zustand is really simple but powerful state manager for react.
show: true
---

`React`를 사용하면서 필수적으로 함께 생각해야하는것은 `state management library`이다. 최근들어 다양한 선택지들이 존재해졌지만 한때는 당연히 <a href='https://redux.js.org/' target="_blank" rel="noopener noreferrer">`Redux`</a>를 사용해서 상태관리를 했던때가 있었다. 하지만 요즘의 흐름은 `hook`이 등장하면서 모든것이 바뀌었다고 해도 무방하다. 기존의 솔루션이 훨씬 사용하기 쉽게 변화했고 새로운 솔루션이 탄생하기도 했다.  

<div style="width: 100%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
    <img src="./state_manager.png" />
    <div style="font-size:13px;color:#8b9196;display:flex;justify-content:center;margin-top:7px;">다양한 state management library들 (Zustand가 제일귀엽다)</div>
</div>


그 중 하나가 오늘 소개할 `Zustand`이다. <a href='https://github.com/pmndrs/zustand' target="_blank" rel="noopener noreferrer">`Zustand`</a>는 `global state`를 저장하고 `select`하는 간단한 `api`를 제공하는 `library`이다. 가볍고 쉽게 사용할 수 있는 _**`state manager`**_ 라고 할수 있겠다. <span style='font-size:10px'>(개인적으로는 `useReducer`를 뚝 떼어논 형태라고 생각한다)</span>