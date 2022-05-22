---
title: Glossary of networking terms
tags: [javascript, typescript, network]
date: 2022-05-18T19:26:04.226Z
path: blog/network
cover: ./network.png
excerpt: A compilation of essential networking terms with links to IT development
show: true
---
내가 참조하기 위해 작성하는 네트워크 필수 용어 및 설명

### Javascript window location object
<b>예시: http://www.example.com:8080/search?q=devmo#test </b>

`hash` 주소값에 붙어있는 anchor값 반환 ex) #test  
`hostname` URL의 도메인 반환 ex) www.example.com  
`href` URL 전체 반환 ex) http://www.example.com:8080/search?q=devmo#test  
`origin` 프로토콜 + URL의 도메인 + 포트 ex) http://www.example.com:8080        
`pathname` URL 경로 반환 ex) /search                                          
`port` 서버 포트 반환 ex) 8080  
`protocol` 프로토콜 반환 ex) http:  
`search` URL에 붙은 매개변수 반환(물음표 뒤의 값) ex) ?q=devmo  
`sub domain` 호스트, 서브 도메인으로 불리기도 합니다. 보조 도메인으로써 URL로 전송하거나 계정 내의 IP주소나 디렉토리로 포워딩되는 도메인 이름의 확장자 ex) www  
`Top-level domain` 도메인 레벨 중에 가장 높은 단계에 있는 도메인입니다. 도메인의 목적, 종류, 국가를 나타냅니다. ex) com  
`domain name` 임의로 지정할 수 있는 사이트의 이름입니다. 익히 알고 있는 google, naver, daum 등 사용자에게 쉽게 기억될 수 있도록, 보통 서비스명으로 도메인명을 지정해 사용합니다. ex) example

### IP
IP는 `0.0.0.0` 부터 `255.255.255.255` 까지 총 (`2^32`, `4,294,967,296`개)를 표현할 수 있다. 전세계 사람들에게 IP를 효율적으로 할당하기 위해 각 용도에 맞게 클래스로 나누어 IP 대역을 구분한다.  
클래스는 총 5개 A, B, C, D, E 가 존재한다. 흔하게 사용되는건 A, B, C이며 D와 E는 각각 멀티캐스트용도, 기타목적으로 예약된 클래스로 실제 IP주소가 할당되지는 않는다.
**210.77.8.3** 라는 IP는 네트워크 ID를 **210.77.8**, 호스트 ID를 **3**로 표현할 수 있다. 이유는 Routing으로 특정 IP 찾아갈때 이 두 ID를 통해 효율적으로 목적지를 알아내기 때문이다.

### CIDR 표기법
wip
