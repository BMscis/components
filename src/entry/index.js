const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

//divs()
//logoIcon()
//renderStory()
//load()
//console.log("@INDEX")
var html = document.querySelector("html")

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
var navi = detectMob()

window.addEventListener('resize',e=>{
    //console.log('@ WINDOW RESIZE')
    var carousel = document.querySelector('es-carousel')
    var htmlx = document.querySelector("html")
    var navbar = document.querySelector('es-navbar')
    carousel.setAttribute('resize','true')
     if(htmlx.clientWidth <= 800 && navbar != null){
         document.body.removeChild(navbar)
     }
     if(htmlx.clientWidth > 800 && navbar === null){
         var nav = document.createElement('es-navbar')
         document.body.prepend(nav)
     }
    html.setAttribute('style','height:' + window.innerHeight + 'px') 
    document.body.setAttribute('style','height:' + window.innerHeight + 'px') 
})
html.setAttribute('dir','ltr')
html.setAttribute('lang','eng')
html.setAttribute('mobi', navi)
html.setAttribute('style','height:' + window.innerHeight + 'px') 
document.body.setAttribute('style','height:' + window.innerHeight + 'px') 

if (navi === true || html.clientWidth < 800){
    //var navbar= document.createElement('es-navbar')
    var sidebar= document.createElement('es-sidebar')
    var carousel = document.createElement('es-carousel')
    //var toolbar = document.createElement('es-toolbar')
    var logo = document.createElement('es-logo')

    document.body.appendChild(logo)
    //document.body.appendChild(navbar)
    document.body.appendChild(sidebar)
    document.body.appendChild(carousel)
    //document.body.appendChild(toolbar)
}
else{
    var navbar= document.createElement('es-navbar')
    var sidebar= document.createElement('es-sidebar')
    var carousel = document.createElement('es-carousel')
    var logo = document.createElement('es-logo')

    document.body.appendChild(logo)
    document.body.appendChild(navbar)
    document.body.appendChild(sidebar)
    document.body.appendChild(carousel)
}

document.body.setAttribute('id', 'body')
