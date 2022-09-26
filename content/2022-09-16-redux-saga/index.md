---
title: Have you ever used React with REDUX-SAGA ?
tags: [javascript, typescript, html, react, nextjs, webpack]
date: 2022-09-16T20:17:04.226Z
path: blog/redux-saga
cover: ./img.png
excerpt: Create your saga with redux-saga
show: true
---

`React`를 사용하다보면 자연스럽게 상태관리 라이브러리를 고려하게 되고 이미 다양한 상태관리 라이브러리들이 존재하는것을 깨닫게 된다. 대부분의 개발자들은 가장 보편적인 `redux`를 사용할 것이며, 이 `redux`를
좀 더 편리하게 사용할 수 있도록 해주는 부가적인 라이브러리/프레임워크를 도입해서 사용하게 된다.  
그 중 이 포스트에서는 `redux-saga`에 대해 알아보려고 한다.

### What is Redux-saga?
`Redux-saga`는 애플리케이션의 `side effect` (`data fetching`과 같은 비동기작업 또는 `browser cache access`와 같은 순수하지 않은 작업)를 쉽게 관리하고, 실행하기 쉽도록 하고, 테스트하기 쉬우며, 오류를 더 잘 처리하는 것을 `goal`로 하는 라이브러리이다. `redux`의 `middleware`중 하나인 `redux-saga`는 정상적인 `redux` 작업으로 메인 애플리케이션에서 시작, 일시중지, 취소 등을 수행할 수 있고, 전체 `redux` 상태에 접근할 수 있으며, `redux` 작업도 `dispatch`할 수 있다.  
ES6의 `generator`기능을 활용하여 이러한 비동기 동작을 쉽게 작성하고, 읽고, 테스트할 수 있다. 대부분의 비동기 `middleware`로 `redux-thunk`를 많이 사용하지만, `redux-saga`는 다음과 같은 경우 유용하게 사용할 수 있다.
- 기존 요청을 취소 처리해야할 때 (불필요한 중복 요청 막기)
- 특정 `action`에 다른 `action`을 연결해 요청하거나, `api` 요청 등 `redux`와 관계없는 코드를 실행할 때
- `api` 요청 실패시 재요청 해야할 때

### What does Redux-saga consist of?
<div style="font-weight:bolder;font-size: 15px;color:#3f526c;">Generator</div>

`redux-saga`에서는 `generator` 문법을 사용한다. 그리고 `redux-saga`에서 말하는 `saga`는 이 `generator function`이다. `saga`는 `yield`값을 `return` 하고, `middleware`가 이 값을 받아서 실행하는 역할을 한다. `saga`는 단순히 반환만 하기 때문에 테스트와 로직이 훨씬 용이하고 간편해진다.

<div style="font-weight:bolder;font-size: 15px;color:#3f526c;">Effect</div>

실행할 명령을 담고 있는 `javascript` 객체

<div style="font-weight:bolder;font-size: 15px;color:#3f526c;">Task</div>

하나의 `saga`가 실행되는 것

<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all">
<b>내용 및 이미지 출처</b><br/>
- https://redux-saga.js.org
</div>
