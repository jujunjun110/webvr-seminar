/* ここで自作コンポーネント群を読み込む */
require('./component.js')

function main() {
    // メインロジックを記述するところ
    var words = ['hello', 'world', '!']
    words.forEach((v) => console.log(v))
}

// A-Frameライブラリの確実な読み込みを待つ処理。変更不要。
document.addEventListener('DOMContentLoaded', function() {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})