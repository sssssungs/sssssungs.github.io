---
title: Reflow and repaint
tags: [javascript, typescript, html, react, nextjs, webpack]
date: 2022-08-30T21:39:04.226Z
path: blog/reflow-repaint
cover: ./img.png
excerpt: Can you explain to me about differences between reflow and repaint ?
show: true
---

브라우저가 작동될때에는 렌더링 과정에서 `Repaint`, `Reflow`의 과정을 거치게 된다. 말 그대로 해당 `element`를 다시 칠하고 다시 flow(?) 하는것이다. `react`를 이용하는 입장에서 렌더링 최적화를 수행할때 반드시 고려해야하는 항목이기도 하다. 이 포스팅에서는 애매하게 알고있는 두가지의 개념을 정확히 짚고 넘어가도록 하겠다.

### The rendering process of a web page 
그에 앞서 브라우저가 요소를 렌더링할때 어떤 과정을 거치게 되는지 알아보자. 
<div style="width:60%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
<img src="./rendering_process.png"/>
<div style="font-size:10px;color:#8b9196;display:flex;justify-content:center">The rendering process of Webkit engine browser</div>
</div>

간단히 요약하면,
1. `HTML`을 `parsing`해서 `DOM Tree`를 만들고, `CSS`를 `parsing`해서 스타일 구조체를 만들어내는데 이를 `CSSOM Tree`라고 한다
2. `DOM Tree`와 `CSSOM Tree` 이 둘을 이용하여 `Render Tree`를 생성한다 (실제 화면에 표현되는 `Node`들로 구성) 
3. `viewport` 내에서 각 `node`들의 정확하 위치와 크기를 계산한다 (`Layout`)
4. `layout` 계산이 완료되면 이제 요소들을 화면에 그린다 (`Paint`)


wip



<br/>
<div style="font-size:10px;color:#8b9196">
<b>내용 및 이미지 출처</b><br/>
- https://medium.com/@gneutzling/the-rendering-process-of-a-web-page-78e05a6749dc
</div>
