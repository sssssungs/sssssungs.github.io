---
title: Custom your type with generic <T> in typescript
tags: [javascript, typescript, react, nextjs, webpack]
date: 2022-03-13T27:05:44.226Z
path: blog/ts-generic
cover: ./generic.png
excerpt: Generalize your type with this awesome feature!
show: true
---

`typescript`는 일반 `javascript`보다 여러 장점이 있다. 코드를 짤때 자동완성 기능이라던지, `debug`를 진행할때 미리 에러를 방지할 수 있어 런타임 전에 오류를 사전 체크할 수 있다. 이 외에도 여러가지 장점이 존재한다.
`typescript`에는 여러가지 `type`이 존재한다. `boolean`, `number`, `string`, `undefined`, `null` 등 코드를 짤때 활용할 수 있는 다양한 기본자료형이 존재한다. 이 포스트에서는 이 기본자료형 말고, `typescript`에서 잘 활용하면 코딩이 쉬워지는 `Generic`에 대해서 알아보려고 한다.

### Generic 
`typescript`를 처음 시작했을 때 여기저기서 보이면 대문자 알파벳이 낯설게 느껴질때가 있었다. 이것이 바로 `generic`이다.  
`generic`(제네릭)은 `type`을 불문하고 동작하도록 한 `type`을 말한다 <span style='font-size:12px;'>(오잉?) </span> <br/>
선언시점이 아니라 생성시점, 함수에 인수를 넘길때 `type`에 대한 정보도 같이 넘겨주도록 하는 것이다. 이렇게 하면서 `type`에 관한 어떠한 정보도 잃어버리지 않는다.  
한번의 선언으로 다양한 `type`에 **재사용**이 가능하다는 가장 큰 장점이 있다. 

### Basic 사용법

```typescript
// function
const returnYourself1 = (param: number): number => param;
const returnYourself2 = (param: any): any => param;
```
`generic`을 사용하지 않는다면 위 예시처럼 `returnYourself1`처럼 타입을 지정하거나, `returnYourself2`처럼 `any`를 사용하여 코드를 작성할 수 있다.  
`returnYourself1`는 `type`을 지정함으로써 좀 더 안정성 있는 코드가 되겠지만, `number`만 받을 수 있으므로 재사용이 불가능하다.  
`returnYourself2`는 `any`를 사용하여 자유도가 높지만 `type`을 제한할 수 없고, 리턴되는 자료형을 알 수가 없게 된다.  

이러한 경우에 사용하는 것이 <u>***Generic***</u> 이다.
```typescript
const returnYourself_generic = <T>(param: T): T => param
```
`T`는 다른뜻은 없고, `generic`을 사용할때 일반적으로 사용하는 관용적인 변수명이다. 위 코드에서 이제 함수는 `T`라는 타입을 가지게 된다. `param`으로 받는 변수의 타입을 리턴타입으로 그대로 가져가는 것이다.
해당 함수를 호출할때 타입을 정해주면 된다.
```typescript
returnYourself_generic<number>(3);
```
```typescript
// interface에서 사용
interface IValue<T> {
    value: T;
}
// class에서 사용
class Student<T> {
    constructor(value: T) {}
}
```

### Multiple Generic
`generic`은 한개 이상의 변수를 사용하는 것도 가능하다.
```typescript
const generic_two_types = <T, U>(param: T, arg: U): [T, U] => [param, arg];
```
`generic`이 하나만 더 늘었을뿐, 사용하는 방법은 한개일때와 동일하다. 두개의 변수를 받아와서, 해당 변수의 타입을 가지는 `array`를 리턴한다. 관용적으로 `T`이후의 알파벳을 변수로 순서대로 사용하면 된다.  

### Extends 이용하기
`generic`을 어느정도 제한하여 안정성을 확보하기 위해 `extends`를 사용할 수 있다. 타입 제한 뿐만 아니라 `ide`가 해당 타입의 method나 property를 예측할 수 있기 때문에 자동완성이 된다.
```typescript
const generic_two_types = <T extends number>(param: T): T => param; // T는 number를 extends하여 number 이외의 타입을 받을 수 없음
```

### Arrow function 에서 generic 사용
`JSX`나 `TSX` 파일 내에서 `generic`을 사용할때, `component`를 뜻하는 `<>` 를 대부분 사용하게 되는데, 이때 `generic`으로 사용하는 `<>`과 동일한 문자를 사용한다. 그래서 이게 HTML이 아니라 `generic`이라는 명시를 하기 위해 `extends {}`를 사용한다.  
`extends {}`의 경우, `generic` 타입이 object에 제한되기 때문에 `extends unknown`을 사용하기도 한다.
```typescript
const generic_function = <T extends {}>(param: T):T => param;
const generic_unknown = <U extends unknown>(param: U):U => param;
```

정리하면 `generic`은 `any`보다 더 안전하지만 동시에 자유로운 flexible한 type 이라고 할 수 있겠다.   

참조<br/>
https://www.typescriptlang.org/docs/handbook/generics.html  
https://hyunseob.github.io/2017/01/14/typescript-generic/  
