---
title: Micro frontend from the scratch (2/2)
tags: [javascript, typescript, react, html, docker, kubernetes, webpack]
date: 2022-01-24T20:14:44.226Z
path: blog/micro-frontend2
cover: ./microf.png
excerpt: Micro frontend service architecture research archive
show: true
---

### Webpack5의 Module Federation

`Module Federation`이란 2020년 10월에 release된 webpack5에 포함되어 있는 새로운 기능이다. ([공식문서](https://webpack.js.org/blog/2020-10-10-webpack-5-release/))<br/>
요약하면, `module federation`은 여러 분리된 build 파일을 하나의 host앱에서 불러와서 동적으로 실행시킬 수 있는 기술이다.<br/>
이전 포스트에서 언급했었던 `Micro-frontend`를 구현할 수 있는 기술이다. <br/>

각각의 분리된 서비스를 build하여 그 결과물을 동적으로 불러와서 사용하는데 이 불러오는 build앱을 보통 `remote`라고 지칭하며,
`remote`들을 불러와 사용하는 main앱을 보통 `host`라고 지칭한다. 사용할 수 있는 `remote`는 복수개도 가능하며, 양방향으로도 `module federation`이 가능하다.<br/>

`remote`에서 component를 export 하는 방법은 아래와 같다.<br/>
```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote_from_a',
      filename: 'remote_from_a_entry.js', // 해당 이름으로 빌드결과를 import 하도록 한다.
      exposes: {
        './RemoteButton': './src/button', // expose 해서 사용할수 있는 컴포넌트
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
}
```
자신의 프로젝트에 `./src/button`에 있는 button을 `RemoteButton`라는 이름으로 다른 앱에서 사용할 수 있도록 `exposes` 해주고 있다. 또한 다른곳에서 사용하기 위해 `remote_from_a_entry.js`라는 이름으로 빌드결과물 이름을 명명 했다.<br/>
shared는 의존성 module을 어떻게 공유할지 정의한다. 더 많은 shared property는 공식문서의 [Sharing hints](https://webpack.js.org/plugins/module-federation-plugin/#eager)에서 볼 수 있다.<br/><br/>
`remote` 앱의 component를 사용할때에는 아래처럼 불러와서 사용할 수 있다.
```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'host_entry.js', // 해당 이름으로 빌드결과를 import 하도록 한다.
      remotes: {
        remote_from_a: 'remote_from_a',
       },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
}

// app.js
<head>
  <script src="http://localhost:3001/remote_from_a_entry.js"></script>
</head>
<body>
  <div id="root"></div>
</body>

// component
const ButtonFromRemoteA = React.lazy(() => import('remote_from_a/RemoteButton'))
const Example = () => {
  return (
    <div>
      <React.Suspense fallback="Loading....">
        <ButtonFromRemoteA />
      </React.Suspense>
    </div>
  )
}

export default Example

```
Module federation은 나온지 그리 오래되지는 않은 기능이라 많은 레퍼런스와 best practice가 없어 구글링을 해도 비슷한 내용이 많다. (실제로 production 환경에서 도입하고 있는 회사가 있다고는 하지만..)<br/>
튜토리얼을 진행하면서 예상치 못한 여러 부가적인 이슈들도 있었고, 기존에 사용하는 라이브러리와 잘 적용이 안되는 경우도 있었다. `emotion.js`를 사용할때 `hooks`에러 등 어려움이 많아 해결하는데 시간을 많이 쏟았다.
그러면서 webpack에 대해 더 알게된 부분도 있지만, module federation으로 현재 프로젝트의 아키텍쳐를 migration하는것은 어려울 것이라 판단해 현재는 holding한 상태이다.<br/>
앞으로 많은 레퍼런스와 커뮤니티들이 생기면 언젠가 다시 도전해 볼 계획이다.<br/>
세부적인 내용은 webpack [공식문서](https://webpack.kr/concepts/module-federation/)에 자세히 나와있다.

### 참고문서
https://thekevinwang.com/2021/03/26/micro-frontends-nextjs <br/>
https://blog.wanzargen.me/38 <br/>
https://betterprogramming.pub/micro-frontends-using-webpack-5-module-federation-3b97ffb22a0d <br/>
https://www.simform.com/blog/micro-frontend-architecture/#section4 <br/>
