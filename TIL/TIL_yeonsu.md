### 💻 ***Gatsby 블로그 제작 과정***

**참고 블로그 :** https://velog.io/@gparkkii/build-gatsby-blog

https://woojeongmin.com/2021/gatsby-blog/0-blog-deploy-custom-domain/

https://spriteye.me/posts/2019/09/gatsby-getting-started/

[커스텀 도메인 적용하기](https://woojeongmin.com/2021/gatsby-blog/0-blog-deploy-custom-domain/)

------

### 1. 깃 레포지토리 생성

- **{userName}.github.io 이름으로 깃 레포 생성**
- **public 으로 설정**



### 2. Gatsby 설치

```bash
# Gatsby 설치
npm install -g gatsby-cli
```



### 3. Gatsby 프로젝트 만들기

```bash
# 기본
gatsby new [프로젝트 이름] [적용할 테마의 주소]

# 사용 테마 - gatsby-starter-ghost
gatsby new myblog <https://github.com/gatsbyjs/gatsby-starter-blog>

# 다운받은 gatby 테마 폴더로 이동
cd myblog

# 실행 확인
gatsby develop
```



### 4. Git Repository에 Gatsby 프로젝트 push

```bash
# Git 정보 초기화
rm -rf .git
git init

# Repository Push
git add .
git commit -m "Init Gastby Blog"
git remote add origin <https://github.com/${Github_ID}/${Git_Repository_Name}.git>
git push -u origin master
```



### 5. **블로그 빌드, 배포하기**

- **gh-pages : branch에 Github Pages를 배포할 수 있도록 도와주는 모듈**

  ```bash
  npm install gh-pages --save-dev
  ```

- **package.json 설정**

  ```json
  // 블로그를 build한 뒤 master branch에 푸시
  "scripts": {
      ...
      "deploy": "gatsby build && gh-pages -d public -b master",
      ...
  }
  ```

- **Gatsby 사이트 Github Pages 배포**

  ```bash
  npm run deploy
  ```