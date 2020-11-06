import './style.scss';
import menu from './assets/img/menu.svg';
import {
    drawNavbar,
    drawTextbody,
    drawVisualpad,
    threeDscene
} from './menusvg';
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')
window.addEventListener('load', e => {
    drawNavbar()
    drawTextbody()
    drawVisualpad()
    threeDscene()
})
document.body.setAttribute('id', 'body')