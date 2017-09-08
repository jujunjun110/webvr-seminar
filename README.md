# WebVR セミナー資料

## プロジェクトのインストール

1. `git clone git@github.com:jujunjun110/webvr-seminar.git`
2. `npm install`

## プロジェクトのビルド

1. `npm run build` ... アプリケーションをビルドします。
2. `npm run dev` ... nodeサーバーを開きアプリケーションを実行します。`src/app.js` への変更はリアルタイムにブラウザ側に反映されます。

## ファイル構成
![dir](https://user-images.githubusercontent.com/4201520/30205376-915178d6-94c3-11e7-96fe-009e22d9d434.png)

- src以下 ... 自分でjavascriptを編集するところ。
	- src/require.js ... 必要な外部モジュールを書くところ。dev/build.jsにビルドされます。
	- src/app.js ... メイン処理を書くところ。dev/app.jsにビルドされます。ES6でOK。
	- src/component.js ... コンポーネントを書くところ。書いたら名前を変えてapp.js内でrequireする。ES6でOK。

- dev以下 ... アプリケーションの実行に必要なファイルがビルドされるところ。
	- dev/index.html ... メインのHTMLファイル。ここは直接編集します。
	- dev/app.js ... ブラウザで実行可能な1ファイルにビルドされた自作スクリプト群。**自分では編集しません**。
	- dev/build.js ... ブラウザで実行可能な1ファイルにビルドされた外部スクリプト群。**自分では編集しません**。

`npm run build` することで `src/require.js` が `dev/build.js` に、 `src/app.js` が `dev/app.js` にそれぞれビルドされます。

アプリケーションでnpmモジュールを利用したいときは `npm install -S {packagename}`としてインストールしたのち、
`src/require.js` に `require("{packagename}")` の一行を追加しましょう

## 今日の流れ

**[重要]**

※ 話を聞きながら、ファイルのダウンロードを進めて下さい！

↓ 適当なディレクトリ（例えば ~/Documents/ など）で 

`git clone git@github.com:jujunjun110/webvr-seminar.git`

`git clone git@github.com:jujunjun110/aframe-pong.git`

### 第一部 今日触るもろもろについての解説(10分くらい)

![image](https://user-images.githubusercontent.com/4201520/30205477-d75270f6-94c3-11e7-9390-e380f190ff72.png)

1. VRについて
	- VRとは
	- Web VRとは
	- A-Frameとは
		- Three.js


2. 今回使うJavaScriptの開発環境について
	- ES6 (ECMAScript)
	- npm
	- browserify, babel

### 第二部 A-Frame を触ってみる

1. プロジェクトを実行しよう
	- git clone git@github.com:jujunjun110/webvr-seminar.git
	- cd webvr_seminar
	- npm install
	- npm run build
	- npm run dev
1. スマートフォンでVRを体験しよう
	- PCとスマホで同じLAN(Wifi)に接続
	- PCのアドレスバーのIPアドレスにスマホのブラウザでアクセス
1. HTMLからオブジェクトをいじってみよう
	- 解説: Entity Component System
	- dev/index.html を編集する
	- a-boxのポジションや色を変えてみよう
	- a-boxの隣に青い球体を作ってみよう
	- スマホからも確認してみよう
1. コンポーネントを作成しよう
	- src/component.js を編集する
	- 1秒ごとに上へ0.01単位移動するようにしよう
		- ヒント: オブジェクト自体は`this.el`で取得できる
		- ヒント: オブジェクトの現在位置はオブジェクトの`position`属性で定義されている
	- なめらかに上へ移動するようにしよう
		- ヒント: tick() 関数はフレームごとに実行される関数
	- ある程度上下にいったら戻ってくるようにしよう
	- 移動スピードをHTMLから指定できるようにしてみよう
		- ヒント: プロパティはHTML属性として渡してこれる
		- ヒント: 渡ってきたプロパティは`schema`部で定義して`this.data`で取得できる
1. コンポーネントを組み合わせて複雑なことを実現しよう
	- オブジェクトに視線が当たったら色が変わるようにしてみよう
		- ヒント: raycaster コンポーネントを利用する
		- ヒント: イベントリスナーを利用する
	- 視線が外れたら元の色に戻るようにしてみよう


### 第三部 VRゲームを作る

1. 雛形プロジェクトのインストールとビルド
	- git clone git@github.com:jujunjun110/aframe-pong.git
	- cd aframe-pong
	- git checkout webvr_seminar
	- npm install
	- npm run build
	- npm run dev
2. プレイヤーを動かせるようにしてみる
	- src/player-mover.js を編集し、プレイヤーが視線に沿って動くようにする
	- ヒントはソースコード上
3. ボールを動くようにしてみる
	- src/ball.js を編集し、ボールがゲーム開始時に動き出すようにする
	- ヒントはソースコード上
	- 完成！！	
