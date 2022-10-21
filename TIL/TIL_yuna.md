## 목차

1. [Hugo](#hugo)
2. [Gatsby](#gatsby)
3. [GitHub REST API TEST](#github-rest-api-test)
4. [Base64 encoding & decoding](#base64-encoding-decoding)

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

# GitHub REST API TEST

## 📄 공식문서

- **GitHub REST API Docs Create or Update file**

[Repository contents - GitHub Docs](https://docs.github.com/en/rest/repos/contents#create-or-update-file-contents)

## 🐈‍⬛ GitHub Token 발급

1. GitHub [ Settings - Developer settings - Personal access tokens ]에 들어가서 Generate new token 클릭
2. repo 전체 체크 후 토큰 발급
3. 토큰 복사 (⚠️ 토큰값을 다시 확인할 수 없으므로 어디에 저장해두기)

## 🔥TEST

### 1. postman으로 txt 파일 업로드

1. request url 입력

   ```
   # PUT
   # owner: 계정
   # repo: 레포
   # path: 업로드할 파일경로 ex. post 폴더에 업로드 할 경우 post/test.txt

   /repos/{owner}/{repo}/contents/{path}
   ```

2. 파일 인코딩

   1. [🔗base64encode](https://www.base64encode.org/) 에서 파일 내용을 Base64로 인코딩
   2. 내용 입력 후 ‘encode’ 버튼 누르면 아래 인코딩한 파일 내용이 출력됨

3. 헤더 입력
   1. Authorization
      1. ‘Bearer ‘ 뒤에 token값 입력 (Bearer과 token 사이 공백 존재)
   2. Content-Type
      1. application/json
4. 바디 입력
   - body request param
   1. message
      1. 커밋내용작성
   2. content
      1. Base64로 인코딩한 파일 내용 입력
5. 파일 업로드 성공 시 코드 201
6. 업로드 확인

### 2. postman으로 md 파일 업로드

1. 방식은 1번과 동일
2. md 파일 인코딩
3. txt에서 md로 파일형식 변경
4. 업로드 확인

### 3. postman으로 파일 업데이트

1. 파일 수정은 body에 **sha**값을 넣는 것을 제외하고 파일 업로드와 과정이 동일
   (이미 있는 파일을 수정하는 경우 파일의 sha값 필요)

2. [🔗content 확인](https://docs.github.com/en/rest/repos/contents#get-repository-content) request url 입력

```
# GET
# owner: 계정
# repo: 레포
# path: 업로드할 파일경로 ex. post 폴더에 업로드 할 경우 post/test.txt

/repos/{owner}/{repo}/contents/{path}
```

- 확인할 때는 token 필요 없음

1. 파일 조회 성공 시 코드 200
2. response에서 ‘sha’값을 복사
3. 파일 수정 request body에 sha값 추가
4. 파일 수정 성공 시 코드 200
5. 수정 확인

### 4. 이미지 인코딩 확인

1. `<img>` 태그 사용

```html
<img src="https://..." width="600" />
```

1. 파일 업로드 과정을 동일하게 진행
2. 이미지 업로드 확인

### 5. 파일 업로드 시 새로운 branch를 생성해 푸시할 수 있을지

- 현재 레포에 main branch만 있음

- request body에 새로운 branch “test”를 넣어서 보내봄

- 🚨 404 에러
- 레포에 없는 branch는 에러남,,ㅠ

---

## 🚧 Check

- 파일명 중복: 우리가 업로드할때 파일명을 중복이 안되도록 해야함
- base64 encoding / decoding (⚠️ 한글되는지 확인하기)
- decoding 시 개행문자 확인 후 decoding해야함
- ~~branch 테스트~~

## 🔗 참고

[1] [github api + postman 이용해 txt 파일 업로드](https://www.youtube.com/watch?v=8Wzr59g4WQk)

# Base64 encoding decoding

# Javascript

### 1. btoa() ❌

- 한글 깨짐

```jsx
// window.btoa(text)
global.btoa(text);

// window.atob(encodedText)
global.atob(encodedText);
```

### 2. encodeURIComponent() 🔺

```jsx
// window.btoa(~~unescape~~(encodeURIComponent(example)))
global.btoa(~~unescape~~(encodeURIComponent(example)))

// decodeURIComponent(~~escape~~(window.atob(encodedText)))
decodeURIComponent(~~escape~~(global.atob(encodedText)))
```

- 원하는 결과가 나오지만 코드상에서 취소선 생김

- unescape, escape를 지우고 인코딩/디코딩하는 경우 ❌

```jsx
// window.btoa(encodeURIComponent(text))
global.btoa(encodeURIComponent(text));

// decodeURIComponent(window.atob(encodedText))
decodeURIComponent(global.atob(encodedText));
```

- unescape, escape를 지우면 다르게 인코딩됨
- github api로 내용을 넣으면 제대로 디코딩되지 않음

### 3. [opensource] encode() ⭕

- 오픈소스를 사용해 인코딩/디코딩하기

[https://github.com/dankogai/js-base64](https://github.com/dankogai/js-base64)

```bash
$ npm install --save js-base64
```

```jsx
const { Base64 } = require("js-base64");
Base64.encode(text);
Base64.decode(encodedText);
```

- License
  - [BSD-3-Clause license](https://github.com/dankogai/js-base64/blob/main/LICENSE.md)

# Java ⭕

```java
import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;

public class test {

    public static void main(String[] args) throws UnsupportedEncodingException {

        String target = "# TEST\n" +
                "\n" +
                "- branch변경 시 md파일 업로드 확인";
        byte[] targetBytes = target.getBytes("UTF-8");

        // Base64 인코딩
        Encoder encoder = Base64.getEncoder();

        // 1. Encoder#encode(byte[] src) :: 바이트배열로 반환
        byte[] encodedBytes = encoder.encode(targetBytes);
        System.out.println(new String(encodedBytes));

        // 2. Encoder#encodeToString(byte[] src) :: 문자열로 반환
        String encodedString = encoder.encodeToString(targetBytes);
        System.out.println(encodedString);

        // Base64 디코딩
        Decoder decoder = Base64.getDecoder();

        // 1. Decoder#decode(bytes[] src)
        byte[] decodedBytes1 = decoder.decode(encodedBytes);
        System.out.println(new String(decodedBytes1, "UTF-8"));

        // 2. Decoder#decode(String src)
        byte[] decodedBytes2 = decoder.decode(encodedString);
        System.out.println(new String(decodedBytes2, "UTF-8"));

    }

}
```
