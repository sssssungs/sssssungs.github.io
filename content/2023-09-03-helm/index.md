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

### Basic tree of the helm chart 
`helm`을 이용해서 새로운 chart를 생성하게 되면 기본구조를 가지고 있는 chart가 생성된다. 그 tree 구조는 아래와 같다.

<div style="padding:10px;background:#fff4cf;color:black;border-radius:5px;box-shadow: 1px 1px 5px #0e3767">
<u>myChart/</u><br/>
&nbsp;&nbsp;&nbsp;&nbsp;|____ Chart.yaml<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;|____ values.yaml<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;|____ <u>charts/</u><br/>  
&nbsp;&nbsp;&nbsp;&nbsp;|____ <u>templates/</u><br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|____ NOTES.txt<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|____ _helpers.tpl<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|____ deployment.yaml<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|____ ingress.yaml<br/>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|____ service.yaml<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
</div><br/>

- `Chart.yaml`: chart 정보를 정의 (name, description, version 등)
- `values.yaml`: k8s template yaml에 적용하는 dynamic value들을 정의
- `charts`: dependency chart를 저장하는 directory
- `templates`: k8s resource template이 저장되는 directory
- `NOTES.txt`: chart 설치후 출력할 메시지를 정의
- `_helpers`: templates 폴더에서 사용할 변수들을 정의
- `deployment.yaml`, `ingress.yaml`, `service.yaml`: k8s에 실행할 resource template


### 기본 Command

`helm create [name]` 새로운 helm chart를 생성
`helm search` helm hub/repository에서 chart 검색  
`helm install` k8s에 helm chart 설치 (kubectl apply와 비슷)  
`helm list` k8s에 install된 모든 release를 리스트업  
`helm show` chart에 대한 정보 보기  
`helm repo` chart repository 추가, 업데이트 등  
`helm package [name]` 현재 폴더에 chart archive 생성 (`[name]-[version].tgz` 포맷으로 생성)  

### Helm install with dynamic variable: chart.yaml, values.yaml
`templates` 이하의 `yaml` 파일을 작성할때, 그 내부 변수들을 `values.yaml`에서 읽어와 동적으로 `injection` 시켜줄 수 있다. `helm`을 사용하는 이유라고 해도 과언이 아닌 기능이다.
`Chart.yaml`, `values.yaml` 파일을 아래처럼 정의하고, `templates` 폴더 이하에 `deployment.yaml` 아래처럼 작성하게 되면,  

```yaml
## Chart.yaml
apiVersion: v2
name: myapp
description: myapp nginx description
type: application
version: 0.0.1
appVersion: 1.0.0
```

```yaml
## values.yaml
replicaCount: 2
image:
  repository: nginx
  tag: 1.2.3
  pullPolicy: ifNotPresent
  pullSecret:
service:
  type: NodePort
```

```yaml
## deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: "deploy-{{ .Release.Name }}" # install 할때에 지정하는 name이 주입된다.
spec:
  replicas: {{ .Values.replicaCount }} # values에서 replicaCount를 읽어와 replicas: 2 로 생성된다.
  selector:
    matchLabels:
      app: "{{ .Chart.Name }}" # chart에서 name을 읽어온다. 즉, app: myapp
    template:
      metadata:
        labels:
          app: "{{ .Chart.Name }}" # chart에서 name을 읽어온다. 즉, app: myapp
      spec:
        containers:
          - image: "{{ .Values.image.repository }}" # values에서 repository을 읽어온다. 즉, image: nginx
            imagePullPolicy: "{{ .Values.image.pullPolicy }}" # values에서 pullPolicy을 읽어온다. 즉, imagePullPolicy: ifNotPresent
            name: "{{ .Chart.Name }}" # chart에서 name을 읽어온다. 즉, app: myapp
            ports:
              - containerPort: 80
```



<br/>
<div style="font-size:10px;color:#8b9196;word-break: break-all"><b>내용 및 이미지 출처</b><br/>
- https://helm.sh/<br/>
</div>

