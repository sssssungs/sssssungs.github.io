---
title: Do you know what the PROXY server is ?
tags: [javascript, typescript, network, softwareDevelopment]
date: 2023-03-13T17:32:32.226Z
path: blog/proxy
cover: ./img.png
excerpt: Don't send it to server directly! Please Hand it over to Proxy
show: true
---

 `Proxy`의 사전적 의미는 <i>대신</i>,<i>대리</i>라는 의미이다. 말 그대로 두개의 end-point에서 통신을 할때 중간에서 대리로 통신을 해주는것을 `proxy`라고 하고, 이 역할을 하는 서버를 `proxy server`라고 부른다. 
 웹 환경에서 생각해본다면 `client`와 `server` 사이의 중계서버 정도로 생각할 수 있다. `proxy server`는 보안목적이나 때로는 caching의 기능을 제공한다.

<br/>
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto; box-shadow: 1px 1px 5px grey">
  <img src="./simple-proxy.png" />
</div>