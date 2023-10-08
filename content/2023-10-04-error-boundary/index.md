---
title: Error handling with React error boundaries
tags: [javascript, typescript, react, html, css, nextjs]
date: 2023-10-04T20:12:11.226Z
path: blog/error-boundary
cover: ./img.png
excerpt: Oops! Something went wrong!
show: true
---

### What is the Error boundary?
일부분의 `javascript` 에러가 전체 `application`을 중단시키는 것은 사용성과 사용자 경험 측면에서 잘못된 방식이다. 에러가 발생했다면 발생한 부분의 동작만 멈추는것이 여러모로 합리적이다. `React`의 전통적인(맞는 표현인지는 모르겠다) `error handling` 방법과는 다르게, 
`React 16` 에서부터 등장한 `Error boundary`를 설정해주면 `boundary` 내부의 `component`와 또는 그 하위 `component`에서 발생하는 `error`를 `catch`할 경우 `fallback ui`(주로 error ui)를 띄워줄 수 있다.  
하지만 몇가지 예외적인 상황이 있다. (_event handler_, _server side rendering_, _asynchronous function_의 경우에는 `error boundary`에 `detection` 되지 않는다)


wip



<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary<br/>

</div>

