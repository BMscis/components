import './style.scss';
import menu from './assets/img/menu.svg';
import {
    drawNavbar,
    drawTextbody,
    drawVisualpad,
    threeDscene,
    drawDisplaypad
} from './menusvg';
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')
window.addEventListener('load', e => {
    drawNavbar()
    drawVisualpad()
    drawTextbody()
    drawDisplaypad()
    // threeDscene()

})
document.body.setAttribute('id', 'body')