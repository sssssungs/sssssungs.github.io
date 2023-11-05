---
title: Different types of web rendering strategy
tags: [javascript, typescript, react, html, css, nextjs, seo]
date: 2023-10-22T13:12:11.226Z
path: blog/web-rendering
cover: ./img.png
excerpt: Do you know 4 types of web rendering in frontend rendering?
show: true
---

`Frontend`에서 `ui`를 렌더링하는 방식은 다음과 같이 4가지로 크게 구분할 수 있다. 
- <i>SSG (Static Site Generators)</i>
- <i>ISR (Incremental Static Regeneration)</i> <span style="font-size:10px;color:grey;">(또는 ISG라고도 한다)</span> 
- <i>SSR (Server-Side Rendering)</i>
- <i>CSR (Client-Side Rendering)</i>

<br/>

각 방식마다 장단점이 있고 지원하는 `library`/`framework도` 다르다. 또한 프로젝트의 기획이나 `UX design`에 따라서도 어떤 방식을 적용할 지 달라질 수 있다. 하나의 서비스에 한가지 방법만을 사용하지 않아도 된다. 어떤 페이지는 `SSG`, 또 다른 페이지는 `SSR`을 사용할수도 있다.    
<br/>
본격적으로 렌더링을 이야기하기 전에, `SPA`(`Single page application`)에 대해서 알아보자. `SPA`는 2010년 초반, 프론트엔드 개발자들이 각 페이지에 대해서 기존 `HTML/CSS/JS` 조합을 사용하는 대신 전체 앱 컨텐츠 흐름을 `javascript`만으로 구현하기를 원하여 탄생하게 되었다. 따라서 서로 다른 `CSS`와 `javascript` 리소스를 로드하는 여러 `HTML`을 보유하고, `browser`가 링크를 사용해 페이지 사이를 탐색하는 대신에, `SPA`를 이용하여 컨텐츠가 없는 단일 `HTML`페이지를 사용하여 하나 이상의 `javascript` 파일을 로드할 수 있게 된 것이다. `SPA`의 등장으로 다음과 같은 이점이 생기기도 했다.

- 원하는 방식으로의 코드 설계/배포를 단일 패키지로 구축
- `application`이 한번에 모두 로드되므로 탐색 및 `interaction`에 일반적으로 추가적인 리소스 로딩이 필요하지 않아 빠른 속도
- `SPA`는 `api`를 사용해 `content`를 `query`하기 때문에 `data`와 `ui`간의 `decoupling`으로 관심사 분리

<br/>

하지만 동시에 다음와 같은 한계점도 발생하였다.

- `app bundle`의 전체 크기가 상당히 커져 초기로딩속도가 느려짐 -> 성능부담으로 발전
- 페이지 탐색시 상태관리가 복잡해질수 있는 가능성
- 까다로운 `SEO` 최적화 <span style="color:Red;font-size:17px;vertical-align:middle;">*</span>

<br/>

특히 `SEO`가 점점 중요한 역할을 하게 되면서 `SPA`의 한계점중 하나인 `SEO` 최적화를 커버하기 위해 여러가지 `rendering` 방식이 등장하게 되었다.
 
<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>

</div>

