---
title: First impression of Functional programming in Javascript 
tags: [javascript, typescript, functionalProgramming, react]
date: 2021-07-21T05:25:44.226Z
path: blog/functional-programming
cover: ./fp-img.png
excerpt: Book review on Functional javascript programming with my reckoning.
show: true
---

2021년, 개발관련 도서를 3권은 읽어보자는 생각에 처음 알라딘에서 구매하게된 책.   
**함수형 자바스크립트 프로그래밍 (저자 유인동)**  

![](./book-cover1.png)

어쩌다 모나드에 대해서 들어보게 된 후 함수형 프로그래밍에 대해서 궁금증이 생겨서 구매하게 되었다.  
사실 내가 이전까지 알고 있었던 함수형 프로그래밍 이라고 하면 그저 **currying** 조금 정도였기 때문에, 그것이 어떤것을 말하는지를 아는것을 목표로 책을 읽기 시작했다.

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
설명이 쭈욱 있고 또 실행 코드 조각 조각을 첨부해두어 실습을 할수 있도록 했기 때문에 실제로 책을 읽고, 모든 코드까지 쳐보면서 그 실행 결과를 `console.log`에 찍어보는 과정이 책을 완뽕(?)하는데에 많은 시간을 걸리게 했다. 실제로도 많은 시간이 걸리기도 했다.  
`html`, `jquery`와 함께 `dom`을 조작하는 예제를 함수형 프로그래밍으로 짜서 실습하도록 하는 부분이 있다. (사실 이부분은 대충 읽고 넘어갔다) 


### 느낀점 
위에서도 설명했듯이 currying 조금 정도의 지식을 가지고 있던 내가 이를 이해하기 처음에는 어려웠지만, 책에서 꼼꼼히 설명을 해주고 또 첨부된 코드도 쳐보면서 책을 읽어나가면서 어느정도는 이해가 되었다고 생각한다.
특히 javascript를 사용하는 개발자라면 면접에서 꼭 질문을 받게되는 그 대망의 `closure`에 대해서도 코드와 함께 잘 설명해주고 있어 이해하는데에 많은 도움이 되었다. 또 함수형 프로그래밍 라이브러리를 직접 구현해보는 것도 꽤 흥미로웠다. 한개의 base function을 만들고 여기에 다른 function을 끼워넣음으로써 여러가지 다른 기능을 하는 함수를 조립하는 과정이 절차적으로 코딩하는데에 익숙했던 나에게 인상적으로 다가왔다.  

또한 *지연평가(Lazy evaluation)* 라는 개념을 처음 알게되었다.
(여기서 지연평가란 결과값이 필요할때가지 계산을 늦추는 기법이다)   
서비스 개발에 집중하다보면 사실 이런 raw한 level의 연산효율같은 부분은 놓치기 쉽다. 사실 내가 그랬던것 같다. 개발을 할때 물론 성능을 신경쓰지 않는다는것은 아니지만, 지연평가 같은 개념을 생각해보면서 영향범위를 파악하고 실제로 적용할 수 있는지 생각해보는 개발자는 많이 없을 것이라고 생각한다.
`underscore`나 `lodash`에 이런 지연평가를 위한 method를 구현해두었다는 부분도 흥미로웠다. 저자가 만든 `partial-js`또한. 과거의 개발자들은 이런것을 어떻게 알고 미리미리 구현을 해놓은 것인지!  
```typescript
/* partial js 에서는 L을 이용해 지연평가 함수를 호출할 수 있다 */
var count = 0; // 루프 카운트
var list = [1, 2, 3, 4, 5, 6];
_.go(list,
	L.map(function(v) {
		count++;
		return v * v;
	}),
	L.filter(function(v) {
		count++;
		return v < 20;
	}),
	L.take(2),
	console.log); // [1, 4]
```


책을 읽으면서 새로운 방법으로 함수를 구현하고, 또 여러 함수를 조합해서 새로운 함수를 만들어내는것을 보고  
`"아 이렇게도 할수 있구나!"`  
라는 생각이 들긴 하였지만, 동시에 이를 실제 서비스 개발할때 사용할 수 있을 것인가에 대한 의문도 들었다.  

함수형 프로그래밍이 효과적으로 사용될 수 있는 재료는 `collection`, `array` 같은 동일한 model을 반복으로 가지는 data형들 일 것이다. 하지만 서비스를 개발해보면 알듯이 실제로 우리가 개발하면서 접할때, backend에서 Api호출로 받아온 response data를 직접적으로 변경하는 경우는 거의 없다. 대부분이 받아온 response data를 list화 해서 보여주는 방식일뿐. 
특히나 나같은 frontend 개발자들은 더 공감할 것이다. 가장 대중적이고 유명한 `React`만 생각하더라도 그 data의 무결성을 유지하는것을 아주 중요한 전제조건으로 가져가고 있기 때문이다. (저는 함수형 프로그래밍을 업무에서 사용해보지 않았고, 관련 도서 또한  처음 접했다는것을 꼭 염두해두길 바랍니다 😅)  
어떤 `collection` 들을 `chaining`해서 data를 변경할만한 그런 작업을 아직 하지 못해보았기 때문에 이러한 생각을 가질수도 있다. 그래서 최근들어 업무를 할때 최대한 이러한 방향으로 코딩을 해보려고 노력도 해보고 있지만 아직 잘 적용해볼 수 있는 상황은 오지 않는것 같다.
어떠한 새로운 라이브러리를 만들거나 대용량의 `collection`형태의 data를 다룰때에는 아주 효과적으로 사용할 수 있을 것 같다.  

여기까지가 내가 이 책을 읽고 난 느낌 이라고 할수 있겠다. 함수형 프로그래밍은 정말 매력적이고 절차 지향적으로 코딩하는 것보다 재사용성이나 범용성에서 큰 효과를 볼 수 있는것은 확실한 것 같다. 다음 프로젝트 진행시에는 모든 부분을 함수형으로 짜보는 것도 좋은 습득 방법이 될것 같다.

