# Youtube-react

Read this in other languages: [日本語 🇯🇵](README.md)
</br>
You can try this app, click below badge!

[![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)](https://musing-khorana-85bd76.netlify.app/)

<img width="900" height="450" src="public/images/mainUI.png">

## ⭐️ 기능

- React와 Youtube Data API를 이용해 Youtube 사이트 클론
- 구현한 기능
  - 인기 영상 표시
  - 검색
  - 재생

## 🦄 사용 언어와 툴

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
 </p>

## 📚 사용 라이브러리와 리소스, API

- [Youtube Data API](https://developers.google.com/youtube/v3): Youtube의 인기 영상과 검색 영상 취득
- [axios](https://github.com/axios/axios): Youtube API 데이터 fetch
- [unescape](https://github.com/jonschlinkert/unescape): 변환되지 않은 예약어를 기호로 변환
- [Font-Awesome](https://github.com/FortAwesome/Font-Awesome): 각종 아이콘

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 Project에서 새로 배운 것들

### React Hooks

- React Component은 2종류: Class Component와 Function Component
- Function Component는 Class Component와 다르게, re-rendering될 때 변수나 함수를 재정의
  → State, Props, Lifecycle 관리가 어려움
- 그래서 등장한 것이 [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- useState(), useCallback(), useRef(), useEffect()를 사용
- React Hooks를 이용해 개발하는 장점

  - this keyword를 사용하지 않음 → this 관련의 실수를 억제, 가독성도 향상
  - lifecycle 관리도 보다 간단

### Denpendancy Injection

> In software engineering, dependency injection is a technique in which an object receives other objects that it depends on. - [Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection)

- 효율적인 유닛 테스트
- 특정 오브젝트에의 의존성을 낮춤 → 코드 재사용성 향상
- 본 프로젝트에서는 Youtube API로 데이터를 읽는 기능을 분리해, Component에 주입

### .env로 환경 변수 관리

> An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. - [Wikipedia](https://en.wikipedia.org/wiki/Environment_variable)

- 환경 변수에는 API key 와 같은 공개해서는 안되는 정보도 포함
- Node.js에서는 .env파일에 환경 변수를 관리
- .env는 repository에 저장하지 않기 때문에 Netlify 등으로 배포할 때는 환경 변수를 따로 설정
  [Build environment variables](https://docs.netlify.com/configure-builds/environment-variables/?_ga=2.16342838.1011166816.1621828766-787042033.1618744237)
- [React의 환경 변수 관리](https://create-react-app.dev/docs/adding-custom-environment-variables/)

### Postman

- API 통신 테스트와 fetch 코드의 자동 생성 등이 가능
- [https://www.postman.com/](https://www.postman.com/)

## 🐛 개선 예정

- channel thumbnail의 표시
- 반응형 디자인
