import anime from '../node_modules/animejs/lib/anime.es.js';
import bc from './assets/svg/bgC.svg'
// import {carousel} from './carousel'
import {footer} from './footer'
import {cloz} from './closure'
function divs() {
    var main = document.createElement('div')
    main.setAttribute('id','main')

    var bgImg = document.createElement('div')
    bgImg.setAttribute('id', 'b1')

    var bgImg2 = document.createElement('div')
    bgImg2.setAttribute('id', 'b2')
    
    var sidebar = document.createElement('div')
    sidebar.setAttribute('id','sidebar')

    var logo = document.createElement('div')
    logo.setAttribute('id','logo')
    // bgImg.appendChild(logo)

    var navbar = document.createElement('div')
    navbar.setAttribute('id','navbar')

    var bgImg3 = document.createElement('div')
    bgImg3.setAttribute('id', 'b3')

    main.appendChild(bgImg)
    // main.appendChild(navbar)
    main.appendChild(bgImg2)
    document.body.appendChild(sidebar)
    document.body.appendChild(main)
    // document.body.appendChild(bgImg3)

    window.addEventListener('scroll',e =>{
        if (window.pageYOffset > 200){
            // anime({
            //     targets:'body',
            //     backgroundColor:['hsla(90, 0%, 0%,1),hsla(0, 0%, 100%, 1)'],
            //     // backgroundColor:['hsla(0, 100%, 65%, 1),hsla(90, 100%, 50%,1)'],
            //     easing: 'easeInOutQuad',
            //     duration:500
            // })
            // anime({
            //     targets:'#navbar',
            //     width:'80%'
            // })
            // anime({
            //     targets:'#b2',
            //     backgroundColor:'hsla(0, 0%, 13%,1)',
            // })
        }
        else{
            // anime({
            //     targets:'body',
            //     backgroundColor:['hsla(0, 0%, 100%,1),hsla(90, 100%, 50%,1)'],
            //     easing: 'easeInOutQuad',
            //     duration:500
            // })
            // anime({
            //     targets:'#navbar',
            //     width:'100%'
            // })
            // anime({
            //     targets:'#b2',
            //     backgroundColor:'hsla(60, 76%, 53%,0)',
            // })
        }
    })
    var rect1 = document.createElement('div')
        rect1.setAttribute('id', 'textbody')
        document.getElementById('b1').appendChild(rect1)
    // carousel()
    //cloz()
    // footer()

}

export{divs}