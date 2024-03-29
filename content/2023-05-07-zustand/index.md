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

<div style="width: 90%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
    <img src="statistics.png" />
    <div style="font-size:13px;color:#8b9196;display:flex;justify-content:center;margin-top:7px;">redux를 제외한 신규 라이브러리 중 가장 성장속도가 빠르다 </div>
</div>

`Zustand`는 다양한 `library`와 결합해서 사용할 수 있다. `immutable`한 변화를 쉽게 컨트롤하기 위해 <a href='https://github.com/pmndrs/zustand/tree/2b29d736841dc7b3fd7dec8cbfea50fee7295974#sick-of-reducers-and-changing-nested-state-use-immer' target="_blank" rel="noopener noreferrer">immer</a>와 함께 사용할 수도 있고, 다양한 <a href='https://github.com/pmndrs/zustand/tree/2b29d736841dc7b3fd7dec8cbfea50fee7295974#middleware' target="_blank" rel="noopener noreferrer">middleware</a>를 제공해주어 편의를 제공한다. 다음은 zustand의 몇가지 장점이다.
- 특정 `library`에 엮이지 않고 다양한 `library`를 결합해 사용할 수 있다.
- 하나의 중앙 `store`를 만들어 사용하면서, `state`를 정의/사용하는것이 단순하다.
- 동작을 이해하기 위해 알아야 하는 코드량이 매우 적다.
- `rendering optimization`을 하기가 쉽다
- `<Provider />`로 감싸주지 않고 독립적으로 사용이 가능하다

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

`component`단에서 `state`를 꺼내기 위해서는 `selector`를 전달해주어야한다. `selector`를 명시하지 않으면 `store` 전체를 `return` 하게된다.
```typescript
import useBookStore from './bookStore';

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

`selector`에서 `object`를 반환하려는 경우, `shallow compare`를 사용하여 `re-render`를 줄이도록 `option`을 넣어줄 수 있다 (최적화 기능)
```typescript
import { shallow } from 'zustand/shallow';

// only re-renders when either amount or title changes
const { amount, title } = useBookStore(
  (state) => ({ amount: state.amount, title: state.title }),
  shallow
);
```

다양한 `middleware`를 손쉽게 적용할 수 있다. 특히 `react`와는 뗄수없는 `immer`, `devtool`을 사용하는 방법은 다음과 같이 간단하다. (`local storage`, `session storage`를 지원하는 `middleware`도 손쉽게 사용가능하다)
```typescript
import { immer } from "zustand/middleware/immer"; // npm install immer 필요
import { devtools } from "zustand/middleware";

const useBookStore = create(
    devtools( // devtool 적용 
      immer((set) => ({ // immer 적용 
        amount: 30,
        title: "Alice wonderland",
        actions: {
          addAmount: (value: number) =>
            set((state) => ({ amount: state.amount + value })),
          subAmount: (value: number) =>
            set((state) => ({ amount: state.amount - value })),
          changeTitle: (value: string) =>
            set((state) => ({ title: state.title + value })),
        },
      }))
    )
);
```

`Zustand`는 `Context API` 사용을 지양하고 `closure`를 활용하여 `store` 내부상태를 관리한다. (<i>`closure`는 간단히 말해서 함수가 선언될 당시의 주변 환경을 기억하는 것이다 <a href='https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures' target="_blank" rel="noopener noreferrer">참고</a></i>). 따라서 `zustand store hook`을 호출하여 리턴된 `useHook`을 어느 컴포넌트에서 사용하더라도 같은 `store`를 바라보게 된다.<br/>
`store`를 생성하는 함수를 호출할때 `closure`를 활용하기 때문에 상태의 변경, 조회, 구독등의 `interface`를 통해서 `store`를 다루고 실제 상태는 의도치 않게 변경되는 것을 막을 수 있다. 


### 마치며
현재까지는 `Redux`를 압도적으로 많이 사용하고 있고, `Redux`를 제외한 상태관리 라이브러리는 비슷비슷한 점유율을 보이고 있다. 하지만 점점 사용이 쉽고 코드량이 간소화 되는 추세로 변화하고 있는것 같기는 하다. 간단하고 편리하지만 다양한 옵션과 이점이 있기 때문에 좀 더 공부해봐야 겠다.



<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://blog.axlight.com/posts/steps-to-develop-global-state-for-react/<br/>
- https://github.com/pmndrs/zustand<br/>  
- https://ui.toast.com/posts/ko_20210812<br/>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
</div>

