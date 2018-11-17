import $ from 'jquery'

const gaTrack = {

    selector : '[data-ga]',

    init : function () {
        this.$el = $(this.selector)

        this.registerListeners()
    },

    registerListeners : function () {
        this.$el.on('click', this.track.bind(this))
    },

    track : function (event) {
        if (!window.ga) return

        const $target = $(event.currentTarget)

        const args = $target
            .data('ga')
            .split('#')
            .map(arg => arg.trim())

        /*
         * [0] = Category
         * [1] = Action
         * [2] = Label
         */
        window.ga('send', 'event', args[0], args[1], args[2])
    },

}

export default gaTrack.init.bind(gaTrack)
