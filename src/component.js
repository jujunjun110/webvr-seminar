/* A-Frameライブラリの読み込みを確認する処理。変更不要。 */
if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

/* 以下自作コンポーネントの定義 */
AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function() {
        /* コンポーネントの初期化時に一度だけ呼ばれる関数 */
        /* ここに移動などの処理を書いてみよう */
    },

    // コンポーネントのプロパティが変更された時に呼び出される関数
    // update: function() {
    // 
    // },

    // 毎フレームごとに呼び出される関数
    // tick: function() { 
    // 
    // },
})