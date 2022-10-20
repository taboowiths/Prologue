## **Create Repository**

[POST]https://api.github.com/user/repos <br>
Authorization: Bearer <YOUR-TOKEN>

개인 토큰 필요.
OAuth를 통해 access-token 사용해도 가능할 것 같음.
대신 Scope에 repo를 반드시 넣어줘야함.

Body <br>
{<br>
name(Required) <br>
.<br>
.<br>
}

---

## **Get Repository**

[GET]https://api.github.com/users/{USERNAME}/repos

퍼블릭 저장소만을 가져오기 때문에 토큰값 필요 X

---

## **Git action을 활용한 블로그 자동 배포**

1. access token 생성 <br>
2. repository secrets 생성
3. work flows 생성

### **1. Personal Access Token 생성**

`Profile Settings` → `Developer Settings` → `Personal access token`

scope 설정 시 `repo` 설정

### **2. Secret 추가**

블로그 repo 이동 → `repository Settings` → `Secrets` → **New repository secret 버튼 클릭**

**Name**에 사용자 정의 이름 설정

**Value**에는 생성한 PAT 토큰 입력

### 3. **workflow 생성**

블로그 repo 이동 → Actions → New workflow 클릭 → [set up a workflow yourself](https://github.com/seokchain/seokchain.github.io/new/main?filename=.github%2Fworkflows%2Fmain.yml&workflow_template=blank) 클릭

아래의 yml 코드 작성

```YAML
on:
  push:
    branches:
      - main
name: build gatsby
jobs:
  build_gatsby:
    name: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1

      - name: yarn install
        run: yarn install

      - name: gatsby build
        env:
          GH_API_KEY: ${{ secrets.TOKEN }}
        run: yarn build

      - name: deploy
        uses: peaceiris/actions-gh-pages@v2
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
          PUBLISH_BRANCH: deploy
          PUBLISH_DIR: ./public
```
