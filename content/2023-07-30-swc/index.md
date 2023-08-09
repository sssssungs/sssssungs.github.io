---
title: The journey of me with babel, going to swc
tags: [javascript, typescript, html, css, nextjs, babel, webpack]
date: 2023-07-30T16:46:32.226Z
path: blog/swc
cover: ./img_1.png
excerpt: When it comes to build, The faster, the better
show: true
---

### Babel 
`webpack`을 이용해 프로젝트를 세팅하다보면 항상 `babel`을 함께 사용하게 된다. `babel`은 `javascript compiler`라고 공식사이트에서 소개하고 있으며, 그렇다면 왜 이것이 필요할까?  
`frontend` 기술 패러다임은 빠르게 발전하고 있다. 최신 `browser`에서도 지원하지 않는 새로운 문법과 기술이 등장하고 있으며 모든 사람들이 최신 `browser`를 사용하는것도 아닐 것이다. 다음 차트는 2022년 1월부터 2023년 7월 현재까지 세계적으로 사용되는 `browser`를 보여준다. 우리에게 익숙한 `chrome`, `safari`를 제외한 다른 `browser`들이 여전히 사용되고 있다. 

<div style="width: 80%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
    <img src="chart.png" />
    <div style="font-size:13px;color:#8b9196;display:flex;justify-content:center;margin-top:7px;">출처:&nbsp;<a href="https://gs.statcounter.com/browser-market-share/desktop/worldwide/#monthly-202201-202307-bar" target="_blank" rel='noopener noreferer'>statcounter</a></div>
</div>

또한 순수 `javascript`가 아닌 `typescript`, `coffeescript` 등 새로운 형태의 언어도 나오고 있다. 이러한 새로운 언어들을 다양한 환경에서 호환되도록 도와주는 것이 `babel`이고, 이를 `transpiler`라고도 한다.

### SWC
`SWC(Speedy Web Compiler)`는 `babel`과 동일한 역할을 수행하는 컴파일러로, `Rust`로 구현되어 있고 속도와 성능 개선에 초점을 맞추고 있으며 `single thread` 기준 `babel`보다 20배 넘는 성능을 보여준다. `Nextjs`, `parcel`, `deno` 등의 tool에 사용되고 있다.

<div class="quote">
SWC is 20x faster than Babel on a single thread and 70x faster on four cores. [출처:https://swc.rs] 
</div>

현재 일하는 프로젝트에서는 `webpack`+`babel` 조합으로 프로젝트를 진행하고 있다. 아직 시작한지 3년 남짓한 프로젝트이기 때문에 그렇게 크진않지만 점점 빌드시간이 늘어나는것이 체감되고 있는 현실이다. 얼마전까지는 테스트 환경 빌드를 할때에 20분 이상 도달했던 적도 있다.  
빌드시간을 줄일수 있는 방법중 가장 빠르게 적용해볼 수 있는 방법중 하나로 `babel`을 `swc`로 변경하는 것으로 생각했고 진행을 해보았다. 빌드를 진행할때마다 `Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" `이라고 경고메시지가 떠서 이것을 언젠가는 없애보리라 생각했던것을 몸소 옮기게 된것이다. <span style='font-size:10px;color:grey;'>(사실 예전에도 한번 시도했던적이 있지만 그때는 현재 작성되어 있는 테스트코드를 커버하지 못해 중간에 손을 놓았었다)</span>


wip


<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://gs.statcounter.com/browser-market-share/desktop/worldwide/#monthly-202201-202307-bar<br/>
- https://swc.rs/<br/>
</div>

