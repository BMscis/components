import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
import bg from './assets/svg/bg.svg'
function drawer() {
    var symbols = SVG().addTo('#b1').size().attr({
        id: 'content'
    })
    symbols.css('width', '50%')
    
    function menuBar() {
        var menuBar = symbols.rect().attr({
            fill: 'whitesmoke',
            rx: '10px',
            ry: '10px',
            opacity: 0.5,
            y: 0,
            id: 'menublock'
        })
        menuBar.css('position', 'fixed')
        menuBar.css('transition', 'fill 0.5s ease')

        window.addEventListener('scroll', e => {
            if (window.scrollY / window.innerHeight > 0.4) {
                menuBar.attr({
                    fill: '#F44336'
                })
            }
            else {
                menuBar.attr({
                    fill: 'whitesmoke'
                })
            }
        })
        return menuBar
    }
    function drawLine() {
        var drawline = symbols.path('M10 15 L40 15 Z M10 25 L40 25 Z M10 35 L40 35').stroke({
            color: "#19518c",
            width: 7,
        }).attr({
            id: 'drawline'
        })
        drawline.css('transition', 'color 0.5s ease')
        window.addEventListener('scroll', e => {
            if (window.scrollY / window.innerHeight > 0.4) {
                drawline.stroke({
                    color: '#c9d946'
                })
            }
            else {
                drawline.stroke({
                    color: '#19518c'
                })
            }
        })
        drawline.click(function () {
            var mB = document.getElementById('menublock')
            if (mB.classList.contains('active')) {
                symbols.css('height','fit-content')

                anime({
                    targets: '#menublock',
                    translateX: '-1000px'
                })
                anime({
                    targets: '#txt',
                    translateY: '-70%',
                    easing: 'easeInOutSine',
                    duration: 800
                })
                anime({
                    targets: '#drawline',
                    d: 'M10 15 L40 15 Z M10 25 L40 25 Z M10 35 L40 35'
                })
                mB.classList.remove('active')
            }
            else {
                symbols.css('height','-webkit-fill-available')

                anime({
                    targets: '#menublock',
                    translateX: '0px'
                })
                anime({
                    targets: '#txt',
                    translateY: '70%',
                    easing: 'easeInOutSine',
                    duration: 800
                })
                anime({
                    targets: '#drawline',
                    d: 'M10 15 L40 35 Z M10 35 L40 15'
                })
                mB.classList.add('active')
            }
        })
        return drawline
    }
    function menuText(txt, Y) {
        var tXt = symbols.text(txt).font({
            anchor: 'middle',
            size: '2.1vmin',
            family: 'ACBoldSemiCn',
        }).attr({
            id: 'txt',
            x: '10vw',
            y: Y,
        })
        tXt.css('cursor', 'pointer')
        tXt.mouseout(function () {
            tXt.attr({
                fill: 'black'
            })
        })
        tXt.mouseover(function () {
            tXt.attr({
                fill: '#f44236'
            })
        })

        return tXt
    }
    function infoText(txt, Y) {
        var tXt = symbols.text(txt).font({
            anchor: 'middle',
            size: '2.1vmin',
            family: 'ACBoldCondIt',
        }).attr({
            id: 'txt',
            x: '5vw',
            y: Y,
        })
        tXt.css('cursor', 'pointer')
        tXt.mouseout(function () {
            tXt.attr({
                fill: 'black'
            })
        })
        tXt.mouseover(function () {
            tXt.attr({
                fill: '#19518c'
            })
        })

        return tXt
    }
    function navText(text, clr, loc, y) {
        var draw2 = SVG().addTo(loc).size('24vmin', '10vmin').attr({
            y: 0,
            id: 'navtext'
        })
        var graphictext = draw2.text(text).attr({
            fill: clr,
           x:'50%',
            y:'25%'
        })
        graphictext.mouseout(function () {
            graphictext.fill(clr)
        })
        graphictext.font({
            anchor: 'middle',           
        })
        // window.addEventListener('resize', e => {
        //     if (window.screen.width < 600) {
        //         graphictext.font({
        //             size: '50%'
        //         })

        //     }
        //     else {
        //         graphictext.font({
        //             size: '70%'
        //         })
        //     }
        // })
        window.addEventListener('scroll',e=>{
            if(window.scrollY >= document.body.clientHeight/3){
                graphictext.font({
                    fill:'#a1a1a1'
                })
            }
            else{
                graphictext.font({
                    fill:clr
                })
            }
        })
    }
    function cardText(text, clr, loc, y) {
        var draw2 = SVG().addTo(loc).size('24vmin', '10vmin').attr({
            id: 'cardtext',
            y:'50%'
        })
        
        var graphictext = draw2.text(text).attr({
            fill: clr,
            x:'50%',
            y:'25%',
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
            size: '3vmin',
            family: 'ACBlack'
        })
        window.addEventListener('resize', e => {
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
    function heading(text) {
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'middle',
            size: '5vmin',
            family: ' ACBlack',
            fill: '#ebe0d2'
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
    function pText(text) {
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'middle',
            size: '3vmin',
            family: ' ACBlack',
            fill: '#b58462'
        }).attr({
            x: '50%',
            y: '15%',
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

    // var mb = menuBar()
    // var dl = drawLine()
    // // var tx2 = menuText('About the Creator', '-60%')
    // var tx1 = menuText('Web Development', '-50%')
    // var tx1 = menuText('Web Links', '-40%')
    // var tx1 = infoText('Contact Us', '-25%')
    // var mTxt1 = navText('Graphic Design', '#19518c', '#navbar', '44.49%')
    // var mTxt1 = navText('3D Design', '#19518c', '#navbar', '44.49%')
    // var mTxt1 = navText('Web Development', '#19518c', '#navbar', '44.49%')
    // var mTxt1 = cardText('Coat of Arms', '#ffffff', '#carcover', '44.49%')
    var hTxt1 = heading('Hello!')
    var pTxt1 = pText('Welcome to the espii club.')


}
export { drawer }
