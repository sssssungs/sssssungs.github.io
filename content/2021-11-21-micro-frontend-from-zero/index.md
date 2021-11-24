---
title: Micro frontend with zero (1)
tags: [javascript, typescript, react, html, docker, kubernetes]
date: 2021-11-21T21:25:44.226Z
path: blog/micro-frontend
cover: ./microf.png
excerpt: Micro frontend service architecture study
show: true
---
회사에서 MSA에 대해 공부하기 시작하면서 여러가지 리서치, 튜토리얼 등을 진행하는데 이곳에 조금씩 정리해보려고 한다. 
<br/><br/>
<span style="font-size:20px;font-weight:bold;background-color:#D9FFFE;padding:0 3px;">MSA(MicroService Architecture)</span>란, 독립적으로 운영할 수 있는 각각의 기능단위의 서비스로 구성된 어플리케이션이라고 할 수 있겠다. MSA는 완전히 독립적으로 배포/운영이 가능하고, 서로 다른 기술스택을 사용해도 문제가 되지 않는다. 
제대로된 MS의 경우는 하나의 기능만 수행하며 독립적으로 재사용될 수 있다. 
