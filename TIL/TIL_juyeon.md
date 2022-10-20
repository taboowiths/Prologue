## 깃허브 블로그 만들기(10.17)



#### 새로운 Repository 만들기

- 이름 : **username**.github.io
- Public으로 설정
- Add a README file 체크



#### 로컬에 repository clone하기



#### 로컬에서 Clone한 폴더에서 index.html 파일 생성

- 웹 브라우저가 홈페이지 url에 처음 접근하였을 때 읽는 파일
- 홈페이지를 접근하였을 때 처음 보여지는 화면을 결정하는 파일



- 터미널에서 다음과 같이 index.html을 만들 수 있음

```
cd username.github.io
echo "Hello world!" > index.html
```



#### 생성한 파일을 원격으로 push하기

- https://**username**.github.io 에 들어가면 홈페이지가 만들어진 것을 확인 가능



#### Jekyll 다운 받기

- 터미널에서 다음과 같은 명령을 실행

```
gem install bundler
gem install jekyll
```

-------------------

- 맥북 오류남..

```
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

rbenv install 3.1.2
rbenv global 3.1.2
rbenv versions
ruby -v
rbenv rehash
```



#### 기존 index.html 삭제

```
rm -f index.html
```



#### 다운받은 jekyll을 이용하여 홈페이지 기본적인 틀 생성

```
jekyll new ./ --force
```

**원격저장소에 연결된 root directory에서 해야 함**

confict가 계속 나서 --force 추가하니 설치됨..



#### Bundle 설치

```
bundle install
```



#### jekyll을 로컬 서버에 띄우기

```
bundle exec jekyll serve
```

------

- 오류... ruby 3.0.0 이상부터는 webrick이 기본으로 포함된 gem에서 빠져서 추가 설치 필요

```
bundle add webrick
```



## Gatsby를 이용하여 블로그 만들기(10.18)



#### 1. Gatsby 사용 설정

```
sudo npm install -g gatsby-cli
```

- Gatsby CLI는 Webpack, React.js, React-route 등을 이미 포함해서 간단하게 이용할 수 있게 해줌



```
gatsby new gatsby-advanced-starter https://github.com/Vagr9K/gatsby-advanced-starter
```

- 사용할 gatsby 테마 설치
  - 리액트 버전때문에 node_modules 설치에서 오류 발생
  - `npm install --force`로 따로 설치해줌



```
gatsby develop
```

- 로컬 development server 시작
  - localhost:8000으로 사이트 접속 가능



---------

- gatsby 테마를 잘 선택해서 우리 프로젝트로 가져와야 할 듯
  - 내가 선택한게 gatsby-config.js 설정파일이 조금 달랐음
  - 게시글 작성 폴더도 찾기가 어려움
- npm install 을 오류 안나게 어떻게 설정할지 고민해봐야 할 듯



## 목업 디자인(10.19)



- 게시물 관리 페이지

  ![게시글_목록](/uploads/f8c616142da3edea437552f777a57b8f/게시글_목록.png)


## 목업 디자인(10.20)



- 게시글 작성 페이지

  ![게시글_작성](/uploads/e9b0f22a995341d87a7743e6fcf00c93/게시글_작성.png)



- 페이지 관리

  ![_Prologue_페이지_관리](/uploads/35161f6bec0719fbb1f6461c5c07d8ae/_Prologue_페이지_관리.png)
