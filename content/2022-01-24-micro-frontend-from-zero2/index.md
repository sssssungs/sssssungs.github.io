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

각각의 분리된 서비스를 build하여 그 결과물을 동적으로 불러와서 사용하는데 이 불러오는 build앱을 보통 `Remote`라고 지칭하며,
`Remote`들을 불러와 사용하는 main앱을 보통 `Host`라고 지칭한다. 사용할 수 있는 `Remote`는 복수개도 가능하며, 양방향으로도 `module federation`이 가능하다.<br/>

사용하는 방법은 아래와 같다.<br/>
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
자신의 프로젝트에 `./src/button`에 있는 button을 `RemoteButton`라는 이름으로 다른 앱에서 사용할 수 있도록 `exposes` 해주고 있다. 또한 다른곳에서 사용하기 위해 `remote_from_a_entry.js`라는 이름으로 빌드결과물 이름을 명명 했다.</br>
`host`앱에서 사용할때에는 아래처럼 불러와서 사용할 수 있다.
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
