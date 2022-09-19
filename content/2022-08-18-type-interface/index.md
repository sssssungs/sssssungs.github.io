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
그리고 둘 모두 확장이 가능하다. `type`의 경우 `&` 연산자를 사용하고, `interface`는 `extends`를 사용해 확장시킬 수 있다. 같은 종류들 뿐만 아니라 둘은 서로서로 `&`와 `extends`를 사용해 확장이 가능하다.
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

그럼 이제 차이점을 보도록 하자.  
첫번째로 `type`은 `primitive`, `union`, `tuple`을 정의할 수 있지만 `interface`의 경우 불가능하다.
```typescript
type Something = number; // primitive type
type StringOrNumber = string | number; // union type
type Grade = [number, number]; // tuple
```

두번째로 `interface`의 경우 같은 명칭을 사용하였을때 자동으로 `merged`되지만(`Declaration Merging`) `type`은 그렇지 않다. (이것은 나도 정확히 알지 못했던 부분이다)
```typescript
interface User {
    name: string;
};
interface User {
    id: number;
};
const new_user: User = {
    id: 1234,
    name: 'Sam'
};
// new_user.id; >> 1234 
// new_user.name >> Sam
```
```typescript
type User = {
    name: string;
};
type User = { // >> Duplicate identifier 'User' (ts2300)
    id: number;
};
```

마지막으로 `type`, `interface`에 대한 몇가지 사용 시나리오를 보면 다음과 같을 것이다.

#### type
- `primitive type`에 대한 타입정의
- `tuple type`에 대한 타입정의 
- `function type`에 대한 타입정의
- `union type`에 대한 타입정의
- `mapped type`에 대한 타입정의 

#### interface
- `declaration merge` 기능을 활용해야 할때 (보통 외부에 공개할 `api`는 `interface`를 사용해 확장성을 높인다)
- 객체를 정의하거나 `type`을 사용할 필요가 없을때

<br/>

`Typescript`팀은 가능한 `interface`를 사용하고, `union`또는 `tuple`에 대한 정의가 필요할때는 `type`을 사용하도록 권장하고 있다. 하지만 프로젝트와 개발 컨벤션에 따라 적절하게 사용하면 특별한 케이스가 아닌 이상 크게 문제될 것은 없다고 생각한다. 


<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all;">
<b>내용 출처</b><br/>
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
</div>
