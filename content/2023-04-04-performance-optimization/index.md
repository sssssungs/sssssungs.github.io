---
title: Performance optimization tips from my experiences
tags: [javascript, typescript, react, html, css, nextjs, softwareDevelopment]
date: 2023-04-04T19:33:32.226Z
path: blog/performance
cover: ./img.png
excerpt: This and that about performance optimization
show: true
---

웹성능 개선을 위한 이것저것/여러가지 방법을 작성해보려고 한다. 개인적으로 공부하는 내용이라 두서가 없을 수 있으니 주의!

1. Image size optimization  
image `CDN`을 사용한다. CDN(`Content Delivery Network`)은 컨텐츠를 빠르고, 저렴하고, 안전하게 전송하기 위해 연결된 서버 네트워크이다. 지리적으로 분산시켜 웹 컨텐츠를 사용자와 가까운 곳에서 전송함으로써 전송 속도를 높인다.  
CDN은 image 뿐만 아니라 웹페이지, image, video 등의 컨텐츠를 사용자의 물리적 위치와 가까운 proxy server에 `caching`한다. 대표적인 image CDN service는 <a href="https://cloudinary.com/"  target='_blank' rel='noopener noreferer'>cloudinary</a>, <a href="https://imagekit.io/"  target='_blank' rel='noopener noreferer'>imagekit.io</a> 등이 있다.


2. Code splitting & Lazy loading  
wip

