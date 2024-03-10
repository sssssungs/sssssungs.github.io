---
title: Upgrading to the newest versions of Nextjs with React
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-02-21T18:57:11.226Z
path: blog/next-and-react
cover: ./img.png
excerpt: Migration journey from Next12/React17 to Next14/React18
show: true
---

### 배경

2022년 3월, `React` 18 버전이 공식적으로 release 되었다. 지금으로부터 벌써 2년전인데 아직 현업 프로젝트에서는 17버전을 사용하고 있다. 그 이유는 여러가지가 있다. 버전 업그레이드를 몇번 시도해보았지만 `client`/`server` `rendering이` 동일하지 않다는 무시무시한 error를 계속 맞닥드렸고, 그리고 비슷한 시기에 함께 세트처럼 따라다녔던 `nextjs` 14버전과도 함께 버전 업그레이드를 하려고 했기 때문이다. nextjs 14 버전은 사실 release 된지 얼마되지는 않았지만 말이다. (지금 프로젝트에서 `nextjs`를 사용하고 있다)  
그렇게 몇개월을 보낸뒤 업무에 여유가 생겨 업그레이드를 진행하게 되었다. 엄청난 에러들과 함께 니가 이기나 내가 이기나 라는 생각으로 진행을 하게 되었다.

### 고려사항
`Nextjs`를 업그레이드 하게 되면서 여러가지 고려해야할 사항들이 많았다. 특히 `app router` 방식을 도입해야하는지에 대한 여부다. 현재 프로젝트에서는 `pages` 구조로 (당연히) 페이지가 잡혀져있고, `shallow routing`, `contextual routing(modal)`도 사용하고 있기 때문에 `app router` 방식을 도입했을때, 이 feature들을 사용할 수 있는지가 문제였다. <span style="font-size:11px;color:#8b9196;">(app router 형식으로 page 구조를 가져갔을때 shallow routing을 구현하기가 까다롭다는 이야기를 많이 들었기 때문에...)</span>


<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
</div>
