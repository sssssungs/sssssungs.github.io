---
title: OnSuccess in UseQuery has been disappeared
tags: [javascript, typescript, react, redux, nextjs]
date: 2024-10-28T20:31:52.226Z
path: blog/onsuccess-rq
cover: ./img.png
excerpt: How on earth can we find another way?
show: true
---
 
현재 회사에서는 `react-query`를 상태관리 및 캐시관리 라이브러리로 사용하고 있다. 사실 사용하고 있는 버전은 v4로, 앞으로 언급할 `onSuccess`를 포함한 `onError`, `onSettled`를 사용할 수 있다.  
하지만 언젠가는 버전업을 할테니 최대한 유지보수 비용이 들지않게 해당 옵션을 사용하지 않는 방향으로 코드를 만들고 있다. 하지만 처음에 `onSuccess`를 어떻게 대체해야할지 머릿속에서 그림이 그려지지 않았다. 그래서 어떤 대체할수 있는 방법이 있을지 하나씩 살펴보려고 한다. 

<br/>

`v5`버전의 `doc`를 보면 다음 <a target="_blank" rel="noopener noreferrer" href='https://tanstack.com/query/v5/docs/framework/react/guides/migrating-to-v5#callbacks-on-usequery-and-queryobserver-have-been-removed'>링크</a>에서 `onSuccess`, `onError`, `onSettled`가 삭제되었다고 명시해주고 있다. 물론 `queries`에서만이고, `mutation`에서는 유지된다.  
해당 옵션은 굉장히 편리한 기능이었고, 많은 개발자들이 해당 옵션을 사용해서 코드를 작성했을거라고 본다. 아마 이 변경사항이 현재까지 `react-query` 업데이트 중 가장 큰 `breaking change`가 아닐까 싶다. 생각해보면 지금까지 아무 문제없이 잘돌아가는 기능이 사라지게 된것이다. <span style='font-size: 10px'>(상상만해도 막막하다...끔찍해..)</span>


<br/>
<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-react-query-4#onsuccess-is-no-longer-called-from-setquerydata
- https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
</div>