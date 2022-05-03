---
title: CSS tips and tricks developer should know
tags: [javascript, typescript, react, html, css, nextjs]
date: 2022-04-27T18:54:44.226Z
path: blog/css-tips
cover: ./css.png
excerpt: Every developer should know these CSS tricks to develop their projects quickly and efficiently.
show: true
---

frontend 개발자로서 가장 많이 하는 작업중 하나는 바로 styling 작업일 것이다. (내가 제일 재밌어하는 작업중에 하나이다)  
styling시 css를 이용하여 구현을 하게되는데 css도 많은 문법과 tip을 가지고 있다. 이 포스트에서는 몇가지 유용한 tip들을 소개해보려 한다!  

#### text-indent
문단에서 첫번째 줄만 `indentation`(들여쓰기)을 하고싶을때 사용할 수 있다.
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/sssssungs/embed/zYRORBY?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/sssssungs/pen/zYRORBY">
Untitled</a> by Randy (<a href="https://codepen.io/sssssungs">@sssssungs</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### shape-outside
`float element` 주위로 어떤 형태로 content를 보이도록 할지 설정할 수 있다. 여러가지 property가 있으며 <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside' target="_blank" rel="noopener noreferrer">공식사이트</a>에서 확인할 수 있다.
<iframe height="300" style="width: 100%;" scrolling="no" title="shape-outside" src="https://codepen.io/sssssungs/embed/QWQwBwJ?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/sssssungs/pen/QWQwBwJ">
shape-outside</a> by Randy (<a href="https://codepen.io/sssssungs">@sssssungs</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>


#### drop-shadow
이미지의 윤곽선대로 그림자를 주고 싶을때 css filter의 `drop-shadow`를 사용할 수 있다. 비슷한 그림자 효과로 `box-shadow`가 있지만 이는 말 그대로 `box`형태 전체에 그림자를 주는 방식이다.
<iframe height="300" style="width: 100%;" scrolling="no" title="drop-shadow" src="https://codepen.io/sssssungs/embed/yLvBmMP?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/sssssungs/pen/yLvBmMP">
drop-shadow</a> by Randy (<a href="https://codepen.io/sssssungs">@sssssungs</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### mix-blend-mode
여러개 `element`에 대해 <a href='https://en.wikipedia.org/wiki/Blend_modes' target="_blank" rel="noopener noreferrer">blend mode</a>를 설정할 수 있다. 여러가지 property를 사용할 수 있으며,  <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode' target="_blank" rel="noopener noreferrer">공식사이트</a>에서 확인할 수 있다. 아래 예시는 `overlay`를 사용한 모습이다.
<iframe height="300" style="width: 100%;" scrolling="no" title="blend mode" src="https://codepen.io/sssssungs/embed/zYRxaaV?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/sssssungs/pen/zYRxaaV">
blend mode</a> by Randy (<a href="https://codepen.io/sssssungs">@sssssungs</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### filters
CSS를 이용해 `image`에 다양한 효과를 넣을 수 있다. <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/filter' target="_blank" rel="noopener noreferrer">공식사이트</a>에서 추가적인 `filter`를 확인할 수 있다.
<iframe height="300" style="width: 100%;" scrolling="no" title="filters" src="https://codepen.io/sssssungs/embed/RwQNBGj?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href="https://codepen.io/sssssungs/pen/RwQNBGj">
filters</a> by Randy (<a href="https://codepen.io/sssssungs">@sssssungs</a>)
on <a href="https://codepen.io">CodePen</a>.
</iframe>
