---
title: Let's talk about Javascript testing and Cypress
tags: [javascript, typescript, css, react, html, testing]
date: 2022-02-05T20:05:44.226Z
path: blog/cypress
cover: ./cypress.png
excerpt: Opinion about Cypress, end-to-end javascript based framework for testing.
show: true
---

개발을 진행하면서 test를 한다는 것은 여러가지 의미를 가진다. 사실 개발을 진행하는 모든 일련의 프로세스가 test이다. 하지만 이러한 test를 좀더 세분화시키고, 의도대로 잘 작동하는지 한번더 검증하는 단계가 필요하다. 특히 새로운 기능을 추가하는 것이 아닌 기존의 code를 수정하게 되는 경우(예를 들어 리팩토링을 하는경우)에는 그 기능의 결과에는 영향을 미치지 않아야 하기 때문에 이때에는 test 단계에서 잘못된 부분을 catch할 수 있다.<br/>
test를 그 목적에 따라 구분지으면 다음의 세가지 분류로 나눌 수 있다.(다음의 분류는 모든 test에 대한 엄격한 rule이 아니고, 다양한 상황이나 목적에 의해 더 세분화되기도 단순화되기도 한다)<br/>

- <b><i>Unit Testing (유닛 테스트)</i></b><br/>
code가 개발자의 의도대로 작동하는지 확인하기 위해 개별 컴포넌트 또는 모듈을 독립적으로 확인하는 것<br/>
- <b><i>Integration Testing (통합 테스트)</i></b><br/>
컴포넌트 또는 모듈이 그룹화되서 통합/결합 될때 잘 작동하는지 확인하는 것<br/>
- <b><i>Functional Testing (기능 테스트)</i></b><br/>
서비스의 기능을 테스트하여 올바른 작업을 수행하는지 확인하는 것<br/>
<br/>

javascript로 작성된 프로젝트에 test code를 작성할 때에 사용할 수 있는 것들은 다양하다. 대표적으로 unit test를 작성할때 `jest`, `mocha`, `chai`등이 있다. 이들은 다 비슷한 목적을 가지고 있고 닮아있지만 다른 특성들을 가진다.<br/>
나는 대부분의 test code를 작성할때, `react`로 짜여진 컴포넌트를 `jest` 기반의 라이브러리를 사용했던 경험이 있다. <br/>
사용했던 testing library는 [enzyme](https://enzymejs.github.io/enzyme/), [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) 이 두 가지 이다.


참조
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a
