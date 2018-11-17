import $ from 'jquery'
import Animocon from './animocons/animocons.js'

class Slider {

    constructor () {
        this.$el = $('.header__container--slider')

        this.$slides = this.$el.children()
        this.$prevBtn = $('.header__controls .glyph-arrow-up')
        this.$nextBtn = $('.header__controls .glyph-arrow-down')

        this.numberSlides = this.$slides.length
        this.activeIndex = 0

        this.clone()
        this.next()

        this.registerEvents()
        this.addTransition()
    }

    registerEvents () {
        this.$prevBtn.on('click', this.prev.bind(this))
        this.$nextBtn.on('click', this.next.bind(this))
    }

    clone () {
        const $first = $(this.$slides[0])
        const $last = $(this.$slides[this.$slides.length - 1])

        let $clone = $last.clone()
        $clone.addClass('clone')
        $clone.insertBefore($first)

        $clone = $first.clone()
        $clone.addClass('clone')
        $clone.insertAfter($last)

        this.$slides = this.$el.children()
    }

    goto ($prev, $curr) {
        this.$el.css('transform', `translateY(${-this.activeIndex * 100}vh)`)

        $prev.removeClass('teaser--active')
        $curr.addClass('teaser--active')

        const isOverflowTop = this.activeIndex <= 0
        const isOverflowBot = this.activeIndex > this.numberSlides

        if (isOverflowTop || isOverflowBot) {
            this.overflow($prev, $curr, isOverflowTop ? this.numberSlides : 1)
        }
    }

    overflow ($prev, $curr, newActiveIndex) {
        setTimeout(() => {
            this.activeIndex = newActiveIndex
            this.$el.removeClass('header__container--transition')
            this.$slides.removeClass('teaser--transition')
            $curr.removeClass('teaser--active')
            this.$el.css('transform', `translateY(${-this.activeIndex * 100}vh)`)
            $(this.$slides[this.activeIndex]).addClass('teaser--active')
            this.addTransition()
        }, 700)
    }

    addTransition () {
        setTimeout(() => {
            this.$el.addClass('header__container--transition')
            this.$slides.addClass('teaser--transition')
        }, 100)
    }

    next () {
        const $prev = $(this.$slides[this.activeIndex])
        const $curr = $(this.$slides[++this.activeIndex])
        this.dir = 'bot'

        return this.goto($prev, $curr)
    }

    prev () {
        const $prev = $(this.$slides[this.activeIndex])
        const $curr = $(this.$slides[--this.activeIndex])
        this.dir = 'top'

        return this.goto($prev, $curr)
    }

}

export default new Slider()
