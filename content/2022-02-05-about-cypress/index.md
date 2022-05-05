---
title: Let's talk about Javascript testing and Cypress
tags: [javascript, typescript, css, react, html, testing]
date: 2022-02-05T20:05:44.226Z
path: blog/cypress
cover: ./cypress.png
excerpt: Opinion about Cypress, end-to-end javascript based framework for testing
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
하지만 위 두가지는 어려운점이 어떤 부분이 어떤 과정으로 testing 되는지 육안으로 확인하기 어렵다는 것이다. `snapshot` 기능을 이용해서 스타일링 코드를 확인할 수 있지만 실제로 어떤 과정을 거치는지 말이다. 그래서 한번 검토해본 것이 e2e testing tool중에 한 가지인 `cypress`이다.<br/><br/>
[Cypress](https://github.com/cypress-io/cypress)는 e2e test 뿐만아니라 unit test, integration test까지 사용이 가능하다. 좀더 `scenario`/`user-oriented`의 성격을 가지고 있는 tool이다.<br/>
`cypress`를 접하면서 느꼈던 몇가지 장점 중 하나는 바로 GUI이다. 내가 어떤식으로 test를 하고있고, test failure가 발생했을 경우에는 어디에서 발생했는지 log와 함께 표시된다.

<div style="width: 70%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./cypress-ui1.png"/>
  <div style="width:200px;margin-left:auto; margin-right: auto;font-size:13px;color:#8b9196; margin-top: 10px;">Cypress를 실행했을때 GUI</div>
</div>

<div class='cypress-gif'>

![cypress-example](./cypress-example.gif)
<div class='caption'>test를 실행했을때 GUI</div>
</div>

`sample scenario`가 기본으로 포함되어 있기 때문에 code 작성시 레퍼런스로 참조가 가능하다.<br/>
또 유용한 method를 제공해주어 편의성이 높다.
```javascript
cy.viewport(550, 750) // Set viewport to 550px x 750px
cy.getCookie('auth_key') // Get cookie with name 'auth_key'
cy.go('back') // Go back

```
`react-testing-library`를 이용해서 test code를 작성할때에는 항상 custom hook이나 store, 비동기 요청 등을 Mocking 해주어야 했고, 로직이 크게 변경되면 test code 또한 많은 부분을 수정해야하는 단점이 있었다.<br/>
`cypress`를 사용했을 때에는 `local`에서 해당 service를 실행한 뒤 그에 대해 내가 작성해놓은 test code대로 동작이 되기 때문에 그런 번거로움이 줄었다.<br/><br/>
하지만, `cypress`에도 몇가지 단점을 발견했는데 일단 완성도가 낮다는것, 에러 핸들링이 쉽지 않다는것, 그리고 test code를 다 마칠때까지 걸리는 시간이 `jest`보다 길었다. <span style="font-size:11px">추가로 `async`/`await` 사용방법이 일반적인 방법과 다르다는것도..</span>

`cypress`를 알아보면서 여러 장점도 있지만, 단점도 명확했기 때문에 딱히 "이것은 `rtl`보다 좋은 testing tool이다" 라고 확언을 하지는 못하겠다. 어쩌면 지금 사용하는 `rtl`을 사용해 의미있게 test code를 작성하는 것도 생산적인 test를 할 수 있는 방법 중 하나일 것이다. <br/> 목적에 맞추어 잘 사용해 test에 들이는 수고를 덜자.

참조<br/>
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a<br/>
https://docs.cypress.io/
