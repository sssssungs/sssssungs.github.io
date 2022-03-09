---
title: Cassie or Cash? No, It's CACHE!
tags: [javascript, typescript, css, react, html, network]
date: 2022-03-06T20:05:44.226Z
path: blog/cache
cover: ./cache.png
excerpt: Summary about what web cache is and types of web cache
show: true
---

`Cache`는 컴퓨터 사이언스에서 data나 값을 복사해두는 임시 저장소를 가리킨다. 컴퓨터 사이언스에서 다루는 캐시는 여러가지 종류가 있지만 여기서는 `web cache`에 대해 알아보자.  

***`web cache`*** 또는 ***`HTTP cache`***는 서버 지연을 줄이기 위해 웹 페이지, 이미지, 기타 유형의 웹 멀티미디어 등의 웹 문서들을 임시 저장하기 위한 정보기술이다. 웹 캐시 시스템은 이를 통과하는 문서들의 사본을 저장하며 이후 요청들은 특정 조건을 충족하는 경우 캐시화가 가능하다. 웹 캐시 시스템은 일종의 어플라이언스나 컴퓨터 프로그램을 의미할 수 있다. 동일한 서버에 다시 접근할 때에는 근처에 있는 프록시 서버의 웹 캐시에 저장된 정보를 불러오므로 더 빠른 열람이 가능하다 <span style="font-size: 12px;">출처:<a href="https://ko.wikipedia.org/wiki/%EC%9B%B9_%EC%BA%90%EC%8B%9C" target="_blank">위키피디아</a></span>

`web cache`는 적용 대상에 따라 다음과 같이 나눌 수 있다.
1. ***Browser Cache***  
✔ ︎웹 브라우저 또는 HTTP 요청을 하는 client에 의해 캐시되는것  
✔ 개인에 한정  
✔ 웹 브라우저 back button 또는 이미 방문한 페이지를 재방문 하는 경우
2. ***Proxy Cache***  
✔ Browser Cache와 동일한 원리로 동작하며 네트워크 상에서 동작  
✔ 네트워크 대역을 효율적으로 사용하는것과 특정 웹사이트에 대한 액세스 제한의 목적  
3. ***Gateway Cache***  
✔ 서버 앞단에 설치되어 있으며 요청에 대한 캐싱 및 효율적인 분배를 통해 성능향상  
✔ load balancing, SSL acceleration, compression 등을 수행  
✔ 무한대의 client들에게 한정된 수의 웹 서버 컨텐츠 제공