## TIL
##10-17(월)
[https://bumikim.netlify.app/how-to-build-a-blog-using-jekyll](https://bumikim.netlify.app/how-to-build-a-blog-using-jekyll) <<< 참고한 사이트

jekyll 테마 적용 + netrify를 통한 깃허브 블로그 개설

[https://endearing-pastelito-4f82c7.netlify.app/](https://endearing-pastelito-4f82c7.netlify.app/)  <<< 배포된 사이트 (테마 적용이 제대로 안되서 이상하게나옴)

1. 일단 jekyll 이용하려면 ruby를 설치해야하는데 이거부터 번거로웠음. << 설치시 64비트로 설치하면 안된다네. → 서비스 내 버튼 누르면 로컬에 ruby 설치가 가능할까? 안되면 설치법과 사이트만 안내해도 ㄱㅊ
2. Netlify를 써서 진행중인데 사용법이 상당히 어려움. 대신 github레포와 연동되있어서 레포변경사항을 자동배포 해준다. → 변경사항이 바로바로 적용되는게 jekyll만 썻을 때와의 차이점. 웹사이트 사용감에 있어서 좋다 이런건 잘 모르겠음.
3. 테마적용이 마음대로 안된다.. 우리가 계획하는 서비스에서 jekyll 테마 템플릿을 얼마나 제공할 지 모르겠으나 쉽지 않아보임 → 그냥 내가 못한걸 수도 있음. 근데 jekyll의 단점이 커스텀과 테마적용의 어려움이라해서 이걸 우리가 어떻게 극복해주냐가 관건일듯?

느낀점 → netrify가 우리가 제작하려던 오픈소스 서비스와 유사한점은 존재하나, 한국인 유저에게 친화적이지 않고 우리가 원래 제작하려던 기능에서도 차이가 있긴함. netrify의 경우 기존 jekyll의 레포 업데이트 시 1~2분 걸리는 문제는 없음.

우리 홈페이지에 사용자의 깃을 연동하고, 웹페이지의 어떤 버튼을 눌렀을 때마다 사용자의 로컬 cmd를 조작할 수 있으면 충분히 프로젝트가 실현 가능하다고 봄. 근데, 가능한가? 사용자 로컬 cmd에 우리가 원하는 조작이 가능한지 확인해봐야 할듯. 이게 아니면 어떤 방식으로 사용자 로컬 내 파일들을 조작할 수 있을지?

예를들면 jekyll의 초기 코드를 생성해주는 jekyll new . 같은 명령어를 어떤 버튼을 눌러서 사용자 cmd에서 실행시켜주는것.

우리 웹페이지내 에디터에서 작성한 내용을 포스팅 버튼을 눌렀을 때 사용자 레포지토리에 잘 넘어가서 사용자 깃허브 블로그가 갱신시키는 것.

##10-17(화)
### [Get a repository content](https://docs.github.com/en/rest/repos/contents#get-repository-content) << 제일 맞는 api

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0017acb-be61-459a-a657-23a74161ccb5/Untitled.png)

- 레포지내 원하는 경로의 파일들을 가져오는 api. md 파일의 경우 sha로 인코딩해서 값이 넘어온다.
- 테스트화면 → test폴더내에 [1](http://1.md),2,3 md파일을 만들어서 테스트해봤다. 해당 폴더내에 존재하는 파일들이 다 넘어오는 것을 확인할 수 있었다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec109b38-a1ec-493c-910f-58666432881f/Untitled.png)

### [Get a repository](https://docs.github.com/en/rest/repos/repos#get-a-repository)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7318bcac-0c0d-41e0-8cd4-5722e4057b78/Untitled.png)

- 레포지토리를 접근해서 가져오는 api가 존재하는 것 같은데 response가 거의 다 url로 이루어져있다. postman으로 테스트 해봐야 알 듯.
- 포스트맨 테스트 : 공식문서 response랑 다를거없이 url만 보내준다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3230e29a-5dd0-47b1-b805-db833caffc5b/Untitled.png)

### [Get a project](https://docs.github.com/en/rest/projects/projects#get-a-project)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c737e133-33dc-4394-accd-4ffb97fb1468/Untitled.png)

- 레포지토리가 아닌 프로젝트를 가져오는 api. 테스트 해보려고 기록

## 밑에 두개는 README만 읽어와짐.. 이름 바뀌면 안읽어짐

### [Get a repository README](https://docs.github.com/en/rest/repos/contents#get-a-repository-readme)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/831d7fb5-3cc8-461b-9258-22df9ce810b6/Untitled.png)

- 레포지토리 내 README를 가져오는 api. readme 파일 읽어오기 가능
- 테스트 결과 인코딩한 값으로 넘어오긴해도 디코딩하면 잘나옴

### [Get a repository README for a directory](https://docs.github.com/en/rest/repos/contents#get-a-repository-readme-for-a-directory)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d058231-cf8a-4cd8-9d52-bad55ce7c93f/Untitled.png)

- 레포지 내 폴더마다 README를 가져오는 api.