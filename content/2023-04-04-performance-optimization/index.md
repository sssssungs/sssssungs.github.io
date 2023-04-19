---
title: Performance optimization tips from my experiences
tags: [javascript, typescript, react, html, css, nextjs, softwareDevelopment]
date: 2023-04-04T19:33:32.226Z
path: blog/performance
cover: ./img.png
excerpt: This and that about performance optimization
show: true
---

웹성능 개선을 위한 이것저것/여러가지 방법을 작성해보려고 한다. 개인적으로 공부하는 내용이라 두서가 없을 수 있으니 주의!

### Bundle analyzer
bundle된 `JS` 파일이 어떤 코드들로 어느정도의 크기를 가지고 있는지 가시화 하여 보여주는것이 바로 `bundle-analyzer`이다. `NEXTJS`를 사용한 경우 <a href="https://www.npmjs.com/package/@next/bundle-analyzer"  target='_blank' rel='noopener noreferer'>@next/bundle-analyzer</a>를, `CRA`(`create-react-app`)을 사용한 경우에는 <a href="https://www.npmjs.com/package/cra-bundle-analyzer"  target='_blank' rel='noopener noreferer'>cra-bundle-analyzer</a>를 세팅하면 된다. bundle analyzer를 실행하면 아래 사진처럼 JS 코드가 어떻게 구성되어 있는지 보여준다. 그 크기가 클수록 큰 용량을 차지한다. 

<div style="width: 70%;margin-bottom: 15px; margin-left:auto; margin-right: auto; box-shadow: 1px 1px 5px grey">
  <img src="./bundera.png" />
</div>


### Image size optimization with CDN
<div style="width: 70%;margin-bottom: 15px; margin-left:auto; margin-right: auto; box-shadow: 1px 1px 5px grey">
  <img src="./cdn.png" />
</div>
<br/>

image `CDN`을 사용한다. `CDN`(`Content Delivery Network`)은 컨텐츠를 빠르고, 저렴하고, 안전하게 전송하기 위해 연결된 서버 네트워크이다. 지리적으로 분산시켜 웹 컨텐츠를 사용자와 가까운 곳에서 전송함으로써 전송 속도를 높인다.  
`CDN`은 image 뿐만 아니라 `web page`, `image`, `video` 등의 컨텐츠를 사용자의 물리적 위치와 가까운 server에 `caching`한다. 대표적인 image `CDN` service는 <a href="https://cloudinary.com/"  target='_blank' rel='noopener noreferer'>cloudinary</a>, <a href="https://imagekit.io/"  target='_blank' rel='noopener noreferer'>imagekit.io</a> 등이 있다.


### Code splitting & Lazy loading  
`bundler`를 사용하면 하나의 bundle로 코드를 변환해주어 앱을 로드할때 편리하지만, 별도의 큰 third-party library를 포함하는 경우 이 또한 bundle에 포함되기 때문에 로드시간이 오래 걸리는 문제가 발생한다. 이때 `code splitting`과 `lazy loading`을 사용하면 성능을 향상 시킬 수 있다.  
`lazy component`는 `Suspense` 하위에서 rendering되어야 하며, `suspense`는 `lazy component`가 로드되길 기다리는 동안 로딩화면을 보여줄 수 있다.

```typescript
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    );
}
```

