import './style.scss';
import menu from './assets/img/menu.svg';
import {bodyParts} from './pOne';
import {drawNavbar} from './navbar';
import {drawTextbody} from './textbody';
import {menuIcon} from './menuicon';
import {placeText} from './navtext';
import {divs} from './div'
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')
window.addEventListener('load', e => {
    divs()
    menuIcon()
})
document.body.setAttribute('id', 'body')