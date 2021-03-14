const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

//divs()
//logoIcon()
//renderStory()
//load()
console.log("@INDEX")
var navbar = document.createElement('es-navbar')
var sidebar = document.createElement('es-sidebar')
var es = document.createElement('es-carousel')
es.setAttribute('width', document.body.clientWidth)
document.body.appendChild(navbar)
document.body.appendChild(sidebar)
document.body.appendChild(es)


document.body.setAttribute('id', 'body')
