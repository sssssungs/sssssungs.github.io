---
title: NPM vs Yarn 
tags: [javascript, typescript, react, nodejs]
date: 2021-10-24T20:25:44.226Z
path: blog/npm-vs-yarn
cover: ./npmyarn.png
excerpt: Let's talk about what npm and yarn are and find some pros and cons between them.
show: true
---
자바스크립트 개발에서 필수적인 패키지 매니저 NPM과 YARN에 대해서 알아보자.

## NPM (Node Package Manager)
<div style="width: 70%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./npm.png" />
</div>

`NPM`이란 Node package manager의 줄임말이며 자바스크립트 언어를 위한 패키지 관리용 툴이다. 전세계적으로 가장 많은 이들이 사용하고 있는 패키지 관리 툴이며 `Nodejs`로 만들어진 모듈을 웹상에서 쉽게 받아 설치하고 사용할 수 있도록 해주는 관리 프로그램이다. `NPM`에서는 `command`를 제공해서 설치, 삭제, 생성 등을 가능하게 하고 있으며 버전 관리 등의 기능도 제공하기 때문에 사용중인 패키지의 업데이트를 체크할 수도 있다. 설치된 패키지(라이브러리)는 `node_modules`라는 폴더에 저장이 되고 그 정보를 `package.json`파일에 명세하도록 구현되어 있다.

## Yarn
<div style="width: 70%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./yarn.png" />
</div>

`Yarn`은 `npm`의 문제점을 보완해서 Facebook에서 개발한 패키지 매니저이다. `npm`을 기반으로 만들었기 때문에 그 기반하는 구조가 `npm`과 동일하며, 설치하는 절차가 바뀌었다고 한다.


몇가지 비교 포인트를 찾아보자. <span style="font-size:13px">(출처 https://www.positronx.io/yarn-vs-npm-best-package-manager/) </span>

1. <b>yarn.lock</b>   
`package.json`에서 사용할 수 있는 version은 때때로 지저분해 질 수 있다. 하지만 `yarn.lock` 에서는 효율적인 방법으로 이를 무결성을 보장하는 방식으로 관리한다. module을 추가하는 순간 `Yarn`은 `Ruby`의 `Gemfile.lock`과 유사한 `yarn.lock` file을 빠르게 업데이트한다. 해당 file은 정확한 수의 패키지가 모든 장치에 설치되었는지 확인단다.
2. <b>속도</b>  
설치 속도에서 `yarn`은 대부분의 `npm` 버전보다 훨씬 빠르게 설치된다. 최대 5배의 속도. 하지만 이는 작은 패키지를 다룰때에는 비슷하며 용량이 어느정도 있는 패키지에만 해당한다.
3. <b>보안</b>  
`npm`은 다른 패키지가 포함될 수 있도록 하는 코드를 자동으로 실행한다. 이로인해 보안 시스템에 여러 취약점이 발생하고 나중에 심각한 문제가 발생할 여지가 있다. 하지만 `yarn`의 경우에는 `yarn.lock` 또는 `package.json` 파일에서만 해당 파일을 설치한다. 따라서 보안에 있어 `yarn`이 우위를 가진다.
4. <b>용량</b>  
`yarn`이 `npm`의 단점을 보완해서 개발된 툴 이지만 디스크 용량을 좀 더 차지한다고 한다.

사실 개발을 함에 있어서 두개의 큰 차이점은 없다. 단치 아직 NPM을 많은 사람들이 사용하고 있다는 것 뿐.  
나는 보통 반반씩 사용하는 것 같다. 그 원인은 다양하다. 이미 사용되었던 프로젝트에서 사용하던 패키지 매니저를 그대로 사용하는 경우가 대부분이고, 사이드 프로젝트를 할때에는 다른 추가 사항을 검토해 그에 맞는 매니징 툴을 사용하는 것 같다.  
개인적으로는 `yarn`을 선호하는것 같다. 이유는 위에서 짚어보았던 포인트들이 될 수 있겠다. 실제로는 큰 차이는 없으니 적절하게 사용하는것이 최고의 방법일듯하다.  

## Yarn berry
`yarn berry`는 `node_modules`없이 패키지 dependency를 관리하고 사용할 수 있도록 해주는 것이다. <a href='https://yarnpkg.com/getting-started/qa#why-should-you-upgrade-to-yarn-modern' target='_blank' rel='noopener noreferer'>(공식문서)</a>  
`yarn berry`는 `.yarn/` 폴더 이하에 압축된 패키지를 생성하며, `pnp`라는 개념을 도입하여 `node_modules`에서 일어나는 성능저하, 불필요한 의존성 등을 해결해준다. (복잡한 `node_modules`폴더 대신 `pnp.js`파일을 생성하여 패키지 dependency에 대한 정보를 보관한다.)  
이에 대해서는 다음에 다른 포스트를 별도로 올리도록 하겠다.


### 참고) Package versioning의 의미 - tilde(~) vs caret(^)
package version은 다음과 같이 3자리이다.  
<table style="border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <th style="border: 1px solid black;width:80px;">0</th>
        <th style="border: 1px solid black;width:15px;">.</th>  
        <th style="border: 1px solid black;width:80px;">0</th>
        <th style="border: 1px solid black;width:15px;">.</th>
        <th style="border: 1px solid black;width:80px;">0</th>
    </tr>
    <tr>
        <th style="border: 1px solid black;">Major</th>
        <th style="border: 1px solid black;"></th>  
        <th style="border: 1px solid black;">Minor</th>
        <th style="border: 1px solid black;"></th>
        <th style="border: 1px solid black;">Patch</th>
    </tr>
</table>
<br/>

각각의 규칙은 다음과 같다   
» 이전 버전과 호환되지 않는 변경은 `Major`를 증가  
» 이전 버전과 호환되는 새로운 feature는 `Minor`를 증가  
» 기존 기능에 대한 간단한 fix는 `Patch`를 증가  

### tilde(~) 사용
`package.json`에 기본적으로 사용하는 방법. 간단히 말하면 현재 지정한 버전의 마지막 자리 내의 범위 에서만 자동으로 업데이트를 한다.  
`~0.0.1` : `>=0.0.1`  `<0.1.0`  
`~0.1.1` : `>=0.1.1`  `<0.2.0`  
`~0.1`   : `>=0.1.0`  `<0.2.0`  
`~0`     : `>=0.0`    `<1.0`  

### caret(^) 사용
모듈이 이 [SemVer](https://semver.org/)의 규약을 따른다는 것을 신뢰한다는 가정하에서 동작한다. 그래서 `Minor`나 `Patch`버전은 하위호환성이 보장되어야 하므로 업데이트를 한다.  
`^1.2.3`: `>=1.2.3` `< 2.0.0`  
`^0.2.3`: `>=0.2.3` `<0.3.0`  
`^1.2.3-beta.2`: `>=1.2.3-beta.2` `<2.0.0`  
