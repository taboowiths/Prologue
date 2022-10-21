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

##10-18(화)
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

##10-19(수)
### [Get a repository content](https://docs.github.com/en/rest/repos/contents#get-repository-content)
어제 괜찮다고 생각한 레포 내 컨텐츠를 가져오는 api가 실제로 사용해보니, 컨텐츠 내용을 볼 수 없는 문제가 있었다.
해당 api를 이용하여 폴더 내 컨텐츠 개수와 경로를 파악하고 이를 이용하여, 한개 씩 뽑아내야할거 같다.

### 깃 로그인 연동
깃 로그인연동을 진행중인데 간단하게 생각했는데, 생각했던만큼 쉽지 않았다. 프론트 단에서 바로 연동을 진행할까 했는데, 백을 거치는 과정을 권장해서 알아보는중이다.

##10-20(목)
<template>
  <div>
    <v-row v-for="item in postList" :key="item">
      <v-col>{{ item }}</v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { Base64 } from "js-base64";

export default {
  name: "App",
  data() {
    return {
      token: "",
      postList: [],
    };
  },
  created() {},
  mounted() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    this.getList();
  },
  methods: {
    getList() {
      axios({
        method: "get",
        //테스트라 url이라 내거로 고정임 / huni-hun < git계정 / testRepo < repo 이름 / contentes < api 양식 / post < 탐색 경로
        url: `https://api.github.com/repos/huni-hun/testRepo/contents/post`,
        headers: {
          accept: "application/vnd.hithun+json",
          Authorization: `Bearer ` + this.token,
        },
      }).then((res) => {
        console.log(res);
        for (let index = 0; index < res.data.length; index++) {
          const path = res.data[index].path;
          this.setItem(path, index);
        }
      });
    },

    setItem(path, i) {
      axios({
        method: "get",
        //테스트라 url이라 내거로 고정임 / huni-hun < git계정 / testRepo < repo 이름 / contentes < api 양식
        url: `https://api.github.com/repos/huni-hun/testRepo/contents/` + path,
        headers: {
          accept: "application/vnd.hithun+json",
          Authorization: `Bearer ` + this.token,
        },
      }).then((res) => {
        this.postList[i] = Base64.decode(res.data.content);
        console.log(this.postList[i]);
      });
    },
  },
};
</script>

git api를 이용하는 테스트 페이지 생성

##10-21(금)
1. 깃허브 엑세스토큰 관리를 어디에서 하면 좋을 지
    1. [프론트에서 관리] 깃허브와 프론트가 통신
    2. [서버에서 관리] 서버를 거쳐서 깃허브 - 서버 - 프론트 통신
        1. API & DB 필요
    - **답변**
        - 서버에서 저장하려면 자동로그인을 지원해야하고, 자동로그인을 하려면 회원가입을 해야한다.
        - DB를 만드는게 좋지 않을까
        - 파일업로드 기능
            1. 사용자가 서비스를 끝내면 json 파일로 떨어짐
            2. 속도는 느리지만, 보안측면에서는 안정적일 수 있다.
2. 레포지토리 파일을 불러와 파싱해서 수정하는 작업을 프론트, 서버 중 어디서 진행하면 좋을지
    - **답변**
        - 프론트에서는 에디터 위주 / 커넥션은 백이 해주는게 맞다.
        - 정상 동작일때는 프론트가 해도 아무문제가 없지만
        - 만약 깃허브 서버에 문제가 생겼다면, 프론트는 원인파악을 하는데 시간이 오래걸리거나, 잘못될 수 있다.
        - 프론트는 가능한 백만 바라보고 커넥션은 백이 하는 걸 추천
3. DB를 최대한 안쓰는게 좋은건지
    - **답변**
        
        테마끼리 전환이 자유로워서 데이터가 잘 이동이 된다면 불필요한 DB를 만들 필요는 없다.
        
        하지만 그 과정에서 어려움이 생긴다면 DB 만드는것도 괜찮다.
        
4. 사용자가 로컬에 node 설치 같은 환경세팅이 필요한데, 우리 서비스 측에서 해결해 줄 수 있는 방법이 없을지
    1. 웹 서비스에서 사용자 로컬에 접근해서 환경셋팅을 해주고 빌드까지 시킬 수 있는지
        - **답변**
            - 웹에서는 불가능하다.
            - 텍스트로 메뉴얼을 제공해주는게 좋다.
            - 로컬 접근은 시간이 너무 많이 들거라서 비추천
    2. 배치파일로 만들면 어떤지
        - **답변**
            - 윈도우는 블랙박스,,
                1. 파워셀이랑 초콜리티를 동시에 돌린다면 오류가 날 수 있다.

멘토링 진행