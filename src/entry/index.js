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

html.setAttribute('dir','ltr')
html.setAttribute('lang','eng')
html.setAttribute('mobi', navi)


    var navbar= document.createElement('es-navbar')
    var sidebar= document.createElement('es-sidebar')
    var carousel = document.createElement('es-carousel')
    var logo = document.createElement('es-logo')

    document.body.appendChild(logo)
    document.body.appendChild(navbar)
    document.body.appendChild(sidebar)
    document.body.appendChild(carousel)


document.body.setAttribute('id', 'body')
