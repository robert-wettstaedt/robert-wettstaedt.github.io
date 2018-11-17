import $ from 'jquery'
import animocons from './animocons.min'

class Animocons {

    constructor() {
        this.$el = $('[animocons]')

        ;
        [].map.call(this.$el, this.init)
    }

    init(element) {
        const $element = $(element)
        const icon = element.children[0]
        const type = $element.attr('animocons')

        const tweens = defaults(type, element, icon)
        const timeline = new animocons.Timeline()
        tweens.map((tween) => timeline.add(tween))
        $element.on('click', () => timeline.start())
    }

}

export default new Animocons()

function defaults(type, element, icon) {
    const d = {
        'arrow-up': [
            // burst animation
            new animocons.Burst({
                parent: element,
                duration: 1700,
                shape: 'circle',
                fill: '#db5156',
                x: '50%',
                y: '50%',
                opacity: 0.6,
                childOptions: { radius: { 15: 0 } },
                radius: { 30: 90 },
                count: 6,
                isRunLess: true,
                easing: animocons.easing.bezier(0.1, 1, 0.3, 1)
            }),
            // ring animation
            new animocons.Transit({
                parent: element,
                duration: 700,
                type: 'circle',
                radius: { 0: 60 },
                fill: 'transparent',
                stroke: '#db5156',
                strokeWidth: { 20: 0 },
                opacity: 0.6,
                x: '50%',
                y: '50%',
                isRunLess: true,
                easing: animocons.easing.sin.out
            }),
            // icon scale animation
            new animocons.Tween({
                duration: 1200,
                onUpdate: function(progress) {
                    if (progress > 0.3) {
                        const elasticOutProgress = animocons.easing.elastic.out(1.43 * progress - 0.43);
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                    } else {
                        icon.style.WebkitTransform = icon.style.transform = 'scale3d(0,0,1)';
                    }
                }
            })
        ]
    }
    d['arrow-down'] = d['arrow-up']

    return d[type]
}
