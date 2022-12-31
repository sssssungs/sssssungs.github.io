---
title: Meta tag and open graph
tags: [javascript, typescript, react, html, css, nextjs, network, seo]
date: 2022-12-26T17:18:32.226Z
path: blog/meta-tag
cover: ./img.png
excerpt: Get a sneak peek of the website before open it 
show: true
---

`Open graph`란 소셜 네트워크에서 시작한 개념이며 인터넷 프로토콜의 한 종류로써 2010년에 페이스북에서 발표했다. 
`open graph`의 목적은 웹페이지의 정보를 가지고 있는 meta data를 표준화 하여, 페이스북 내에서 링크를 공유할 시에 그 웹페이지가 가지고 있는 정보를 특정 형식을 통해 미리보기 형태로 제공해주는 기능이다. 특정정보를 웹페이지에서 미리 간략하게 정리하여 입력해두면 일관된 정보를 전달할 수 있다는 장점이 있다. 이후 트위터와 링크드인에서 이를 활용하여 더 나은 UX를 제공하는데에 활용되고 있다.  

<div class="quote" style="font-style: italic;font-size: 12.5px;">
The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.<br/><br/>
While many technologies and schemas exist and could be combined, there isn't a single technology which provides enough information to richly represent any web page within the social graph. The Open Graph protocol builds on these existing technologies and gives developers one thing to implement. Developer simplicity is a key goal of the Open Graph protocol which has informed many of the technical design decisions.
</div>
<br/>
<div style="width: 60%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
  <img src="./opengraph.png" alt="img" />
</div>

### How to use
`metadata`를 `<head>` 영역에 추가하면 bot이 해당 `metadata`를 읽어서 내용을 표시해준다
- `og:title` 표시될 제목
- `og:type` 표시할 데이터의 `video` 또는 `image` website등의 타입
- `og:image` 표시할 `image`의 주소
- `og:url` 전달할 웹페이지 주소  

<br/>
실제 코드는 아래와 같이 입력한다.

```html
<html lang="en">
<head>
       <title>The Rock (1996)</title>
       <meta property="og:title" content="The Rock" />
       <meta property="og:type" content="video.movie" />
       <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
       <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
       ...
</head>
...
</html>
```




<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://ogp.me/<br/>
</div>

