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
