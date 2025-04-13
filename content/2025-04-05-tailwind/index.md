---
title: I'm using the Tailwind css in these days
tags: [javascript, typescript, react, designSystem, css, softwareDevelopment]
date: 2025-04-05T12:59:52.226Z
path: blog/tailwind
cover: ./img.png
excerpt: Using Tailwind as a former CSS-in-JS user
show: true
---

최근 `frontend development` 계에서 큰 이슈가 되는 소식이 있었다. 그동안 큰 비중을 차지하던 `css-in-js` 라이브러리 중 하나인 `styled-component`가 공식적으로 <u>maintenance mode</u>로 들어갔다는 것. 많은 개발자들은 이 소식에 놀라움을 감추지 못했고, 물론 나 또한 현업에서 `styled-component`를 직접 사용하진 않지만 (`emotionjs` 사용중) 크게 다가왔다.  
왜냐하면 그동안 업계에서 큰 영향력을 가지고 있던 라이브러리가 앞으로 새로운 기술을 내지 않을것이라는 소식은 많은 것들을 내포하고 있기 때문이다. 그러한 `behind the scenes`에는 `css-in-css` 기술의 발전이 큰 역할을 했을거라고 많은 개발자들이 추측하고 있는데, 그중 대표적인 라이브러리가 바로 오늘 이야기할 `tailwindcss`, 줄여서 `tailwind` 이다.

### `css-in-js` vs `css-in-css`

|                      | **CSS-in-JS**                               | **CSS-in-CSS**                                            |
| -------------------- | ------------------------------------------- | --------------------------------------------------------- |
| **정의**             | JavaScript 코드 안에서 CSS를 작성           | 전통적인 방식으로 `.css` 파일에 CSS를 작성                |
| **스타일 적용 방식** | JS에서 동적으로 스타일 생성 및 주입         | 정적인 CSS 파일을 `<link>`로 로딩                         |
| **모듈화/스코프**    | 자동으로 컴포넌트 단위 스코핑 지원          | 기본적으로 전역, 별도 설정 필요 (`BEM`, `CSS Modules` 등) |
| **동적 스타일링**    | 자바스크립트 변수나 상태로 직접 스타일 제어 | 제한적, 클래스 변경이나 inline-style 사용 필요            |
| **성능**             | 런타임 오버헤드 있음 (초기 렌더링에 영향)   | 빠름, 브라우저가 최적화된 방식으로 해석                   |
| **유지보수**         | 컴포넌트와 스타일이 같이 있어서 관리 편리   | 스타일과 로직이 분리되어 명확                             |
| **툴링 지원**        | 일부 에디터 기능 제한적일 수 있음           | 강력한 에디터 지원, 오래된 생태계                         |
