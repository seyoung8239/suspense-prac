# suspense-prac 📕
React18에서 정식으로 지원하는 suspense기능을 연습하기 위한 Repo입니다.

## msw
service worker를 활용한 Mocking API, msw라이브러리를 활용했습니다.
context.delay() 메서드를 통해 통신 지연을 주었습니다.

## 참고자료
포스트 `https://blog.logrocket.com/react-suspense-data-fetching/`를 기준으로 작성했습니다. 

포스트에서 설명한 `render-as-you-fetch` 방식으로 구현했습니다.

## TODO
- 새로고침 문제 해결
- 다양한 data fetch 라이브러리와 연동하기 (Redux는 잘 안되는 듯 하다..)
