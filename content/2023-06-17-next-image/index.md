---
title: Do you know NextJS has an Image component ?
tags: [javascript, typescript, react, html, css, nextjs]
date: 2023-07-17T16:46:32.226Z
path: blog/next-image
cover: ./img.png
excerpt: Something you should know about the Image component in NextJS
show: true
---

`Nextjs`를 사용해서 코딩을 할때 `<img />`를 사용하면 다음과 같은 `warning`이 뜨는것을 볼 수 있다.

<div class="quote">
Error: Do not use img. Use Image from 'next/image' instead. See https://nextjs.org/docs/messages/no-img-element.  @next/next/no-img-element
</div>

그럼 사용해줘야하지 않겠는가? 이번 포스팅에서는 다양한 기능과 사용자 경험을 향상시킬 수 있는 `next/image` 컴포넌트에 대해서 알아보려고 한다.  

`Nextjs`에서 제공하는 `Image component`는 _**version 10**_ 부터 등장했으며 그 기능을 요약하자면 다음과 같다. 
- 최신 `image format`으로 여러 `device`를 대응하여 적절한 `image size` 제공
- `layout shift` 방지 
- `image`가 `viewport`에 들어갈때만 `load` 되도록하며 `placeholder`를 제공 


### How to use
`next/image`의  사용법은 아래와 같다
```javascript
import Image from 'next/image';
const Photo = () => {
  return (
      <Image
          src={'https://imageurl.com'}
          alt="photo-of-you"
      />
  )
}
```

`next/image`는 정적이미지의 경우 `width`, `height`, `blurDataURL`이 자동으로 생성된다 