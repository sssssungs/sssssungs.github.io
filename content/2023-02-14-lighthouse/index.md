---
title: Run the lighthouse to light your web page.
tags: [javascript, typescript, react, html, css, network, seo]
date: 2023-02-14T19:44:32.226Z
path: blog/lighthouse
cover: ./img_2.png
excerpt: Check your web page's performances simply and quickly 
show: true
---

### What is the Lighthouse?
`lighthouse`는 `chrome` 내 개발자도구에 내장된 웹앱의 품질개선에 도움을 주는 자동화 `performance` 측정 도구이다. 구글이 직접 운영하는 open source project이다. 
`chrome extension` 설치 후 `F12`로 개발자 도구를 열어 `lighthouse` 탭에서 `Analyze page load`를 선택하면 현재 페이지가 자동으로 reload 되며 검사가 진행되고 `lighthouse report`를 생성해준다.

<br/>
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto; box-shadow: 1px 1px 5px grey">
  <img src="./lighthousecapture.png" />
</div>
<br/>
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto; box-shadow: 1px 1px 5px grey">
  <img src="./report.png" />
</div>

<br/>

`lighthouse`report에는 <i>`Performance`(성능), `Accessibility`(웹접근성), `Best practices`(웹표준), `SEO`(검색엔진최적화), `PWA`(Progressive Web app, 모바일화)</i> 다섯개 항목을 점수화 해서 보여준다. 이번 포스트에서는 `Performance` 측정시 어떤 기준을 가지고 평가하는지 구체적으로 알아보도록 하자.

### Performance metrics of Lighthouse
`lighthouse`는 성능측정을 위해서 다음과 같은 `metric`들을 사용한다(`metric`은 다음 버전에서 새로 생기거나 때로는 사라지기도 한다). 그럼 하나하나씩 알아보도록 하자.

<br/>
<div style="font-family: 'cousine';margin-bottom:7px;font-size: 15px;font-weight: 800;text-shadow: 1px 1px 2px #d5d5d5;">First Contentful Paint (FCP)</div>

 ✔︎ 성능 지표를 추적하는 metric  
 ✔︎ 사용자가 웹페이지에 접속했을때 첫번째 `DOM Content`를 `rendering` 하는데 걸리는 시간을 측정한다. 이는 곧 사용자가 느끼는 페이지 로딩속도로 판단할 수 있고, `FCP`가 <span style="color: red;font-weight: 800;">1.8</span>초 이하의 경우 <u>우수한 사용자 경험</u>을 제공한다고 할 수 있다.  
 ✔︎ 해당 페이지의 `image`, `canvas`요소, `svg` 등 모두 `DOM Content`로 구분되며, `iframe`의 경우는 포함되지 않는다.
 <br/>
 <br/>
<div style="font-family: 'cousine';margin-bottom:7px;font-size: 15px;font-weight: 800;text-shadow: 1px 1px 2px #d5d5d5;">Largest Contentful Paint (LCP)</div>

✔︎ `viewport`를 차지하는 가장 큰 `content`(`image`, 텍스트블록)의 `rendering` 시간을 측정한다.  
✔︎ `LCP`가 0 ~ 2.5초일 경우 `Fast`(<span style="color:green;">Green</span>) / 2.5 ~ 4초는 `Moderate`(<span style="color:orange;">Orange</span>) / 4초 이상은 `Slow`(<span style="color:red;">Red</span>)
<br/>
<br/>
<div style="font-family: 'cousine';margin-bottom:7px;font-size: 15px;font-weight: 800;text-shadow: 1px 1px 2px #d5d5d5;">Speed Index</div>

✔︎ 웹페이지를 load하는 동안 컨텐츠가 얼마나 빠르게 표시되는지를 측정한다.  
✔︎ 측정원리: 페이지 load를 각 `frame`마다 캡쳐하고, `frame`간에 보이는 컨텐츠를 파악하고 <a href="https://github.com/paulirish/speedline" target="_blank" rel='noopener noreferer'>Speedline module</a>을 이용해 측정해 표시한다.  
✔︎ `Speed index`가 0 ~ 3.4일때 `Fast`(<span style="color:green;">Green</span>) / 3.4 ~ 5.8은 `Moderate`(<span style="color:orange;">Orange</span>) / 5.8 이상은 `Slow`(<span style="color:red;">Red</span>)
<br/>
<br/>
<div style="font-family: 'cousine';margin-bottom:7px;font-size: 15px;font-weight: 800;text-shadow: 1px 1px 2px #d5d5d5;">Total Blocking Time (TBT)</div>

✔︎ 웹페이지를 접속한 유저가 실제 `interaction`하기까지 block된 시간을 측정한다.  




<i>(wip)</i>


<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://github.com/paulirish/speedline<br/>
</div>
