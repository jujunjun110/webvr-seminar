/* here you require original components. */
require('./component.js')

function main() {
    /* here you write main logic. */
    var words = ['hello', 'world', '!']
    words.forEach((v) => console.log(v))
}

document.addEventListener('DOMContentLoaded', function() {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})