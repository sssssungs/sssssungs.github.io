---
title: First impression of Functional programming in Javascript 
tags: [javascript, typescript, functionalProgramming]
date: 2021-07-21T05:25:44.226Z
path: blog/functional-programming
cover: ./fp-img.png
excerpt: 함수형 자바스크립트 프로그래밍 도서를 읽고 나서의 나의 정리
---

2021년, 개발관련 도서를 3권은 읽어보자는 생각에 처음 알라딘에서 구매하게된 책.   
**함수형 자바스크립트 프로그래밍 (저자 유인동)**  

![](./book-cover1.png)

어쩌다 모나드에 대해서 들어보게 된 후 함수형 프로그래밍에 대해서 궁금증이 생겨서 구매하게 되었다.  
사실 내가 이전까지 알고 있었던 함수형 프로그래밍 이라고 하면 그저 **curying** 조금 정도였기 때문에, 그것이 어떤것을 말하는지를 아는것을 목표로 책을 읽기 시작했다.

```typescript
/* 대표적인 currying example */
const letsSum = function (x: number) {
    return function (y:number) {
        return x + y;
    }
};
console.log(letsSum(1)(3));  // 4
```
---

### 대략적인 책의 내용
책은 [underscore.js](https://underscorejs.org/)의 method를 하나하나 분석하고 구현까지 해보면서 나중에는 [lodash](https://lodash.com/)와 저자가 만든 [partial-js](https://marpple.github.io/partial.js/) 에 대해서 설명한다.
설명이 쭈욱 있고 또 코드조각조각을 첨부해두어 실습을 할수 있도록 했기 때문에 실제로 책을 읽고, 모든 코드까지 쳐보면서 그 실행 결과를 `console.log`에 찍어보는 과정이 책을 완뽕(?)하는데에 많은 시간을 걸리게 했다. 실제로도 많은 시간이 걸리기도 했다. (사실 중간에 `Jquery`와 `html`을 가지고 하는 실습은 거의 눈으로만 훑었다😅)


### 느낀점 
위에서도 설명했듯이 currying 조금 정도의 지식을 가지고 있던 내가 이를 이해하기 처음에는 어려웠지만, 책에서 꼼꼼히 설명을 해주고 또 첨부된 코드도 쳐보면서 책을 읽어나가면서 어느정도는 이해가 되었다고 생각한다.
특히 javascript를 사용하는 개발자라면 면접에서 꼭 질문을 받게되는 그 대망의 `closure`에 대해서도 코드와 함께 잘 설명해주고 있어 이해하는데에 많은 도움이 되었다.


