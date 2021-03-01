this.animate([
    { transform: "translateX(" + this.cssLeft + "px) scale(0.8)" }
],
    {
        duration: 500,
        fill: 'forwards',
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'

    }
)
var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
storyInacitve.forEach(element => {
    element.setAttribute('cssLeft', cLeft)
});