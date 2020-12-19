import './style.scss';
import './components/carousel/carousel'
import './components/logo/logo'
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

window.addEventListener('load', e => {
    //divs()
    //logoIcon()
    //renderStory()
    //load()
    var logo = document.createElement('es-logo')
    
    var es = document.createElement('es-carousel')
    es.setAttribute('width', document.body.clientWidth)
    document.body.appendChild(logo)
    document.body.appendChild(es)
})


document.body.setAttribute('id', 'body')
