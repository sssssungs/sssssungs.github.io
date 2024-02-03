---
title: React query instead of Redux saga
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-01-09T17:57:11.226Z
path: blog/saga-to-query
cover: ./img.png
excerpt: Let's use React query instead of Redux saga
show: true
---

`Redux`(with Redux saga)와 `React query`에 대한 사용기에 대해 비교하면서 느낀점을 적어보려고 한다. 개인적으로 `react query`를 도입하면서 많은 부분을 만족하고 있기 때문에 그쪽으로 biased된 포스팅이 될것 같다.  


### 현 상황
현재 근무하고 있는 회사에서는 지금까지 `Redux`를 사용하고 있다. 비동기 fetch 및 middleware는 `redux-saga`를 사용한다. 그렇다면 처음으로 돌아가서 어떻게 `redux-saga`를 사용하게 되었는가에 대해서 먼저 생각을 해보면, 그 당시(약 3년전)만 해도 지금처럼 `hooks` 기반의 상태관리 `library가` 활발히 사용되는 시기가 아니었다. 물론 존재는 하고 있었을 것이다. 완전 새로운 서비스를 초기세팅해야하는 상황에서 우리팀은 그때의 최선의 선택을 했다고 생각하면 될것 같다. 그리고 그때 우리 회사의 다른 서비스는 `mobx`를 사용하고 있었는데, 프로젝트 내부에서 심하게(?) 파편화된 `store` 관리때문에 좀더 정형화 되어있고 관심사가 분리되어 있는 새로운 것을 원했던것 같기도 하다.  

### React-Query 도입 이유와 Redux-saga의 단점 
어쨋든 `redux-saga`와 함께 서비스는 런칭되어서 현재까지 잘 운영해오고 있다. 하지만 요즘 들어서 그렇게 오랜기간 문제없이 사용했던 `redux-saga`도 슬슬 단점들이 보이기 시작했고, 또 이를 보완할 수 있는 여러가지 신흥강자들은 떠오르고 있었다. 그동안 `redux-saga`를 사용하면서 느낀 단점들을 뽑아보자면 다음과 같다.

1. 유지보수가 제대로 되지 않는듯한 느낌   
`redux-saga` npm version을 보면 최근 publish는 14일전 이지만, 이것의 바로 전 publish는 1년전이다. 그 전의 publish는 4년 전이었다. 일각에서도 `redux-saga`를 포기한것이 아니냐는 여러가지 루머가 있었다. 2주전의 publish를 기점으로 활발히 유지보수가 될 것인가 또한 의문이다.

2. 코드 작성시 `boilerplate`가 너무 많다  
현재 프로젝트에서는 `redux-saga` + `redux-toolkit`을 함께 사용하고 있고, `REQUEST`/`SUCCESS`/`FAILURE` 패턴을 사용하고 있다. 한번의 동작에 대해 3가지 케이스를 다 만들어줘야하고, `reducer와` `saga도` 3가지를 작성해야하니 불필요한 반복작업과 실제로 유명무실한 코드들이 많았다.

3. `typescript` 호환이 잘 안된다  
가장 치명적인 단점이라고 본다. `typescript` 지원이 잘 되지 않기 때문에 `return type` 정하는데 애를 먹는 경우가 많다.

4. 그외에 자잘하지만 치명적인 `error`들  
현재 `redux와` `nextjs를` 함께 사용하고 있기 때문에 이를 연결하기 위한 `next-redux-wrapper` library도 사용하고 있다. 다른 부분은 상관이 없지만 `getServerSideProps` 내부에서 saga를 call한 다음 2번째로 다른 saga를 call할때 데이터가 꼬이는 현상을 심심치않게 발견할 수 있었다. 정확한 원인은 모르지만 그 이슈때문에 작업을 할때 몇번이고 우회했던 기억이 있다. (내가 해결법을 모르는것 일수도)

그래서 빨리 `redux-saga`를 다른 것으로 대체했으면 좋겠다는 이야기가 점점 대두되기 시작하였고, 다른 프로젝트에서 일찍이 도입해서 사용하던 `react-query`를 도입하게 되었다. 그리하여 현재 프로젝트는 `redux`, `redux-saga`, `react-query`가 공존하는 상태가 된 것이다.

### 도입 시작
`react-query`를 도입하면서 가장 큰 골칫거리는 바로 query key를 어떻게 관리할지 정책을 정하는 것이다. `react-query`에서 모든 data의 관리의 시작은 query key를 기반으로 하기 때문에 당연히 중복이 발생할 우려가 있거나 관리하기 어려운 key 생성 정책은 피했어야했다. 다양한 방법이 있었지만 그래도 `tanstack` 문서에도 명시되어 있는 `query key management library` 중 하나인 <a href='https://github.com/lukemorales/query-key-factory' target='_blank' rel='noopener noreferer'>@lukemorales/query-key-factory</a>를 사용했다. 이 library를 사용하면서 `array` 형태로 구조화된 `key`를 사용하게 되면서 좀더 정합성이 보장되는 효율적인 key 관리가 가능해졌다. 물론 이 외에도 여러가지 key management library들은 많이 있을것이다.

