# Gatsby 학습

> 참고자료
> 

**github pages 배포**

[Github Action으로 Jekyll & Github Pages 배포 자동화 하는 방법](https://deeplify.dev/tools/git/github-pages-github-action)

[Web: React 프로젝트 Github Pages로 배포하기](https://medium.com/hcleedev/web-react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-github-pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-f62e59a2e210)

**Nestlify-cms**

[https://github.com/netlify/netlify-cms](https://github.com/netlify/netlify-cms)

**Gatsby 플러그인**

[Gatsby Plugin Library | Search 3,000+ Plugins | Gatsby](https://www.gatsbyjs.com/plugins)

**Gatsby 블로그 테마**

[Starters Library | Gatsby](https://www.gatsbyjs.com/starters/)

## Gatsby 블로그 만들기

[Gatsby 테마로 GitHub Blog 만들기](https://www.zoomkoding.com/gatsby-github-blog/)

---

1. Github Repository 생성
   
    ![스크린샷 2022-10-13 오전 12.43.23.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.43.23.png)
    
    1. New repository → import a repository
    2. `**Your old repository’s clone URL**` 에 gatsby 테마가 있는 repository 주소 넣기.
    3. **Repository명은 꼭 [GitHubID].github.io**
       
        ![스크린샷 2022-10-13 오전 12.47.19.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.47.19.png)
        
    4. 알아서 이런 것들이 생김. 
       
        ![스크린샷 2022-10-13 오전 12.48.57.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.48.57.png)
        
        ![스크린샷 2022-10-13 오전 12.49.04.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.49.04.png)
        
    5. 리액트 기반 맞넹
       
        ![스크린샷 2022-10-13 오전 12.52.12.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.52.12.png)
        

1. 생성 후 clone → node_modules 설치 (`npm install`)
2. 배포: github-pages 사용
   
    ```java
    **npm install gh-pages --save-dev
    // 모듈 & gh-pages 둘 다 설치 안돼서, --legacy-peer-deps 붙여 설치
    
    // 설치 후,
    
    {
      "scripts": {
        "deploy": "gatsby build && gh-pages -d public" // 추가
      }
    }
    
    // 를 package-lock.json 에 추가하라고 했는데, 이미 추가되어 있음.**
    ```
    
    1. **"@emotion/react", "@emotion/styled"에 설치 문제 → `--force`나 `--legacy-peer-deps` 해결 봤으나, 작동에 오류 있지 않을까 싶음.**
    
    ![스크린샷 2022-10-13 오전 1.09.25.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_1.09.25.png)
    
3. github repository → settings → pages → Build and deployment → branch를 master에서 gh-pages로 변경해주기. 
4. [github ID].github.io 접속 및 블로그 생성 완료
5. md 파일
   
    ![스크린샷 2022-10-13 오전 9.26.23.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_9.26.23.png)
    

---

### Gatsby 결론

1. 확실히 jekyll보다 훨씬 빠르다. 
2. react 기반으로 제작  → 화면 레이아웃 설계 시 훨씬 편할 것 같긴 한데 … 
3. 중요한 건 배포 프로그램인 Netlify가 될 듯.

---

### 이 모든 과정을 한 번에 단축 → Netlify

- 정말 버튼 한 번에 오류없이 배포까지 완료됨.
- 추가금 내고 domain, https 보안 까지 해줌.

1. 사이트 내 테마 변경 및 에디터까지는 제공하지 않는 것 같음. 
2. github repo cloen 해서, 내용 변경 후, push → 자동 배포. 약 3분 소요됨. 
   
    ![스크린샷 2022-10-13 오전 1.39.02.png](Gatsby%20%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%208f3692357c4a4eb3b871f7c4b4443f71/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-10-13_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_1.39.02.png)
    
1. Netlify와 차별점을 두려면 테마 변경, 에디터까지 제공해줘야 할 것 같음.

---

### Netlify를 통한 쉬운 배포

Netlify를 배포 도구로 정하고 실제로 적용하고 배포를 해보니 이전 배포 조합인 Jekyll + Github Pages보다 좋았던 점이 있었습니다!

우선은 배포하고 나서 진행 과정이 어떻게 되고 있는지를 한눈에 살펴볼 수 있어 좋았습니다. Jekyll + Github Pages의 경우에는 master branch에 PR을 요청하고 Merge가 되면 자동 배포가 되었는데요. 만약 빌드 에러가 나게 된다면 어디서 에러가 났는지 찾기 어려웠고 또 언제 배포가 되는지 시점을 알 수 없었습니다. 계속 ctrl + shift + r을 누르며 언제 배포되나 항상 기다리던 시간이 많았습니다 😂

하지만 Netlify의 경우 Deploy Previews를 통해 빌드 및 배포 완료 시점을 알 수 있었고 Deploy summary, Deploy Log, Deploy Activity 등 빌드와 배포와 관련된 내용을 시각적으로 쉽게 확인할 수 있어서 좋았습니다! 또한, Deployy Cancel, Retry Deploy, Clear cache and retury Deploy 등 여러 기능을 제공해주어서 조금 더 편리하게 배포를 진행할 수 있었습니다.

[올리브영 테크블로그 Gatsby 전환&개발기 | 올리브영 테크블로그](https://oliveyoung.tech/blog/2022-07-04/How-to-Develop-And-Migration-Blog-With-Gatsby/)

---

[https://github.com/netlify/netlify-cms](https://github.com/netlify/netlify-cms)

- 여기다 기능 추가