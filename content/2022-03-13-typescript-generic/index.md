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
`generic`(제네릭)은 `type`을 불문하고 동작하도록 한 `type`을 말한다. (오잉?)  
즉, 선언시점이 아니라 생성시점, 함수에 인수를 넘길때 `type`에 대한 정보도 같이 넘겨주도록 하는 것이다. 이렇게 하면서 `type`에 관한 어떠한 정보도 잃어버리지 않는다.  
한번의 선언으로 다양한 `type`에 **재사용**이 가능하다는 가장 큰 장점이 있다.  
```typescript
const returnYourself1 = (param: number): number => param;
const returnYourself2 = (param: any): any => param;
```
`generic`을 사용하지 않는다면 위 예시처럼 `returnYourself1`처럼 타입을 지정하거나, `returnYourself2`처럼 `any`를 사용하여 코드를 작성할 수 있다.  
`returnYourself1`는 `type`을 지정함으로써 좀 더 안정성 있는 코드가 되겠지만, `number`만 받을 수 있으므로 재사용이 불가능하다.  
`returnYourself2`는 `any`를 사용하여 자유도가 높지만 `type`을 제한할 수 없고, 리턴되는 자료형을 알 수가 없게 된다.  

이러한 경우에 사용하는 것이 <u>***Generic***</u> 이다.
```typescript
const returnYourself_generic = (param: T): T => param
```
