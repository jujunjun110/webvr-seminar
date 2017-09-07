if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

/* here you write your components. */
AFRAME.registerComponent('my-component', {
    schema: {},
    multiple: false,
    init: function () {
        ['hello', 'component'].map((v) => console.log(v))
    },
    update: function (oldData) {},
    remove: function () {},
    // tick: function (t) { },
    pause: function () {},
    play: function () {}
})

