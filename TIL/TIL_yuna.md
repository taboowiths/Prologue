## 목차

1. [Hugo](#hugo)
2. [Gatsby](#gatsby)

# Hugo

- Golang 기반 정적 웹사이트 생성기
- 빌드가 빠르다 (런타임에 다른 의존성이 필요하지 않다)
- 문서화가 잘 되어있다
- 한글 레퍼런스가 별로 없다

---

# 설치

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

# Gatsby

# 설치

### 1. Install Gatsby

- ✅ homebrew 설치
- ✅ nodejs 설치

```bash
$ brew install node
```

- ✅ git 설치
- ⚠️ 전역에 gatsby 설치

```bash
$ npm install -g gatsby-cli
```

permission denied 에러 발생

```bash
$ sudo npm install -g gatsby-cli --unsafe-perm=true
```

### 2. Create new Gatsby project

```bash
# gatsby new <폴더명> <스타터-깃허브-주소>
$ gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog

$ cd myblog
$ gatsby develop
```

[http://localhost:**8000**/](http://localhost:8000/) 으로 접속

- 프로젝트 구조

```
# gatsby-starter-blog
├── node_modules
├── content
├── src
│   ├── components
│   ├── images
│   ├── templates
│   └── pages
├── pakage-browser.json
├── gatsby-config.js: 게츠비 사이트 기본구성파일, 사이트의 기본정보(메타정보), 플러그인등 설정가능
├── pakage-node.json
├── pakage-ssr.json
├── LICENSE: 기본 MIT
├── pakage-lock.json
├── pakage.json
├── static
└── README.md
```

```
# gatsby-starter-hello-world
├── node_modules
├── public
├── src
│   └── page
├── gatsby-config.js
├── LICENSE: 기본 MIT
├── pakage-lock.json
├── pakage.json
├── static
└── README.md
```

### 3. Set Gatsby Configuration

- gatsby-config.js

```jsx
module.exports = {
    siteMetadata: {
    title: `una's blog`,
    author: {
      name: `권유나`,
      summary: `👩🏻‍💻`,
    },
    description: `웹 개발하는 중..🔥`,
    siteUrl: `https://Kuuuna98.github.io/`,
    social: {
      github: `Kuuuna98`,
      instagram: ``,
      twitter: ``,
    },
  },
    ...
}
```

- bio 컴포넌트 변경: src/components/bio.js

### 4. Deploy to GitHub pages

- gh-pages 모듈 설치
- gh-pages 모듈을 통해 원하는 branch에 Github pages를 배포할 수 있음

```bash
$ npm install gh-pages --save-dev
```

- package.json

```json
# 빌드한 후 deploy 브랜치에 푸시
# 죽, main 브랜치가 아닌 deploy 브랜치에 빌드된 파일 푸시됨
"scripts": {
    ...
    "deploy": "gatsby build && gh-pages -d public -b deploy",
    ...
}
```

- Github pages 배포

```bash
$ npm run deploy
```

- [ Github Repository - Settings - Pages ]
- source branch를 deploy로 변경
