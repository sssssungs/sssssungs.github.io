---
title: Type vs Interface, which one ?
tags: [javascript, typescript, html, react, nextjs, webpack]
date: 2022-08-18T20:05:04.226Z
path: blog/type-vs-interface
cover: ./img.png
excerpt: No more confusion between type and interface in Typescript
show: true
---

`typescript`를 이용해 개발하다보면 항상 고민하게 되는 부분이 있다. 바로 `type`과 `interface`중 어느것을 사용해서 타입을 정의해줄까 라는 문제이다.  
우선 두가지 모두 비슷한 방식으로 동작한다. 사용자가 타입을 선언하고 그 이름을 지어주는 것이 공통적인 기능이다.
```typescript
interface Student {
    name: string;
    grade: number;
    hobby: string;
};

type Student = {
    name: string;
    grade: number;
    hobby: string;
};
```
그리고 둘 모두 확장이 가능하다. `type`의 경우 `&` 연산자를 사용하고, `interface`는 `extends`를 사용해 확장시킬 수 있다.
```typescript
interface School extends Student {
    teacher: string;
    study: string;
};

type School = {
    teacher: string;
    study: string;
} & Student;
```
