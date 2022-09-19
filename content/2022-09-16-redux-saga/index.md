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
`Redux-saga`는 애플리케이션의 `side effect`를 쉽게 관리하고, 실행하기 쉽도록 하고, 테스트하기 쉬우며, 오류를 더 잘 처리하는 것을 `goal`로 하는 라이브러리이다. `redux`의 `middleware`중 하나인 `redux-saga`는 정상적인 `redux` 작업으로 메인 애플리케이션에서 시작, 일시중지, 취소 등을 수행할 수 있고, 전체 `redux` 상태에 접근할 수 있으며, `redux` 작업도 `dispatch`할 수 있다.

<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all">
<b>내용 및 이미지 출처</b><br/>
- https://redux-saga.js.org
</div>
