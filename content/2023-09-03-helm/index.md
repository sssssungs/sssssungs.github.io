---
title: The role of Helm in a Kubernetes architecture
tags: [network, softwareDevelopment, docker, kubernetes, helm]
date: 2023-09-03T16:12:16.226Z
path: blog/helm
cover: ./img.png
excerpt: What & Why is the helm
show: true
---

## What is the HELM ?

`Helm`이란 `k8s` 패키지 관리를 도와주는 매니저이다. <a href='https://helm.sh/' target="_blank" rel="noopener noreferrer">공식사이트</a> (`nodejs`의 `npm`, `python`의 `pip`, `MacOS`의 `brew`와 같은 역할이라고 할 수 있다) `Helm`을 이용하면 `k8s`에 쉽게 그리고 빠르게 원하는 패키지들을 설치하고, 관리(업데이트, 배포 등) 할 수 있다.  
기본이 되는 필수개념을 소개하자면, `Chart`, `Repository`, `Release` 3가지가 있다. 

- `Chart`: `Helm`의 단위가 되는 패키지이며, `application`이 구동되기 위해 필요한 여러 리소스들이 포함되어 있다.
- `Repository`: `chart`가 저장되고 공유되는 곳이다. `docker`로 생각한다면 `dockethub`의 역할이라고 할 수 있다. 대표적인 `repo`로는 <i>bitnami</i>(https://bitnami.com/stacks)가 있다. 
- `Release`: `Helm`이 실행되는 `chart instance`이다. 


### 기본 Command

`helm search` helm hub/repository에서 chart 검색  
`helm install` k8s에 helm chart 설치 (kubectl apply와 비슷)  
`helm list` k8s에 install된 모든 release를 리스트업  
`helm show` chart에 대한 정보 보기  
`helm repo` chart repository 추가, 업데이트 등  
`helm package-tgz` 현재 폴더에 chart archive 생성  


<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://helm.sh/<br/>
</div>

