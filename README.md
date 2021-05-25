# Youtube-react

Read this in other languages: [한국어 🇰🇷](README.ko.md)

You can try this app, click below badge!
</br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)](https://musing-khorana-85bd76.netlify.app/)

<img width="900" height="450" src="public/images/mainUI.png">

## ⭐️ 機能

- React と Youtube Data API を利用して，Youtube サイト作成
- 実現した機能
  - 人気動画表示
  - 検索
  - 再生

## 🦄 言語とツール

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

## 📚 ライブラリとリソース，API

- [Youtube Data API](https://developers.google.com/youtube/v3): Youtube の人気動画と検索動画の情報を取得
- [axios](https://github.com/axios/axios): Youtube API データの fetch
- [unescape](https://github.com/jonschlinkert/unescape): 変換されなかった予約語を記号に変換
- [Font-Awesome](https://github.com/FortAwesome/Font-Awesome): 各種アイコン

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 Project で新しく勉強した事

### React Hooks

- React Component は 2 種類: Class Component と Function Component
- Function Component は Class Component と異なり，re-rendering の際に変数や関数を再定義
  → State, Props, Lifecycle 管理が困難
- そこで登場したのが[React Hooks](https://reactjs.org/docs/hooks-intro.html)
- useState(), useCallback(), useRef(), useEffect()を使用
- React Hooks を利用して開発する長所
  - this keyword を使用しない → this 関連のミスを抑えられる，可読性も上がる
  - lifecycle 管理もより簡単

### Denpendancy Injection

> In software engineering, dependency injection is a technique in which an object receives other objects that it depends on. - [Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection)

- 単体テストの効率化
- 特定のオブジェクトへの依存度を低下 → コードの再利用が用意
- 本プロジェクトでは Youtube API でデータを読み込む機能を分離し，Component に注入

### .env で環境変数管理

> An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. - [Wikipedia](https://en.wikipedia.org/wiki/Environment_variable)

- 環境変数には API key のように公開してはならない情報もある
- Node.js では.env ファイルで環境変数を管理
- .env は repository にセーブしないため，Netlify などで deploy するためには環境変数を新たに設定
  [Build environment variables](https://docs.netlify.com/configure-builds/environment-variables/?_ga=2.16342838.1011166816.1621828766-787042033.1618744237)
- [React の環境変数管理](https://create-react-app.dev/docs/adding-custom-environment-variables/)

### Postman

- API 通信テストと fetch コード自動生成などが可能
- [https://www.postman.com/](https://www.postman.com/)

## 🐛 改善の必要な部分

- channel thumnail の表示
- レスポンシブウェブデザイン
