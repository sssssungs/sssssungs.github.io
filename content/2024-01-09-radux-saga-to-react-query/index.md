---
title: React query instead of Redux saga
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-01-09T17:57:11.226Z
path: blog/saga-to-query
cover: ./img.png
excerpt: Let's use React query instead of Redux saga
show: true
---

현재 근무하고 있는 회사에서는 지금까지 `Redux`를 사용하고 있다. 비동기 fetch 및 middleware는 `redux-saga`를 사용한다. 그렇다면 처음으로 돌아가서 어떻게 `redux-saga`를 사용하게 되었는가에 대해서 먼저 생각을 해보면, 그 당시(약 3년전)만 해도 지금처럼 `hooks` 기반의 상태관리 `library가` 활발히 사용되는 시기가 아니었다. 물론 존재는 하고 있었을 것이다. 완전 새로운 서비스를 초기세팅해야하는 상황에서 우리팀은 그때의 최선의 선택을 했다고 생각하면 될것 같다. 그리고 그때 우리 회사의 다른 서비스는 `mobx`를 사용하고 있었는데, 프로젝트 내부에서 심하게(?) 파편화된 `store` 관리때문에 좀더 정형화 되어있고 관심사가 분리되어 있는 새로운 것을 원했던것 같기도 하다.  
어쨋든 `redux-saga`와 함께 서비스는 런칭되어서 현재까지 잘 운영해오고 있다. 하지만 요즘 들어서 그렇게 오랜기간 문제없이 사용했던 `redux-saga`도 슬슬 단점들이 보이기 시작했고, 또 이를 보완할 수 있는 여러가지 신흥강자들은 떠오르고 있었다. 그동안 `redux-saga`를 사용하면서 느낀 단점들을 뽑아보자면 다음과 같다.

1. 유지보수가 제대로 되지 않는듯한 느낌   
`redux-saga` npm version을 보면 최근 publish는 14일전 이지만, 이것의 바로 전 publish는 1년전이다. 그 전의 publish는 4년 전이었다. 일각에서도 `redux-saga`를 포기한것이 아니냐는 여러가지 루머가 있었다. 2주전의 publish를 기점으로 활발히 유지보수가 될 것인가 또한 의문이다.

2. 코드 작성시 boilerplate가 너무 많다  
현재 프로젝트에서는 `redux-saga` + `redux-toolkit`을 함께 사용하고 있고, `REQUEST`/`SUCCESS`/`FAILURE` 패턴을 사용하고 있다. 한번의 동작에 대해 3가지 케이스를 다 만들어줘야하고, `reducer와` `saga도` 3가지를 작성해야하니 불필요한 반복작업과 실제로 유명무실한 코드들이 많았다.

<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
</div>

