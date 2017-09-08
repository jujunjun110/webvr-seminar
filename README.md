# WebVR Seminor

## プロジェクトのインストール

1. git clone
2. npm install

## プロジェクトのビルド

1. npm run build ... アプリケーションをビルドします。
2. npm run dev ... nodeサーバーを開きアプリケーションを実行します。`src/app.js` への変更はリアルタイムにブラウザ側に反映されます。

## ファイル構成

- src以下 ... 自分でjavascriptを編集するところ。
	- src/require.js ... 必要な外部モジュールを書くところ。dev/build.jsにビルドされます。
	- src/app.js ... メイン処理を書くところ。dev/app.jsにビルドされます。ES6でOK。
	- src/component.js ... コンポーネントを書くところ。書いたら名前を変えてapp.js内でrequireする。ES6でOK。

- dev以下 ... アプリケーションの実行に本当に必要なファイルだけがあるところ。（開発用）
	- dev/index.html ... メインのHTMLファイル。ここは直接編集します。
	- dev/app.js ... ブラウザで実行可能な1ファイルにビルドされた自作スクリプト群。**自分では編集しません**。
	- dev/build.js ... ブラウザで実行可能な1ファイルにビルドされた外部スクリプト群。**自分では編集しません**。

`npm run build` することで `src/require.js` が `dev/build.js` に、 `src/app.js` が `dev/app.js` にそれぞれビルドされます。

アプリケーションでnpmモジュールを利用したいときは `npm install -S {packagename}`としてインストールしたのち、
`src/require.js` に `require("{packagename}")` の一行を追加しましょう

## プログラム内容

### 第一部 今日触るもろもろについての解説

- VRについて
	- VRとは
	- Web VRとは
	- A-Frameとは

- JavaScriptの開発環境について
	- ES6 (ECMAScript)
	- npm
	- browserify, babel
	- src以下（編集エリア）
		- ES6のモダンな文法が使える
		- モジュール管理（別ファイルのrequire, import）ができて見通しやすい
	- dev以下（実行用エリア）
		- browserify によって2ファイルにまとまっているので転送速度的に有利
		- babel によって、古いブラウザへの対応が可能

### 第二部 A-Frame を触ってみる

1. プロジェクトを実行しよう
	- git clone
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
	- 視線が外れたら元の色に戻るようにしてみよう

























