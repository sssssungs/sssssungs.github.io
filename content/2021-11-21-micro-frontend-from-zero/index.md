---
title: Micro frontend from the scratch (1/2)
tags: [javascript, typescript, react, html, docker, kubernetes]
date: 2021-11-21T21:25:44.226Z
path: blog/micro-frontend
cover: ./microf.png
excerpt: Micro frontend service architecture research archive
show: true
---
회사에서 MSA에 대해 공부하기 시작하면서 여러가지 리서치,  등을 진행하는데 이곳에 조금씩 정리해보려고 한다.

## Monolithic Architecture
서비스의 모든 구성요소가 하나의 프로젝트로 통합되어 있는 형태이다. 전통적으로 개발할때 설계 해오던 방식이며, 하나의 프로젝트 안에서 모듈별로 개발을 진행하고 이 프로젝트를 한번에 통합해서 결과물을 빌드해서 서비스로 배포하는 방식을 말한다. 하지만 서비스의 규모가 점점 커지고 복잡해 질수록 Monolithic 구성은 한계를 보인다.

Monolithic application 의 단점
- 부분의 장애가 전체 서비스의 장애로 확대될 가능성이 있다.
- 한 부분의 scale out 관리가 어렵다.
- CI/CD time이 오래 걸린다.
- 하나의 개발 스펙을 사용해야하는 제한이 있다.

## MicroService Architecture
<strong>MSA(MicroService Architecture)</strong>란, 독립적으로 운영할 수 있는 각각의 기능단위의 서비스로 구성된 어플리케이션이라고 할 수 있겠다. MSA는 완전히 독립적으로 배포/운영이 가능하고, 서로 다른 기술스택을 사용해도 문제가 되지 않는다. 
제대로된 MS의 경우는 하나의 기능만 수행하며 독립적으로 재사용될 수 있다.

<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
<img src="./mono-vs-msa.png"/>
<div style="width:400px;margin-left:auto; margin-right: auto;font-size:13px; color:#8b9196">이미지 출처: https://www.bmc.com/blogs/microservices-architecture</div>
</div>

MSA는 일반적인 개발 아키텍쳐 라고 생각할 수 있지만 깊게 들어가게 되면 전체적인 조직의 구성이나 작업 방식과도 연결되는 부분이기 때문에, 개발적인 면만 보고 편의성만으로 전환하기엔 많은 허들이 존재할 것이고 그러한 이슈들을 해결하는데에 많은 시간과 노력이 필요할 것이다.  
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./organization.png"/>
  <div style="width:200px;margin-left:auto; margin-right: auto;font-size:13px;color:#8b9196">MSA 조직구성 (예시)</div>
</div>

## Micro Frontend 

