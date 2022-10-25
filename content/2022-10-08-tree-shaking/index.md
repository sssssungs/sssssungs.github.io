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
위의 세가지 경우 말고도 다양한 이유가 존재한다. 하지만 개발자로 일한다면 bundle size는 작으면 작을수록 다다익선이라는 것에 동감할 것이다.  
<br/>

<a href='https://v4.webpack.js.org/guides/tree-shaking/' target="_blank" rel='noopener noreferer'>Webpack 공식문서</a>를 확인해보면 `tree shaking` 설정을 위해 해줘야할 것은 대표적으로 다음 4가지가 있다.
1. `ES6 module` format 사용 (`import`/`export`)
2. `commonjs로` compile 되는것 방지 (`@babel/preset-env` 등 이용)
3. `package.json`에 `sideEffects` 속성 사용
4. `webpack production mode` 사용 
