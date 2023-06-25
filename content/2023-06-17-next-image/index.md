---
title: Do you know NextJS has an Image component ?
tags: [javascript, typescript, react, html, css, nextjs]
date: 2023-07-17T16:46:32.226Z
path: blog/next-image
cover: ./img.png
excerpt: Something you should know about the Image component in NextJS
show: true
---

`Nextjs`를 사용해서 코딩을 할때 `<img />` `component`를 사용하면 다음과 같은 `warning`이 뜨는것을 볼 수 있다.

<div class="quote">
Error: Do not use <img>. Use Image from 'next/image' instead. See https://nextjs.org/docs/messages/no-img-element.  @next/next/no-img-element
</div>

이번 포스팅에서는 다양한 기능과 사용자 경험을 향상시킬 수 있는 `next/image` 컴포넌트에 대해서 알아보려고 한다. 우선 그 기능부터 요약하자면 다음과 같다. 
- 최신 `image format`으로 여러 `device`를 대응하여 적절한 `image size` 제공
- `layout shift` 방지 
- `image`가 `viewport`에 들어갈때만 `load` 되도록하며 `placeholder`를 제공 