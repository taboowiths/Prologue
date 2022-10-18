## 목차

1. [Hugo](#hugo)
2. [Hugo 설치](#hugo-설치)

# Hugo

- Golang 기반 정적 웹사이트 생성기
- 빌드가 빠르다 (런타임에 다른 의존성이 필요하지 않다)
- 문서화가 잘 되어있다
- 한글 레퍼런스가 별로 없다

---

# Hugo 설치

- mac과 windows는 설치방법이 다른거 같음. windows는 다른 분이 하실 거 같아 mac으로 함.

## 1. Install Hugo

```bash
$ brew install hugo

# 설치 후 hugo 버전 확인
$ hugo version
```

## 2. Create GitHub Repository

- `blog`: Hugo의 컨텐츠와 소스파일을 포함할 저장소 생성 (레포명은 자유)
- `<USERNAME>.github.io`: 렌더링된 버전의 Hugo 웹사이트를 포함할 저장소 생성

### 2-1. Hugo로 프로젝트 만들기

```bash
# hugo 프로젝트 생성
$ hugo new site blog
```

- 프로젝트 구조

```
├── archetypes
│   └── default.md
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
```

### 2-2. 테마 설치

[HugoThemes](https://themes.gohugo.io/) 에서 테마 선택 후 다운로드

```bash
$ hugo server [-D]
```

[http://localhost:1313/](http://localhost:1313/) 에서 확인

### 2-3. 레포연결

```bash
# blog에 blog repo 연결
$ git remote add origin http://github.com/<USERNAME>/blog.git

# blog/public에 <USERNAME>.github.io repo 연결
$ git submodule add -b main http://github.com/<USERNAME>/<USERNAME>.github.io.git public
```

### 2-4. 컨텐츠 생성

```bash
# hugo new post/<원하는 경로>/파일명.md
$ hugo new post/test.md
```

### 2-5. 컨텐츠 업로드

```bash
# 테마가 벅용된 블로그 내용을 public에 생성
$ hugo -t <테마명>

# public으로 이동해 <USERNAME>.github.io repo에 푸시
$ cd public
$ git add .
$ git commit -m "커밋메세지"
$ git push origin main

# blog repo에 푸시
$ cd ..
$ git add .
$ git commit -m "커밋메세지"
$ git push origin main

# public을 실수로 add했을 때 취소하기
$ git rm --cached public
```

### 2-6. 쉘 스크립트로 업로드 자동화하기

- sh 파일을 이용해 배포를 쉽게 하자!

```bash
# blog/deploy.sh 파일 생성
$ vi deploy.sh
```

```bash
#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo -t <테마명>

# Go To Public folder, sub module commit
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin main

# Come Back up to the Project Root
cd ..

# blog 저장소 Commit & Push
git add .

msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push origin main
```

```bash
# deploy.sh 실행 파일 권한 부여
$ chmod 777 deploy.sh

# 배포 실행
$ ./deploy.sh
```

---
