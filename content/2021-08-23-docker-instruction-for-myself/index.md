---
title: (Almost) Everything about DOCKER🐳 for myself 
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
`docker stop 옵션 이름` container를 중지    
`docker rm 옵션 이름` container를 삭제 (실행 중인 것은 삭제되지 않음. `-f` 옵션으로 강제 삭제 가능)     
`docker run 옵션 이미지이름:태그` container 생성 및 실행. 현재 local에 image가 없으면 pull까지 실행  
`docker top 이름` container 실행 내부 프로세스 확인  
`docker logs 이름` log 확인  
`docker exec 이름 -it /bin/bash` container 내부로 접속    
`docker inspect 옵션 이미지이름:태그` container image 상세보기  
`docker stat` 실행중인 container의 runtime resource 통계 확인  
`docker event` docker host의 실시간 event 정보를 출력

### docker option
`-a` 전체 내역을 보여줌    
`-d` detached mode (background mode) 흔히 말하는 데몬  
`-p` host와 container의 port를 연결 (forwarding)  
`-p hostPort:containerPort` host와 container의 port를 연결  
`-p 8080` container port는 8080으로 open 하고 host port는 random으로 연결  
`-P` dockerfile의 EXPOSE에 맞춰서 random port가 자동으로 open (좀더 확인 필요)  
`-v` host와 container의 directory를 연결 (mount)  
`-v /hostpath:/container-path` host-container volume 연결  
`-v /hostpath:/container-path:ro` host-container volume 연결 및 read/write mode (보통 readonly 사용)  
`-v /container-path` /var/lib/docker/volumes/{UUID} 를 자동생성해서 연결    
`-e` container에서 사용할 환경변수 설정  
`-f` 변경사항을 watch해서 적용 또는 보여줌  
`--name` container 실행 이름 설정  
`--it` -i와 -t를 동시에 사용한 것으로 terminal 입력을 위한 설정 (container의 표준입력과 컴퓨터의 키보드 입력을 연결)  
`--rm` process 종료 시 container 자동제거  
`--link` container 연결  
`--restart` docker desktop을 실행할때마다 자동 restart 실행여부  
`inspect --format '{{.Network.Ip}}'` Network의 Ip만 보기 (.으로 구분)  
