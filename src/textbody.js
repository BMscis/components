import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
function drawTextbody() {
    var rect1 = document.createElement('div')
    rect1.setAttribute('id', 'textbody')
    document.getElementById('p1a').appendChild(rect1)

    function heading(text) {
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'middle',
            size: '5vmin',
            family: ' ACBlack',
            fill: 'BLACK'
        }).attr({
            x: '-100%',
            y: '15.98%',
            id: 'headingtext'
        })
        anime({
            targets: '#headingtext',
            translateX: '150%',
            duration: 3000
        })

    }
    function text(text) {
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'middle',
            size: '3vmin',
            family: ' ACBlack',
            fill: 'GRAY'
        }).attr({
            x: '50%',
            y: '15.98%',
            id: 'headingtext',
            opacity: 0
        })
        heading.animate({
            duration: 2000,
            delay: 1000,
            when: 'now',
            swing: true,
            times: 1,
            wait: 200
        }).attr({ opacity: '1' })
        heading.animate({
            duration: 2000,
            delay: 1000,
            when: 'after',
            swing: false,
            times: 1,
            wait: 200
        }).attr({ opacity: '0.5' })

    }
    heading('Hello!')
    text('Welcome to the espii club.')
}
export {drawTextbody}