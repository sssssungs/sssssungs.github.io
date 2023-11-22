---
title: Different types of web rendering strategy
tags: [javascript, typescript, react, html, css, nextjs, seo]
date: 2023-10-22T13:12:11.226Z
path: blog/web-rendering
cover: ./img.png
excerpt: Do you know 4 types of web rendering in frontend?
show: true
---

`Frontend`에서 `ui`를 렌더링하는 방식은 다음과 같이 4가지로 크게 구분할 수 있다. 
- <i>SSG (Static Site Generators)</i>
- <i>SSR (Server-Side Rendering)</i>
- <i>CSR (Client-Side Rendering)</i>
- <i>ISR (Incremental Static Regeneration)</i> <span style="font-size:10px;color:grey;">(또는 ISG라고도 한다)</span> 

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
 
### SSG (Static Site Generators)
초기 `SSG`는 `2008`년부터 등장했으며 <a href='https://en.wikipedia.org/wiki/Content_management_system' target='_blank' rel='noopener noreferer'>`CMS(Content Management System)`</a> 기반의 `application`에 대한 새로운 대안을 제시하려고 했다. 실제로 많은 웹사이트에서는 `CMS`(ex `Wordpress`)로 편집된 콘텐츠를 모든 사용자에게 `serving`한다. 콘텐츠가 `runtime`에 생성되므로 `CMS`의 변경 사항을 사용자에게 직접 배포할 수 있다. 최근에는 `react`/`vue` 기반의 `Gatsby`가 대표적인 `SSG framework`로 사용되고 있다.  
`Nextjs`는 기본적으로 `SSG`를 `pre-rendering`이라고 소개한다. 각 페이지를 미리 `HTML`의 문서로 생성하여 가지고 있는 것이다. `client` 단에서 추가렌더링이 발생하지 않으며 `Nextjs`의 `rendering`에서 `default`값으로 적용된다.
`SPA`대신 `SSG`를 사용할 경우 다음과 같은 이점을 가진다.
- 더 나은 `SEO`: 여러 `HTML` 페이지로 구성되어 있으므로 `crawling`이 더 쉽고 콘텐츠의 `index`가 잘 생성된다  
- 성능 향상: 최신 `SSG` 도구에는 요청한 페이지를 실행하는 데 필요한 `JS`/`CSS` 코드만 포함되어 있으며 사용자가 웹 사이트를 탐색하면 추가 코드를 `load`한다
- 다중 소스 콘텐츠: `SSG`는 `headless CMS`(`Contentful`, `Strapi`), 로컬 `markup` 파일같은 다중 콘텐츠 소스 통합을 제공한다

<br/>

하지만 단점도 존재하며 다음과 같다.
- 사용자 맞춤형 콘텐츠: 모든 사용자가 동일하다고 생각하고 간주하게 된다. 그렇지 않으면 각 사용자에 대해 정적 콘텐츠를 만들어줘야 하며 용량이나 보안 등의 문제가 생긴다
- `learning curve`: `Gatsby`같은 경우 `react` 기반임에도 불구하고 콘텐츠 쿼리에 `graphQL`을 사용하므로 이를 자세히 살펴보아야한다
- 즉각적인 반영 어려움: 최신상태의 웹 컨텐츠를 보여주기 위해서는 배포를 진행해야 하고 그만큼의 시간을 소요하게 된다. 만약 `CI/CD`에 10분이 걸린다면 사용자는 10분 후에 현재의 컨텐츠를 보게 될 것이다

### SSR (Server Side Rendering)
`rendering`에서 최신 트렌드는 `SSR`일 것이다. 사실 그동안 `SSR`은 오랫동안 사용되어 왔다.
```html
<div>Hello <?php echo 'world'; ?></div> <!-- 이를 코드 기억하는가 ? -->
```
`SSR`은 `server`단에서 `HTML` 컨텐츠를 `rendering` 하는것을 의미한다. `JEE`, `ASP.NET`, `PHP`등의 일반적인 `MVC framework`는 `SSR`을 가능하게하는 `template` 기반의 `engine`을 가지고 있다.    

<br/>

이러한 `SSR`은 한가지 제한사항이 있다. `client`단에서의 `interaction`을 `server`에서 처리할 수 없으며, 브라우저에 표시되는 컨텐츠는 초기 `server`에서 생성된 컨텐츠로 제한된다는 것이다. 
그 다음 동작들은 `javascript` 파일에 작성되어야 한다. 하지만 `Nodejs`의 등장으로 이제는 `server`단과 `client`단 모두 `javascript`를 실행할수 있게 되었고, `rendering` 공유가 가능해졌다. 즉, `Nextjs`, `Nuxt` 등의 `framework`가 제공하는것은 `javascript`를 활용하여 `server`단의 초기 로드와 `client`단의 `interaction`을 통합하여 `rendering`을 공유하는 것이라고 할수 있다.  
`SSR`은 다음과 같은 장단점을 가진다.  

장점
- `SEO`에 유리: 검색엔진 `indexing`이나 `social media`에 공유할 수 있는 정보를 가지고 있다
- 빠른 성능: 일반적인 `SPA`보다 리소스 로드시 더 나은 성능을 가진다
- API `hosting`가능: `SSR`이 `server`에서 실행되므로 `SSR`을 사용하여 `API`를 개발할 수도 있다

<br/>

단점
- `server`가 필요: `SSR`이 작동하려면 당연히 `server`가 필요하다. 이는 추가적인 리소스 비용으로 간주된다
- `learning curve`: `client`단에서만 작업하는것에 비해 많은 새로운 개념과 내용이 많으므로 사전학습이 필요하다 
- `client`과 다른 동작: 예를들어 `window` 객체는 `server`에서는 사용할 수 없으므로 이러한 차이를 확인하여 전체적으로 잘 동작하는지 통합적인 테스트가 필요하다

### CSR (Client Side Rendering)
`CSR`에서는 페이지의 기본 `HTML` 컨테이너만 서버에 의해 `rendering`된다. 그리고 페이지의 컨텐츠를 표시하기 위해 필요한 로직이나 `data fetch`, `routing` 등은 실행되는 `javascript` 코드에 의해 처리된다. `SPA`의 성장과 함께 `CSR`도 자연스럽게 인기를 얻었다. `frontend` 개발자들에게 가장 친숙하고 또 기본적으로 사용했던 방식일것이다. 간단히 장단점만 짚고 넘어가도록 하겠다.

<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://en.wikipedia.org/wiki/Content_management_system<br/>
- https://levelup.gitconnected.com/spa-ssg-ssr-and-jamstack-a-front-end-acronyms-guide-6add9543f24d<br/>
</div>

