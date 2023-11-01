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
- SSG (Static Site Generators)
- ISR (Incremental Static Regeneration) <span style="font-size:10px;color:grey;">(또는 ISG라고도 한다)</span> 
- SSR (Server-Side Rendering)
- CSR (Client-Side Rendering)

<br/>

각 방식마다 장단점이 있고 지원하는 `library`/`framework도` 다르다. 또한 프로젝트의 기획이나 `UX design`에 따라서도 어떤 방식을 적용할 지 달라질 수 있다.  
하나의 서비스에 한가지 방법만을 사용하지 않아도 된다. 어떤 페이지는 `SSG`, 또 다른 페이지는 `SSR`을 사용할수도 있다.  
렌더링을 이야기하기 전에, `SPA`(`Single page application`)에 대해서 알아보자.  
`SPA`는 2010년 초반, 프론트엔드 개발자들이 각 페이지에 대해서 기존 `HTML/CSS/JS` 조합을 사용하는 대신 전체 앱 컨텐츠 흐름을 `javascript`만으로 구현하기를 원하여 탄생하게 되었다. 따라서 서로 다른 `CSS`와 `javascript` 리소스를 로드하는 여러 `HTML`을 보유하고, `browser`가 링크를 사용해 페이지 사이를 탐색하는 대신에, `SPA`를 이용하여 컨텐츠가 없는 단일 `HTML`페이지를 사용하여 하나 이상의 `javascript` 파일을 로드할 수 있게 된 것이다.
 
<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>

</div>

