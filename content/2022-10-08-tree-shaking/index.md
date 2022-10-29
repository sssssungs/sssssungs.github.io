---
title: Let's shake the tree with javascript
tags: [javascript, typescript, html, react, webpack]
date: 2022-10-08T17:44:04.226Z
path: blog/tree-shaking
cover: ./img.png
excerpt: Javascript bundle optimization with tree shaking
show: true
---

`Tree shaking`은 그대로 해석하면 `나무 흔들기`라는 뜻으로, 코드내에는 명시되어 있지만 실제로 프로그램 실행에 필요하지 않은 코드를 build 단계에 제거하는 매커니즘을 의미한다. tree shaking을 하게 되면 bundle file을 optimization할 수 있으며, 
그만큼 bundle file이 load되는 시간이 줄어들기 때문에 유저들이 빠른 속도로 서비스를 이용할 수 있게 된다. 그럼 왜 tree shaking 해야하는걸까 생각해보자. 대표적으로 다음의 이유가 있다.
- Interaction이 많아지면서 JS file size가 증가
- JS file이 늘어난 만큼 api request도 늘어나 네트워크 리소스소모가 커짐
- JS file 실행시간도 증가되어 CPU에 영향을 주고, page load 시간이 늘어나 user의 이탈률 증가  

<br/>
위의 세가지 경우 말고도 다양한 이유가 존재한다. 하지만 개발자로 일한다면 bundle size는 작으면 작을수록 좋다는 것에 공감할 것이다.  
<br/>

<a href='https://v4.webpack.js.org/guides/tree-shaking/' target="_blank" rel='noopener noreferer'>Webpack 공식문서</a>를 확인해보면 `tree shaking` 설정을 위해 할수 있는 대표적인 방법을 알아보자.

<br/>  

1. `ES6 module` format 사용 (`import`/`export`)  
필요한 모듈만 `import`하면 해당 코드만 bundling시 build하기 때문에 코드 크기를 줄일 수 있다
```typescript
import React from 'react'; // X
import { useState, useEffect } from 'react'; // O
```

2. `commonjs로` compile 되는것 방지 (`@babel/preset-env` 등 이용)  
Babel 설정 : `babel`은 JS 최신문법을 구형 browser에서도 호환가능하도록 변환하는 `transpiler`이다. `ES5` 문법은 `import`를 지원하지 않기 때문에 `commonjs` 문법의 `require`로 변경이 필요하다. 그런데 `require`는 `export`된 모든 모듈을 불러오기 때문에 tree shaking을 적용시켜도 소용이 없다. 이를 막기 위해 `babelrc`를 설정하여 `ES5` 변환을 막는다.
```typescript
“@babel/preset-env”,
{   
        "modules": false
}
```

3. `package.json`에 `side Effects` 속성 사용
sideEffect 옵션은 직접 내가 만든 package를 다른 개발환경에서 tree shaking 되도록 최적화할 때 사용 할 수 있다. 기본값은 `true`로 되어 있다. 이 옵션은 package 개발자가 webpack 에게 사용한 코드 이외의 코드는 제거해도 문제가 없는지 알려주는 옵션이다.  
만약 import한 코드를 제외하고 전부 제거해도 괜찮으려면 각 코드간의 의존성 관리에 문제가 없어야 한다. 예를들어, A라는 package에서 `a`, `b`, `c` 라는 함수가 존재할 때 `a`만 `import`해서 사용할 경우,
```typescript
// A pacakge
export const a = () => { ... }
export const b = () => { ... }
export const c = () => { ... }
```
```typescript
// index.js
import { a } from 'A'
a();
```
`tree shaking`을 통해서 `b` 와 `c`는 삭제될 거라고 기대할 수 있다. 하지만 만약 `a` 함수에서 `b` 나 `c`에 의존성을 가지고 있다면 이 두가지 사용되지 않는 함수가 삭제되었을때 부작용이 발생하게 된다.  
이러한 의존관계를 번들링 과정에서 일일이 판단하기엔 어려우므로, side effect 옵션을 제공하여 import한 코드를 제외한 나머지를 제거하더라도 문제가 되지 않는지 설정을 할수 있도록 한다.
```typescript
{
  "name": "webpack-tree-shaking-example",
  "version": "1.0.0",
  "sideEffects": false
}
```

4. `webpack production mode` 사용
production 모드는 webpack 모듈 번들링 과정에서 자체적으로 코드를 최적화하여 용량을 줄인다. 보통 그렇지 않은 경우의 30%까지 번들용량을 줄여준다.

<br/>
<br/>
