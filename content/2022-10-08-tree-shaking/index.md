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
Babel 설정 : `babel`은 JS 최신문법을 구형 browser에서도 호환가능하도록 변환하는 transpiler이다. `ES5` 문법은 `import`를 지원하지 않기 때문에 `commonjs` 문법의 `require`로 변경이 필요하다. 그런데 `require`는 `export`된 모든 모듈을 불러오기 때문에 tree shaking을 적용시켜도 소용이 없다. 이를 막기 위해 `babelrc`를 설정하여 `ES5` 변환을 막는다.
```typescript
“@babel/preset-env”,
{   
        "modules": false
}
```

3. `package.json`에 `sideEffects` 속성 사용  
`webpack`이 `sideEffects`를 일으킬 수 있는 코드라고 판단하면 사용을 하지 않더라도 제외시켜버린다.

4. `webpack production mode` 사용
