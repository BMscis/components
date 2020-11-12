import './style.scss';
import menu from './assets/img/menu.svg';
import {bodyParts} from './pOne';
import {drawNavbar} from './navbar';
import {drawTextbody} from './textbody';
import {menuIcon} from './menuicon';
import {placeText} from './navtext';
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')
window.addEventListener('load', e => {
    menuIcon()
    bodyParts()
    drawTextbody()
    placeText()
})
document.body.setAttribute('id', 'body')