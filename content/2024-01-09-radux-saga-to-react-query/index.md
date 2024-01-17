---
title: React query instead of Redux saga
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-01-09T17:57:11.226Z
path: blog/saga-to-query
cover: ./img.png
excerpt: Let's use React query instead of Redux saga
show: true
---

### 현 상황
현재 근무하고 있는 회사에서는 지금까지 `Redux`를 사용하고 있다. 비동기 fetch 및 middleware는 `redux-saga`를 사용한다. 그렇다면 처음으로 돌아가서 어떻게 `redux-saga`를 사용하게 되었는가에 대해서 먼저 생각을 해보면, 그 당시(약 3년전)만 해도 지금처럼 `hooks` 기반의 상태관리 `library가` 활발히 사용되는 시기가 아니었다. 물론 존재는 하고 있었을 것이다. 완전 새로운 서비스를 초기세팅해야하는 상황에서 우리팀은 그때의 최선의 선택을 했다고 생각하면 될것 같다. 그리고 그때 우리 회사의 다른 서비스는 `mobx`를 사용하고 있었는데, 프로젝트 내부에서 심하게(?) 파편화된 `store` 관리때문에 좀더 정형화 되어있고 관심사가 분리되어 있는 새로운 것을 원했던것 같기도 하다.  

### React-Query 도입 이유와 Redux-saga의 단점 
어쨋든 `redux-saga`와 함께 서비스는 런칭되어서 현재까지 잘 운영해오고 있다. 하지만 요즘 들어서 그렇게 오랜기간 문제없이 사용했던 `redux-saga`도 슬슬 단점들이 보이기 시작했고, 또 이를 보완할 수 있는 여러가지 신흥강자들은 떠오르고 있었다. 그동안 `redux-saga`를 사용하면서 느낀 단점들을 뽑아보자면 다음과 같다.

1. 유지보수가 제대로 되지 않는듯한 느낌   
`redux-saga` npm version을 보면 최근 publish는 14일전 이지만, 이것의 바로 전 publish는 1년전이다. 그 전의 publish는 4년 전이었다. 일각에서도 `redux-saga`를 포기한것이 아니냐는 여러가지 루머가 있었다. 2주전의 publish를 기점으로 활발히 유지보수가 될 것인가 또한 의문이다.

2. 코드 작성시 `boilerplate`가 너무 많다  
현재 프로젝트에서는 `redux-saga` + `redux-toolkit`을 함께 사용하고 있고, `REQUEST`/`SUCCESS`/`FAILURE` 패턴을 사용하고 있다. 한번의 동작에 대해 3가지 케이스를 다 만들어줘야하고, `reducer와` `saga도` 3가지를 작성해야하니 불필요한 반복작업과 실제로 유명무실한 코드들이 많았다.

3. 그외에 자잘하지만 치명적인 `error`들  
현재 `redux와` `nextjs를` 함께 사용하고 있기 때문에 이를 연결하기 위한 `next-redux-wrapper` library도 사용하고 있다. 다른 부분은 상관이 없지만 `getServerSideProps` 내부에서 saga를 call한 다음 2번째로 다른 saga를 call할때 데이터가 꼬이는 현상을 심심치않게 발견할 수 있었다. 정확한 원인은 모르지만 그 이슈때문에 작업을 할때 몇번이고 우회했던 기억이 있다. (내가 해결법을 모르는것 일수도)

그래서 빨리 `redux-saga`를 다른 것으로 대체했으면 좋겠다는 이야기가 점점 대두되기 시작하였고, 다른 프로젝트에서 일찍이 도입해서 사용하던 `react-query`를 도입하게 되었다. 그리하여 현재 프로젝트는 `redux`, `redux-saga`, `react-query`가 공존하는 상태가 된 것이다.

### 도입 시작
`react-query`를 도입하면서 가장 큰 골칫거리는 바로 query key를 어떻게 관리할지 정책을 정하는 것이다. `react-query`에서 모든 data의 관리의 시작은 query key를 기반으로 하기 때문에 당연히 중복이 발생할 우려가 있거나 관리하기 어려운 key 생성 정책은 피했어야했다. 다양한 방법이 있었지만 그래도 `tanstack` 문서에도 명시되어 있는 `query key management library` 중 하나인 <a href='https://github.com/lukemorales/query-key-factory' target='_blank' rel='noopener noreferer'>@lukemorales/query-key-factory</a>를 사용했다. 이 library를 사용하면서 `array` 형태로 구조화된 `key`를 사용하게 되면서 좀더 정합성이 보장되는 효율적인 key 관리가 가능해졌다. 물론 이 외에도 여러가지 key management library들은 많이 있을것이다.

### Redux-saga와의 차이 




<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://tanstack.com/query/latest <br/>
- https://tanstack.com/query/latest/docs/react/community/community-projects#query-key-factory <br/>
- https://github.com/lukemorales/query-key-factory <br/>
</div>

