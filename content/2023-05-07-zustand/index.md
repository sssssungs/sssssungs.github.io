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
`Zustand`는 다양한 `library`와 결합해서 사용할 수 있다. `immutable`한 변화를 쉽게 컨트롤하기 위해 <a href='https://github.com/pmndrs/zustand/tree/2b29d736841dc7b3fd7dec8cbfea50fee7295974#sick-of-reducers-and-changing-nested-state-use-immer' target="_blank" rel="noopener noreferrer">immer</a>와 함께 사용할 수도 있고, 다양한 <a href='https://github.com/pmndrs/zustand/tree/2b29d736841dc7b3fd7dec8cbfea50fee7295974#middleware' target="_blank" rel="noopener noreferrer">middleware</a>를 제공해주어 편의를 제공한다. 다음은 zustand의 몇가지 장점이다.
- 특정 `library`에 엮이지 않고 다양한 `library`를 결합해 사용할 수 있다.
- 하나의 중앙 `store`를 만들어 사용하면서, `state`를 정의/사용하는것이 단순하다.
- 동작을 이해하기 위해 알아야 하는 코드량이 매우 적다.
- `rendering optimization`을 하기가 쉽다

### How to use the Zustand?
`store`를 만들때는 `create` 함수를 이용하여 `state`와 `action`을 정희할 수 있다. 그러면 `hook`을 `return`하는 형태이다.
```typescript
import { create } from "zustand";
export const useBookStore = create(
    (set) => ({
        amount: 30,
        title: "Alice wonderland",
        actions: {
            addAmount: (value: number) =>
                set((state) => ({ amount: state.amount + value })),
        },
    })
);
```
`component`단에서 `state`를 꺼내기 위해서는 `selector`를 전달해주어야한다. 그렇지 않으면 `store` 전체를 `return` 하게된다.
```typescript
import useBookStore from './bookStore'
const BookShelf = () => {
    const amount = useBookStore(state => state.amount);
    const { addAmount } = useBookActions(state => state.actions);
    return (
        <>
            <h1>{amount}</h1>
            <button onClick={() => addAmount(10)}>Change the amount</button>
        </>
    )
};
```