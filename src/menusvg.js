import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
import mv from '@google/model-viewer'
import envHdri from './assets/3d/studio024.hdr'
import coa from './assets/3d/C2.glb'
import ec from './assets/svg/ec2XL.svg'
//header 5vmin
//paragraph 3vmin
//navbar 3.5vmin
//menubar 3.2vmin
function pOne() {
    var p1 = document.createElement('div')
    p1.classList.add('p1')
    p1.setAttribute('id', 'p1')
    document.body.appendChild(p1)
}
function drawNavbar() {
    pOne()
    var rect = document.createElement('div')
    rect.setAttribute('id', 'navbar')
    document.body.appendChild(rect)
    var ecVg = document.createElement('img')
    ecVg.setAttribute('src', ec)
    rect.appendChild(ecVg)
    function menuIcon() {
        var draw = SVG().addTo('#p1').size('15vmin', '15vmin').attr({
            id: 'menuicon'
        })
        var drawline = draw.path('M10 15 L40 15 Z M10 25 L40 25 Z M10 35 L40 35').stroke({
            color: "#19518c",
            width: 3,
        })
        drawline.mouseover(function () {
            drawline.stroke({
                color: 'whitesmoke'
            })
            drawline.css('cursor', 'pointer')
        })
        drawline.mouseout(function () {
            drawline.stroke({
                color: '#19518c'
            })
        })

    }

    function navText(text, clr) {
        var draw2 = SVG().addTo('#navbar').size('24vmin', '10vmin')
        var graphictext = draw2.text(text).attr({
            fill: clr,
            y: '44.49%',
            x: '50%'
        })
        graphictext.css('cursor', 'pointer')
        graphictext.mouseover(function () {
            graphictext.fill('#F44336')
        })
        graphictext.mouseout(function () {
            graphictext.fill(clr)
        })
        graphictext.font({
            anchor: 'middle',
            size: '2.5vmin',
            family: 'ACBoldSemiCn'
        })
        window.addEventListener('resize', e => {
            console.log(draw2.width())
            if (window.screen.width < 600) {
                graphictext.font({
                    size: '50%'
                })

            }
            else {
                graphictext.font({
                    size: '70%'
                })
            }
        })
    }
    menuIcon()
    navText('Graphic Design', '#1a78d9')
    navText('3D Design', '#1a78d9')
    navText('Web Development', '#1a78d9')

}
function drawTextbody() {
    var rect1 = document.createElement('div')
    rect1.setAttribute('id', 'textbody')
    document.getElementById('p1').appendChild(rect1)

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
function drawVisualpad() {
    var rect2 = document.createElement('div')
    rect2.setAttribute('id', 'visualpad')
    document.getElementById('p1').appendChild(rect2)

    // var draw = SVG().addTo('#visualpad').attr({
    //     x: 0,
    //     y: 0,
    // })
    // draw.css('width','clamp(40ch, 50%, 80ch)')
    // draw.css('height','clamp(55ch, 50%, 80ch)')
    // // function rectSizereturn() {
    // //     if (window.screen.width <= 600) {
    // //         return '70%'
    // //     }
    // //     else {
    // //         return '40%'
    // //     }
    // // }
    // // function rectCenter() {
    // //     if (window.screen.width <= 600) {
    // //         return '15%'
    // //     }
    // //     else {
    // //         return '30%'
    // //     }
    // // }
    // // function rectsize() {
    // //     if (window.screen.width <= 600) {
    // //         console.log('true')
    // //         rect.width('70%')
    // //         rect.x('15%')
    // //     }
    // //     else {
    // //         rect.width('40%')
    // //         rect.x('30%')
    // //     }
    // // }
    // function rectsize(){
    //     rect.css('height','100%')
    //     rect.css('width','100%')

    // }
    // // var rect = draw.rect('100%','100%').attr({
    // //     fill: '#1A78D9',
    // //     rx: 10,
    // //     ry: 10,
    // // })
    // // rect.css('margin','auto')
    // var circle = draw.circle('20%', '20%').attr({
    //     fill: '#30D975',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle2 = draw.circle('10%', '15%').attr({
    //     fill: '#1A78D9',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle3 = draw.circle('5%', '5%').attr({
    //     fill: '#C8D945',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle4 = draw.circle('25%', '20%').attr({
    //     fill: '#1A78D9',
    //     cx: '50%',
    //     cy: '50%',
    //     id: 'circletransform',
    // })
    // circle4.css('transform-origin', 'center')
    // anime({
    //     targets: '#circletransform',
    //     scale: 0.125,
    //     delay: 2000,
    //     duration: 8000

    // })

}
function drawDisplaypad() {
    var p2 = document.createElement('div')
    p2.classList.add('p2')
    p2.setAttribute('id', 'p2')
    document.body.appendChild(p2)
}
function threeDscene() {
    var modelV = document.createElement('model-viewer')
    modelV.setAttribute('src', coa)
    modelV.style.width = 'clamp(200px, 50%, 500px)'
    modelV.style.height = 'clamp(300px, 50%, 1000px)'
    modelV.style.margin = 'auto'
    modelV.setAttribute('camera-controls', '')
    modelV.setAttribute('auto-rotate', '')
    modelV.setAttribute('shadow-intensity', '4')
    modelV.setAttribute('shadow-softness', '0')
    modelV.setAttribute('field-of-view', '50')
    modelV.setAttribute('max-field-of-view', '50deg')
    modelV.setAttribute('environment-image', envHdri)
    document.getElementById('p2').appendChild(modelV)
}
export { drawTextbody }
export { drawNavbar }
export { drawVisualpad }
// export { threeDscene }
export { drawDisplaypad }

