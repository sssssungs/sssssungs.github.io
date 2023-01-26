---
title: Want to get 1st prize in search result? Let's do SEO!
tags: [javascript, typescript, react, html, css, nextjs, network, seo]
date: 2023-01-13T19:32:32.226Z
path: blog/seo
cover: ./img_1.png
excerpt: Make pages findable easily! 
show: true
---

`SEO(Search Engine Optimization)`은 검색엔진 최적화의 줄임말이다. 우리는 보통 인터넷 브라우저를 열고 검색어를 입력해 구글 또는 네이버에 검색을 한다. 이때 대부분의 유저들은 상위에 노출된 페이지를 먼저 접근하게 될 것이다. 이러한 검색엔진 결과에서 상위에 노출되도록 하는 작업이 `SEO`라고 할수 있다.  
고객이 검색을 하고 검색결과가 노출될때, 최대 3페이지 정도만 탐색을 하고 그 이후 대부분 이탈을 한다. 첫 페이지의 검색이탈율은 90% 가까이 되고, 3페이지까지 클릭하는 고객은 특별한 경우를 제외하면 3.7%에 불과하다고 한다.  
사람들이 `SEO`와 함께 헷갈려 하는 것 중에 `SEM(Search Engine Marketing)`이 있다. 하지만 `SEM`은 `SEO`의 상위개념으로, 웹사이트의 검색엔진 최적화 작업도 마케팅활동의 일환이라고 할 수 있다.

### Principle of SEO
검색엔진이 검색을 수행하고 웹페이지를 노출하는 로직은 다음의 몇가지 과정을 거치게 된다.  
1. <i>Crawling (크롤링)</i>    
   인터넷 상에 존재하는 수많은 웹문서의 `URL`을 수집하여 구글 검색엔진의 데이터베이스로 모으는 과정이다.
2. <i>Indexing (색인)</i>   
   원래 색인이라는 표현은 단어나 특정한 문장, 다른 문장을 인용한 구절이 있을때 이를 찾아보기 쉽게 따로 정리한 목록을 말한다. `SEO`에서의 색인도 비슷한 개념으로, 웹페이지에 담긴 정보와 컨텐츠를 파악하여 데이터를 저장하는 과정이다.
3. <i>Ranking (랭킹)</i>   
   색인된 웹페이지의 데이터 및 해당 페이지의 `SEO` score를 계산하여 검색결과에서 몇번째에 노출시킬 것인가를 정하는 작업이다. 
    
 ### Tips for improving SEO
<div style="margin-bottom:7px;font-size: 14px;font-weight: 700;">1. Page title 명시</div>  

`<title />` 태그는 `html` 태그의 자식요소중 하나이다. 텍스트만으로 구성되어야하며, `Javascript`로 생성된 동적인 타이틀도 크롤링 된다.  
각 페이지마다 구체적이고 적절한 타이틀을 정한다. 반복은 되도록 피하는것이 좋으며 타이틀 구분자로는 `-`, `|`, `:` 을 사용하는것이 일반적이다.  
`ex) Forum | Randy's Blog`  


<div style="margin-bottom:7px;font-size: 14px;font-weight: 700;">2. 정확하고 올바른 meta tag 사용</div>  

여러가지 meta tag들이 있지만 몇가지 `seo`와 밀접한 관련이 있는 tag들은 `author`, `description`, `robots`, `og` 등이 있다. `author`는 문서의 작성자를 표시한다. `description`은 검색결과 리스트에 노출되는 설명을 넣을 수 있다. `og`는 SNS(facebook, twitter등)에서 공유될 때 보여지는 preview를 설정할 수 있으며 <a href='https://are-you-sssssungs.kr/blog/meta-tag' target="_blank" rel="noopener noreferrer">지난 포스트</a>에서 자세히 다루었다.  
그 중 `robots`은 `index`의 경우 검색결과에 해당 웹페이지를 표시한다는 뜻이고, `noindex`는 그 반대이다.  
```html
<meta name="robots" content="all">
<meta name="robots" content="index,follow"> <!-- 기본값 -->
<meta name="robots" content="noindex,nofollow"> <!-- none  -->
```

<div style="margin-bottom:5px;font-size: 13px;font-weight: 700;">참고) Canonical Tag</div>  

Canonical tag란 사이트 내 `URL`은 다르지만 동일한 중복된 페이지가 있을때 검색엔진에게 대표가 되는 `URL` 하나만을 알려주는 역할을 한다.   
아래 예시를 보면, 동일한 페이지의 `URL`에 `query param`이 붙는다던가, 추적코드가 삽입된 경우 같은페이지로 연결되지만 `URL`은 동일하지 않은 경우가 된다.
```
https://sssssung.com/blog
https://sssssung.com/blog?keyword=react
https://sssssung.com/blog?utm=2
```
이러한 경우 검색엔진이 원본페이지를 식별하지 못해 다른 `URL`을 원본페이지로 인식할 수 있으며, 분산된 `URL`은 `SEO` score를 낮추거나 심한경우 패널티를 받을 수도 있다. 아래처럼 canonical tag를 삽입하여 원본 페이지를 명시할 수 있다.
```html
<head>
   <link rel="canonical" href="https://sssssung.com/blog">
</head>
```

<div style="margin-bottom:7px;font-size: 14px;font-weight: 700;">3. 정확하고 올바른 html 작성</div>  





<br/><br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko<br/>
</div>

