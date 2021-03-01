import './style.scss';
import './components/carousel/carousel'
import './components/bars/sidebar/sidebar'
import './components/bars/navbar/navbar'
import './components/typography/textboard/textboard'
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

window.addEventListener('load', e => {
    //divs()
    //logoIcon()
    //renderStory()
    //load()
    var navbar = document.createElement('es-navbar')
    var sidebar = document.createElement('es-sidebar')
    var es = document.createElement('es-carousel')
    es.setAttribute('width', document.body.clientWidth)
    document.body.appendChild(navbar)
    document.body.appendChild(sidebar)
    document.body.appendChild(es)
})


document.body.setAttribute('id', 'body')