### 사용법의 차이  
사실 `redux-saga`는 `middleware`로 다양한 사용방법이 존재한다. 현재 프로젝트에서는 `redux-saga`를 비동기호출에서 동기를 보장받기 위해 사용하는 목적이 크기 때문에 `fetch`한 `response`를 `success`/`failure` saga로 전달해주면서 `reducer`에 해당값을 할당하는 `basic`한 방식을 사용하고 있다. 
```javascript
const [SUCCESS, FAILURE] = ['data_fetch_success', 'data_fetch_failure']
const getDataSaga = (payload) => {
    const data = fetch_api(payload);
        if(data) {
            yield put({ type: SUCCESS, payload: data });
        } else {
            yield put({ type: FAILURE, payload: data });
        }
};
```
필요한 경우 `saga`에서 제공하는 `effects`들을 사용하고 있다 (`select`, `debounce`, `put`, `cancel` 등)  
`react-query`는 이와 사용법이 전혀 다르다. 우선 제일 다른점을 `hooks` 기반의 `library`이기 때문에 기존 `react hook`에 적용되는 <a href='https://legacy.reactjs.org/docs/hooks-rules.html' target='_blank' rel='noopener noreferer'>rule</a>들을 따라야한다. 이것이 조금 까다로운 부분이기도 하다. (특히, rule중 `hooks`는 조건과 상관없이 항상 호출되어야 한다는 내용을 충족하는것이 `saga` 로직에서 넘어올때 많은 걸림돌이 되기도 했었다)  
하지만 `react-query`로는 다음과 같이 간단한 하나의 함수로 위의 로직수행이 가능하다. 
```javascript
const { data, isLoading, isError } = useQuery('data', fetch_api, 
    {   
        onSuccess: (data) => doSomething(data), 
        onError: (error) => toast.error(error.message) 
        // 단, query의 onSuccess, onError는 react-query v5에서 deprecated 되었다 
    } 
);
```
간단한 사용법 뿐만 아니라 `react-query`에서 자체적으로 제공해주는 여러가지 기본함수를 활용할 수 있다. (`refetch`, `useInfiniteQuery`, `prefetching` 등). `DX`적인 측면에서도 `react query devtool` 또한 직관적이고 보기 편하게 제공해주기 때문에 개발시 효율을 더 높일 수 있다. `redux devtool`은 개인적으로 보기가 너무 어렵고 사용법도 `react query devtool`에 비해 어려운것이 사실이다.

### 내가 생각한 가장 큰 장점
`React query`를 사용하면서 느꼈던 가장 큰 장점이자 실제 성능상으로도 효과를 보았다고 생각하는 부분은 바로 `caching`이다. 아마 많은 개발자들이 이것 때문에 `react query`를 도입을 고려할것이다. `react query`는 자체적으로 `caching`을 지원하기 때문에 만약 `key`가 동일한 경우 해당 data를 `cache`에서 찾아서 가져온다. (물론 존재한다면 말이다). 이부분에서 가장 큰 이점을 본것은 정보를 search할때이다.  
현재 서비스에서는 검색을할때 넣을수 있는 parameter가 굉장히 많다. 모든 조건을 다 선택하게 되면 30개도 넘어가는 경우가 있다. `redux-saga`를 사용했을때는 `cache` 옵션을 크게 고려하지 않고 구현을 하였기 때문에 30개 조건을 검색한 다음 또 동일한 조건을 검색하게 되면 그만큼의 computing과 시간이 걸리게 되었다. 하지만 react query 도입이후 같은 검색조건으로 검색을 한 다음 또 동일한 조건을 검색하게 되면 `cache`에서 바로 가져오기 때문에 이전만큼의 리소스가 사용되지 않는다. 성능적으로나 ux적으로 많은 도움을 받은 기능이기도 하다. 물론 `redux-saga`에서도 가능하고 내가 사용하지 않았던 기능일지도 모른다. 하지만 `react query`처럼 reference가 많지는 않았기 때문에 내가 사용하지 않았을까 하고 추측해본다.



<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://tanstack.com/query/latest <br/>
- https://tanstack.com/query/latest/docs/react/community/community-projects#query-key-factory <br/>
- https://github.com/lukemorales/query-key-factory <br/>
- https://legacy.reactjs.org/docs/hooks-rules.html <br/>
</div>

