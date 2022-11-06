---
title: NextJS 13 version features
tags: [javascript, typescript, react, html, css, nextjs]
date: 2022-10-29T18:10:44.226Z
path: blog/nextjs-13
cover: ./main.png
excerpt: NextJS 13 version has been released! Let's take a look at amazing features of them
show: true
---

얼마전 release 된 `nextjs 13 version` feature들을 알아보자. 자세한 내용은 <a href='https://nextjs.org/blog/next-13'>공식문서</a>에서 확인할 수 있다.

## app/ 디렉토리 (beta)
`app/` 디렉토리를 도입하여 nextjs의 `routing`, `layout` 경험을 개선하였다.
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./appdirectory.png"/>
</div>

`app/` 이하 디렉토리는 `layout` 기능을 제공하는데, 여러 페이지간 공통적인 컴포넌트를 공유해 렌더링을 최적화 시키고 컴포넌트간 상호작용을 구현할 수 있다.  `app/` 디렉토리에서 routing을 하려면 `page.js`라는 파일이 필요하다.


```jsx
// before
// pages/index.js
// index route (/)
export default function Page() {
    return <h1>Next.js 13 version release!</h1>;
}

// after (`nextjs 13`)
// app/page.js
// index route (/)
export default function Page() {
    return <h1>Next.js 13 version release!</h1>;
}
```

그런 다음 파일구조를 통해 `layout`을 정의할 수 있다. 

```jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Title of nextjs root layout</title>
      </head>
      <body>
        <h2>This is the shared title component</h2>
        {children}
      </body>
    </html>
  );
}
```
이렇게 설정해두면 `app/` 이하의 모든 `route`에 `RootLayout`이 노출된다

## React server component
이전 버전에서는 `server side`에서 데이터를 fetching 할때, `getServerSideProps`나 `getStaticProps`를 사용했지만, nextjs 13부터는 이 문법들을 사용하지 않는다. data fetch 함수를 선언한 뒤에 `use()` 안에 넣어주기만 하면 된다.
```typescript jsx
import { use } from 'react';

export default function Page() {
    const data = use(getData());
    return <div>{ data }</div>
}

export async function getData() {
    const res = await fetch(`https://dummyapi.com`, {
        cache: 'force-cache' // similar to getStaticProps
        // cache: 'no-store' // similar to getServerSideProps
    });
    return await res.json();
}
```


