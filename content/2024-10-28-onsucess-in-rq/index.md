---
title: OnSuccess in UseQuery has been disappeared
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-10-28T20:31:52.226Z
path: blog/onsuccess-rq
cover: ./img.png
excerpt: How on earth can we find another way?
show: false
---
 
현재 회사에서는 `react-query`를 상태관리 및 캐시관리 라이브러리로 사용하고 있다. 사실 사용하고 있는 버전은 v4로, 앞으로 언급할 `onSuccess`를 포함한 `onError`, `onSettled`를 사용할 수 있다.  
하지만 언젠가는 버전업을 할테니 최대한 유지보수 비용이 들지않게 해당 옵션을 사용하지 않는 방향으로 코드를 만들고 있다. 하지만 처음에 `onSuccess`를 어떻게 대체해야할지 머릿속에서 그림이 그려지지 않았다. 그래서 어떤 대체할수 있는 방법이 있을지 하나씩 살펴보려고 한다. 

<br/>

### 현황
`v5`버전의 `doc`를 보면 다음 <a target="_blank" rel="noopener noreferrer" href='https://tanstack.com/query/v5/docs/framework/react/guides/migrating-to-v5#callbacks-on-usequery-and-queryobserver-have-been-removed'>링크</a>에서 `onSuccess`, `onError`, `onSettled`가 삭제되었다고 명시해주고 있다. 물론 `queries`에서만이고, `mutation`에서는 유지된다. 심지어 어떤 개발자는 해당 함수들을 _bad api_ 라고 칭하기도 했다!    
해당 옵션은 굉장히 편리한 기능이었고, 많은 개발자들이 해당 옵션을 사용해서 코드를 작성했을거라고 본다. 아마 이 변경사항이 현재까지 `react-query` 업데이트 중 가장 큰 `breaking change`가 아닐까 싶다. 생각해보면 지금까지 아무 문제없이 잘돌아가는 기능이 사라지게 된것이다. <span style='font-size: 10px'>(상상만해도 막막하다...끔찍해..)</span>  
  
대표적으로 `onSuccess`를 사용하는 예시를 보자.

```jsx
export function useTodos() {
    const [todoCount, setTodoCount] = React.useState(0)
    const { data: todos } = useQuery({
        queryKey: ['todos', 'list'],
        queryFn: fetchTodos,
        //😭 Don't do this!
        onSuccess: (data) => {
          setTodoCount(data.length)
        },
    })
    
    return { todos, todoCount }
}
```

저런 구조는 다음과 같은 문제를 야기할수 있다.
1. `useState`의 `setState` 함수는 또 다른 렌더링을 유발한다 <span style='font-size: 10px'>(이것은 자명하다)</span>
2. `staletime` 안의 호출일 경우 캐시에서 데이터를 읽어왔을때 문제가 발생할수 있다 (`fetch`가 발생해야 `onSuccess`가 호출되는데 캐시를 읽어올경우 `refetch`가 발생하지 않는다)

### 어떻게 대체할수 있을까
하지만 코드를 짜다보면 분명히 (아니면 무조건) onSuccess 의 로직이 필요한 경우가 있다. 그런경우 사용할 수 있는 방법 몇가지를 알아보자.

- **useEffect** 의 사용
  

    아래 코드를 보면 잘 와닿을것이다. `response`를 `watch`해서 동작하도록 하는 방법이다.
```jsx
export function useTodos(filters) {
    const [todoCount, setTodoCount] = React.useState(0)
    const { data: todos } = useQuery({
        queryKey: ['todos', 'list'],
        queryFn: fetchTodos,
    })

    React.useEffect(() => {
        if (todos) {
          setTodoCount(todos.length);
        }
    }, [todos])
  
}
```


<br/>
<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-react-query-4#onsuccess-is-no-longer-called-from-setquerydata
- https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
</div>