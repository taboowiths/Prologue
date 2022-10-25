## 📅 2022.10.17

#### 💻 **_Gatsby 블로그 제작 과정_**

**참고 블로그 :** https://velog.io/@gparkkii/build-gatsby-blog

https://woojeongmin.com/2021/gatsby-blog/0-blog-deploy-custom-domain/

https://spriteye.me/posts/2019/09/gatsby-getting-started/

[커스텀 도메인 적용하기](https://woojeongmin.com/2021/gatsby-blog/0-blog-deploy-custom-domain/)

---

#### 1. 깃 레포지토리 생성

- **{userName}.github.io 이름으로 깃 레포 생성**
- **public 으로 설정**

#### 2. Gatsby 설치

```bash
# Gatsby 설치
npm install -g gatsby-cli
```

#### 3. Gatsby 프로젝트 만들기

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

#### 4. Git Repository에 Gatsby 프로젝트 push

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

#### 5. **블로그 빌드, 배포하기**

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

---

## 📅 2022.10.18

- [x] 와이어 프레임 수정(FE)

  ![image](https://user-images.githubusercontent.com/83412032/196413183-154f9a36-c26d-4529-8fcb-e9df5135f159.png)

- [x] 와이어 프레임 디테일 수정(개인)

  ![image](https://user-images.githubusercontent.com/83412032/196521607-73a38692-366a-407a-9eca-ac43501d816e.png)

- [x] npm 없이 git 배포 확인 및 정리

---

## 📅 2022.10.19

- [x] 목업 디자인

  ![image](https://user-images.githubusercontent.com/83412032/196616267-8ea66138-40b7-4fea-b9e7-854ac7b2aced.png)

---

## 📅 2022.10.20

- [x] 목업디자인

  ![image](https://user-images.githubusercontent.com/83412032/197025803-9153f16a-bb55-4869-a4ba-5ab982642fa7.png)

  ![image](https://user-images.githubusercontent.com/83412032/197026026-5664916e-2a1c-4a84-9da9-88d229629068.png)

- [x] Gatsby 사용 가능 테마 탐색

  [Starters Library | Gatsby](https://www.gatsbyjs.com/starters)

  [Jamstack Themes](https://jamstackthemes.dev/#ssg=gatsby&archetype=blog)

  - md 형식(비슷한 경로)

    ##### [Gatsby-Starter-Blog](https://github.com/gatsbyjs/gatsby-starter-blog)

    - gatsby-dtarter-blog/content/blog/hello-world/index.md

    ##### [Serial Programmer](https://github.com/sharadcodes/gatsby-theme-serial-programmer)

    - gatsby-theme-serial-programmer/content/blog/gatsby-markdown.md

    ##### [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)

    - gatsby-starter-netlify-cms/src/pages/about/inedex.md

    ##### [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog)

    - 맞는지 모르겠음 경로 확인 재 필요
    - gatsby-starter-minimal-blog/content/pages/about/index.md

    ------

    content 폴더에 내용있음

    ##### [Gatsby Starter Glass](https://github.com/yinkakun/gatsby-starter-glass)

    - gatsby-starter-glass/src/templates/about-template****.****js

    ##### [Gatsby Advanced Blog System](https://github.com/danilowoz/gatsby-advanced-blog-system)

    - gatsby-advanced-blog-system/content /blog/폴더/.md

    ##### **[gatsby-starter-foundation](https://github.com/stackrole/gatsby-starter-foundation)**

    - 게시글 : gatsby-starter-foundation/src/content/posts/.md
    - 네비게이션 about : gatsby-starter-foundation/src/content/pages/about.md

    ------

    content 폴더에는 없지만 .md + js

    ##### **[gatsby-netlifycms-starter-template](https://github.com/simarmannsingh/gatsby-netlifycms-starter-template)**

    - gatsby-netlifycms-starter-template/src/pages/about/index.md
    - gatsby-netlifycms-starter-template/src/pages/contact/thanks.js

    ------

  - .js 파일 형식 : 템플릿을 js로 만들고 데이터를 가져와 입히는 형식(걍 다 다름)

    ##### [gatsby-starter-ghost](https://github.com/TryGhost/gatsby-starter-ghost)

    - gatsby-starter-ghost/src/templates/index.js

    ##### [gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter)

    - post게시글 : gatsby-material-starter/themes/material/src/gatsby-theme-advanced/templates/post/index.tsx
    - about : gatsby-material-starter/themes/material/src/pages/about.tsx

    ##### [starter-gatsby-blog](https://github.com/contentful/starter-gatsby-blog)

    - starter-gatsby-blog/src/pages/blog.js

    ##### [gatsby-starter-wordpress-blog](https://github.com/gatsbyjs/gatsby-starter-wordpress-blog)

    - gatsby-starter-wordpress-blog/src/templates/blog-post.js

    ##### **[gatsby-starter-hygraph-blog](https://github.com/hygraph/gatsby-starter-hygraph-blog)**

    - gatsby-starter-hygraph-blog/src/templates/blog-post.js

      

  <포토폴리오>

  ##### **[gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)**

  - gatsby-starter-portfolio-cara/src/@lekoarts/gatsby-theme-cara/sections/about.mdx

---

## 📅 2022.10.21

- [x] 목업 디자인 마무리

- [x] 컴포넌트 구조화

  ![image](https://user-images.githubusercontent.com/83412032/197155883-3977af4a-a541-4237-91d6-884e3ffb706d.png)

- [x] 컨설턴트 미팅

---

## 📅 2022.10.24

- [x] 컬러팔레트 제작

- [x] 공통 컴포넌트 개발
  - [x] 버튼
  - [x] 스위치버튼
  - [x] input

---

## 📅 2022.10.25

- [x] 프론트 컨벤션 회의
- [x] 프론트 환경설정 회의
- [x] 프론트 환경설정 세팅
