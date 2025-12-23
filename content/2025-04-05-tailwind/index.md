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

## 차이점
내가 느낀 몇가지 새로운 부분을 살펴보면 다음과 같다.
- `Tailwind`의 유틸리티 클래스 접근법은 처음에는 생소할 수 있지만, 익숙해지면 개발 속도가 크게 향상된다. 별도의 CSS 파일을 만들거나 `styled-component`를 작성할 필요 없이 HTML/JSX에 직접 클래스를 작성하면 된다.

```jsx
// Before (emotionjs)
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.25rem;
  font-weight: 500;
  &:hover {
    background-color: #2563eb;
  }
`;

// After (Tailwind)
<button className="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600">
  Click me
</button>
```


- `Tailwind`는 기본적으로 일관된 디자인 토큰(색상, 간격, 타이포그래피 등)을 제공한다. 이를 통해 팀 전체가 동일한 디자인 언어를 사용할 수 있고, 디자인 시스템을 구축하기가 훨씬 쉬워진다. 개인적인 생각으로 이는 장점이자 단점이라고 할수 있을것 같다. 
- `Tailwind`는 사용하지 않는 CSS를 자동으로 제거하는 `PurgeCSS` 기능을 내장하고 있다. 프로덕션 빌드 시 실제로 사용된 클래스만 포함되어 최종 번들 크기가 매우 작아진다. 실제로 `css-in-js`보다 번들크기가 작은것을 확인할 수 있었다.
- `css-in-js` 중 사용중인 `facepaint`는 array로 반응형을 전달하는데 때로 이는 번거로운 작업이라고 느껴질때가 있다. 중간중간의 break point를 잘 맞춰줘야 하기 때문이다. 하지만, `Tailwind`에서는 접두사(`sm:`, `md:`, `lg:` 등)를 사용하면 미디어 쿼리를 별도로 작성할 필요 없이 반응형 디자인을 구현할 수 있다.

```jsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
```
 
## 내가 느낀 단점
- 초기 러닝커브가 높다. 클래스가 어떻게 사용되는지 알아야하고 document를 달고 살아야한다. 
- 복잡한 애니메이션이나 특수한 스타일링의 경우 여전히 커스텀 CSS가 필요할 수 있다. 이 경우 `css style`코드를 사용하는것이 훨씬 간단할때가 많다.
- 많은 클래스가 HTML에 붙어 있어 가독성이 떨어질 수 있다. 
