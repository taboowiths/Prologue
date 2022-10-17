## 깃허브 블로그 만들기



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

