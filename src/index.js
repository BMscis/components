import './style.scss';
import menu from './assets/img/menu.svg';
import { logoIcon } from './menuicon';
import { resizeStory } from './storyResize';
import { divs } from './div'
import './components/carousel/carousel'
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

window.addEventListener('load', e => {
    divs()
    logoIcon()
    //renderStory()
    //load()
    var es = document.createElement('es-carousel')
    es.setAttribute('width', document.body.clientWidth)
    document.querySelector('#b2').appendChild(es)
})


document.body.setAttribute('id', 'body')
