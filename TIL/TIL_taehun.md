## TIL
##10-17(��)
[https://bumikim.netlify.app/how-to-build-a-blog-using-jekyll](https://bumikim.netlify.app/how-to-build-a-blog-using-jekyll) <<< ������ ����Ʈ

jekyll �׸� ���� + netrify�� ���� ����� ��α� ����

[https://endearing-pastelito-4f82c7.netlify.app/](https://endearing-pastelito-4f82c7.netlify.app/)  <<< ������ ����Ʈ (�׸� ������ ����� �ȵǼ� �̻��ϰԳ���)

1. �ϴ� jekyll �̿��Ϸ��� ruby�� ��ġ�ؾ��ϴµ� �̰ź��� ���ŷο���. << ��ġ�� 64��Ʈ�� ��ġ�ϸ� �ȵȴٳ�. �� ���� �� ��ư ������ ���ÿ� ruby ��ġ�� �����ұ�? �ȵǸ� ��ġ���� ����Ʈ�� �ȳ��ص� ����
2. Netlify�� �Ἥ �������ε� ������ ����� �����. ��� github������ �������־ ������������� �ڵ����� ���ش�. �� ��������� �ٷιٷ� ����Ǵ°� jekyll�� ���� ������ ������. ������Ʈ ��밨�� �־ ���� �̷��� �� �𸣰���.
3. �׸������� ������� �ȵȴ�.. �츮�� ��ȹ�ϴ� ���񽺿��� jekyll �׸� ���ø��� �󸶳� ������ �� �𸣰����� ���� �ʾƺ��� �� �׳� ���� ���Ѱ� ���� ����. �ٵ� jekyll�� ������ Ŀ���Ұ� �׸������� ������̶��ؼ� �̰� �츮�� ��� �غ����ֳİ� �����ϵ�?

������ �� netrify�� �츮�� �����Ϸ��� ���¼ҽ� ���񽺿� ���������� �����ϳ�, �ѱ��� �������� ģȭ������ �ʰ� �츮�� ���� �����Ϸ��� ��ɿ����� ���̰� �ֱ���. netrify�� ��� ���� jekyll�� ���� ������Ʈ �� 1~2�� �ɸ��� ������ ����.

�츮 Ȩ�������� ������� ���� �����ϰ�, ���������� � ��ư�� ������ ������ ������� ���� cmd�� ������ �� ������ ����� ������Ʈ�� ���� �����ϴٰ� ��. �ٵ�, �����Ѱ�? ����� ���� cmd�� �츮�� ���ϴ� ������ �������� Ȯ���غ��� �ҵ�. �̰� �ƴϸ� � ������� ����� ���� �� ���ϵ��� ������ �� ������?

������� jekyll�� �ʱ� �ڵ带 �������ִ� jekyll new . ���� ��ɾ � ��ư�� ������ ����� cmd���� ��������ִ°�.

�츮 ���������� �����Ϳ��� �ۼ��� ������ ������ ��ư�� ������ �� ����� �������丮�� �� �Ѿ�� ����� ����� ��αװ� ���Ž�Ű�� ��.

##10-17(ȭ)
### [Get a repository content](https://docs.github.com/en/rest/repos/contents#get-repository-content) << ���� �´� api

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0017acb-be61-459a-a657-23a74161ccb5/Untitled.png)

- �������� ���ϴ� ����� ���ϵ��� �������� api. md ������ ��� sha�� ���ڵ��ؼ� ���� �Ѿ�´�.
- �׽�Ʈȭ�� �� test�������� [1](http://1.md),2,3 md������ ���� �׽�Ʈ�غô�. �ش� �������� �����ϴ� ���ϵ��� �� �Ѿ���� ���� Ȯ���� �� �־���.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec109b38-a1ec-493c-910f-58666432881f/Untitled.png)

### [Get a repository](https://docs.github.com/en/rest/repos/repos#get-a-repository)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7318bcac-0c0d-41e0-8cd4-5722e4057b78/Untitled.png)

- �������丮�� �����ؼ� �������� api�� �����ϴ� �� ������ response�� ���� �� url�� �̷�����ִ�. postman���� �׽�Ʈ �غ��� �� ��.
- ����Ʈ�� �׽�Ʈ : ���Ĺ��� response�� �ٸ��ž��� url�� �����ش�.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3230e29a-5dd0-47b1-b805-db833caffc5b/Untitled.png)

### [Get a project](https://docs.github.com/en/rest/projects/projects#get-a-project)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c737e133-33dc-4394-accd-4ffb97fb1468/Untitled.png)

- �������丮�� �ƴ� ������Ʈ�� �������� api. �׽�Ʈ �غ����� ���

## �ؿ� �ΰ��� README�� �о����.. �̸� �ٲ�� ���о���

### [Get a repository README](https://docs.github.com/en/rest/repos/contents#get-a-repository-readme)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/831d7fb5-3cc8-461b-9258-22df9ce810b6/Untitled.png)

- �������丮 �� README�� �������� api. readme ���� �о���� ����
- �׽�Ʈ ��� ���ڵ��� ������ �Ѿ�����ص� ���ڵ��ϸ� �߳���

### [Get a repository README for a directory](https://docs.github.com/en/rest/repos/contents#get-a-repository-readme-for-a-directory)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d058231-cf8a-4cd8-9d52-bad55ce7c93f/Untitled.png)

- ������ �� �������� README�� �������� api.