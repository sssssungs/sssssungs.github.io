---
title: Retrospective of building internal design system
tags: [javascript, typescript, react, html, css, designSystem]
date: 2022-05-05T18:08:44.226Z
path: blog/design-system
cover: ./ds.png
excerpt: First retrospective of my opinion on building design system with designers and other developers
show: true
---

요즘 프론트엔드 개발자들을 뽑는 스타트업이나 기업들의 채용 job description에서 빠지지 않고 등장하는 한가지 문구가 있다.  
바로 `design system` 에 관한 내용이다. 대부분 design system을 가지고 있고 <span style='font-size: 10px'>(아닐수도있다..)</span> 프론트엔드 개발자가 구축을 할것이다. 
나 또한 현재 재직중인 회사에서 자체 design system을 구축해서 사용하고 있고 ui의 통일성을 유지하고 있다. 이번 포스팅에서는 design system을 개발하면서 느꼈던 몇가지 생각을 정리해보려고 한다.  
일단 나는 design system을 구축한다는것 자체가 좋은 시작점이 될 수 있다고 생각한다. 개발자의 입장에서 생각해보았을때 통일된 ui를 바라보는것이 얼마나 `easy on eyes`한 것인지 알것이다.
특히 코드를 작성하는 스타일이 각 개발자마다 각양각색이므로 동일한 버튼을 만들때 구현방식이 달라질 수 있다. 예를들어 A 개발자는 `button`을 사용하여 `semantic`한 property를 그대로 가져가려고 하는 반면, B 개발자는 `div`와 `:hover`를 이용해 버튼 형태만 구현하는데 초점을 맞출 수도 있다.
이런 면에서 일단 design system을 구축하면 *코드의 통일성과 간결성*을 지킬 수 있다. 물론 개발 시 작성하게 되는 코드의 양도 현저하게 줄어들 것이다. 우리가 많이 사용되는 컴포넌트를 공통 컴포넌트로 만들어 `export`로 사용하듯이 button design system 컴포넌트 하나로 인해 A와 B 개발자는 동일한 스펙의 동일한 버튼을 몇줄 안되는 코드로 작성할 수 있을 것이다. 코드 통일성을 해치지 않으면서 말이다.

