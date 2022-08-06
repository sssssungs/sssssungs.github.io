---
title: Algorithm | DFS & BFS
tags: [javascript, typescript, algorithm, softwareDevelopment]
date: 2022-07-26T19:49:04.226Z
path: blog/dfs-bfs
cover: ./nodes.png
excerpt: Deep dive into DFS and BFS
show: true
---

DFS(`Depth-First Search`) 깊이 우선 탐색, BFS(`Breadth-First Search`) 너비 우선 탐색 모두 `graph`를 탐색하는 방법이다. 알고리즘에서 `graph`란, `node`와 그 `node`를 연결하는 `edge`로 이루어진 자료구조를 말하며, 이를 탐색한다는 것은 하나의 `node`에서 시작해 `edge`로 연결된 차례대로 모든 `node`를 한번씩 방문하는 것을 말한다.
<div style="width: 50%;margin-bottom: 15px; margin-left:auto; margin-right: auto;">
<img src="./nodeAndEdge.png"/>
<div style="width:200px;margin-left:auto; margin-right: auto;font-size:13px; color:#8b9196">Node와 Edge로 구성된 Graph</div>
</div>

### Depth-First Search (DFS: 깊이 우선 탐색)

`DFS`는 탐색 `graph`의 최초의 `node`를 확장하여 목표 상태가 발견될 때까지 더 깊이 확장하는 <a href='https://ko.wikipedia.org/wiki/%EB%A7%B9%EB%AA%A9%EC%A0%81_%ED%83%90%EC%83%89' target='_blank' rel='noopener noreferer'>맹목적 탐색 (Blind search)</a>이다. 만일 자식`node`를 갖고 있지 않은 `node`에 이르면 `back-tracking`하여 다음 `node`에서 출발한다. 
`DFS`는 다음과 같은 몇가지 특징과 구현방법을 가진다   

- 자기 자신을 호출하는 순환 알고리즘 형태를 가진다
- 전위순회를 포함한 다른 형태의 트리 순회는 모두 `DFS`의 한 종류이다
- 구현 시 `graph`탐색의 경우 어떤 `node`를 방문했었는지 여부를 반드시 검사해야 한다 (그렇지 않을 경우 무한루프 주의!)

<br/>

- 보통 재귀함수 (`Recursive Function`)이나 스택(`stack`)을 이용하여 구현  
  ① 탐색 시작 `node`를 stack에 넣고 방문처리  
  ② stack의 최상단 `node`에 방문하지 않은 인접한 `node`가 하나라도 있으면 그 `node`를 stack에 넣고 방문처리  
    방문하지 않은 인접 `node`가 없으면 stack에서 최상단 `node`를 꺼낸다  
  ③ 위 과정을 수행할 수 없을때까지 반복한다

### BFS (깊이 우선 탐색)

 
<br/>
<div style="font-size:10px;color:#8b9196">
<b>내용 출처</b><br/>
- https://en.wikipedia.org/wiki/Depth-first_search<br/>  

</div>

