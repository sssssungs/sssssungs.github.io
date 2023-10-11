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
`React 16` 에서부터 등장한 `Error boundary`를 설정해주면 `boundary` 내부의 `component`와 또는 그 하위 `component`에서 발생하는 `error`를 `catch`할 경우 `fallback ui`(주로 error ui)를 띄워줄 수 있다. `error`에 대한 준비가 따로 되어있지 않다면, `React`에서 제공하는 `error page`로 넘어간다.  

### react-error-boundary
공식문서를 살펴보면, `Error boundary`는 현재 `class component`에서만 작성(`getDerivedStateFromError`, `componentDidCatch`)이 가능하고, `functional component`로 작성할 수 있는 방법이 따로 존재하지 않는다. 하지만 요즘 서비스 대부분은 `functional component`로 구현되기 때문에 이를 도와주는 <a href='https://github.com/bvaughn/react-error-boundary' target="_blank" rel='noopener noreferer'>react-error-boundary</a> 패키지를 사용하는 경우가 많다. 

#### **다음과 같은 상황에서는 error boundary에 catch되지 않는다 **
- event handler
- asynchronous action
- Server side rendering (SSR)
- Error boundary 자체 오류


wip




<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary<br/>
- https://github.com/bvaughn/react-error-boundary<br/>
</div>

