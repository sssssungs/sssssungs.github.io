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

`class component`로 작성한 `error boundary` 예시
```javascript
import { Component, ErrorInfo, ReactNode } from 'react';
import { DefaultErrorFallback } from './DefaultErrorFallback';

export class ErrorBoundary {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  // 하위 컴포넌트에서 에러가 발생하면 호출된다.
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // 에러와 에러 정보를 받아서 처리한다.
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    // 에러가 있으면 fallback 렌더링
    if (this.state.hasError && this.state.error) {
      return (
        this.props.fallback || <DefaultErrorFallback error={this.state.error} />
      );
    }
    // 에러 없으면 children 렌더링
    return this.props.children;
  }
}
```

`react-error-boundary` 사용예시
```javascript
import { ErrorBoundary } from "react-error-boundary";

const DetailApp = () => {
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <ExampleApplication/>
        </ErrorBoundary>
    )
}

```

### Error boundary에 catch 되지 않는 case
<i>`Error boundary`는 `rendering` 중에 발생한 에러만을 catch 한다</i>
- `Event handler` : `Error boundary`는 `event handler` (`onChange` 등) 내에서 발생하는 오류는 catch하지 못한다.
- `Asynchronous action` : `setTimeout`, `requestAnimationFrame`등 비동기 동작 코드에서 발생하는 오류는 catch하지 못한다.
- `Server side rendering (SSR)`
- `Error boundary 자체 오류` : `Error boundary` 컴포넌트 내부에서 발생하는 오류는 catch 하지 못한다. 이러한 error의 경우 상위 컴포넌트의 `error boundary`를 사용해야한다.

<br/>

언제나 늘 그렇듯이, `error boundary`를 너무 적게 사용하는 경우나 과도하게 사용하는 경우, 각각의 단점이 존재하기 때문에 적절한 사용이 필요하다. 너무 적게 사용할 경우 한부분에서의 오류가 전체 서비스의 중단을 초래할 수 있고, 그렇다고 각 `component`마다 `error boundary`를 설정한다면 ux에 영향을 줄 수 있다.<br/>  
가장 중요한것은 서비스를 설계할때에 `error` 상태를 포함시켜서 하는것이다. `error`가 `0%`인 서비스는 존재하지 않는다. 대부분의 기획자나 개발자들이 서비스를 구현하는데에 집중하여 설계를 하지만, 그 서비스에는 `error`가 발생했을때 얼마나 `smooth`하게 `handling`하여 사용자 경험을 해치지 않는지도 포함되어 있는것이다.


<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary<br/>
- https://github.com/bvaughn/react-error-boundary<br/>
</div>

