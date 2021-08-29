---
title: Archived notes about dockerfile instruction, docker life cycle command,  etc. 
tags: [docker, kubernetes]
date: 2021-08-23T20:25:44.226Z
path: blog/docker-instruction
cover: ./docker.png
excerpt: Archived notes about dockerfile instruction, docker life cycle command, etc.
show: true
---

## DOCKER 관련 명령어 정리

### Dockerfile
`FROM` container의 운영환경 base image  
`MAINTAINER` image 생성 owner 정보  
`LABEL` image에 container 관련 추가 정보를 저장  
`RUN` build를 위해서 base image에서 실행할 command  
`COPY` build시 host의 파일을 container로 복사  
`ADD` build시 host의 파일(tar, url)을 container로 복사 (확인필요)  
`WORKDIR` build시 명령이 실행될 작업 directory로 설정  
`ENV` 환경변수 지정  
`USER` 명령 및 conatiner 실행시 적용할 user 설정  
`VOLUME` container directory로 mount  
`EXPOSE` conatiner 동작시 외부로 open할 port 설정  
`CMD` container 동작시 자동으로 실행할 서비스나 script 지정 (변수로 활용이 많이된다)  
`ENTRYPOINT` **CMD**와 함께 사용하면서 command 지정시 사용 (변경할 수 없음)


### life cycle
`docker create --name 이름 이미지이름:태그` 지정 이름으로 image를 container로 만듬 (실행은 하지않는다)  
`docker start 옵션 이름` container를 실행  
`docker run 옵션 이미지이름:태그` container 생성 및 실행. 현재 local에 image가 없으면 pull까지 실행  
`docker top 이름` container 실행 내부 프로세스 확인  
`docker logs 이름` log 확인  
`docker exec 이름 /bin/bash` 추가로 명령 실행  
`docker inspect 옵션 이미지이름:태그` container image 상세보기

### docker option
`-d` detached mode (background mode) 흔히 말하는 데몬  
`-p` host와 container의 port를 연결 (forwarding)  
`-v` host와 container의 directory를 연결 (mount)  
`-e` container에서 사용할 환경변수 설정  
`--name` container 실행 이름 설정  
`--it` -i와 -t를 동시에 사용한 것으로 terminal 입력을 위한 설정 (container의 표준입력과 컴퓨터의 키보드 입력을 연결)  
`--rm` process 종료 시 container 자동제거  
`--link` container 연결  
`--restart` docker desktop을 실행할때마다 자동 restart 실행여부  
