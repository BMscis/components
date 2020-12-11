import { Animator, SVG } from '@svgdotjs/svg.js';
import ec from './assets/svg/ec2XL.svg'
function drawNavbar() {
    var rect = document.createElement('div')
    rect.setAttribute('id', 'navbar')
    document.body.appendChild(rect)
    var ecVg = document.createElement('img')
    ecVg.setAttribute('src', ec)
    document.body.appendChild(ecVg)
}

export {drawNavbar}