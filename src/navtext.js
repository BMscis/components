import { Animator, SVG } from '@svgdotjs/svg.js';
function navText(text, clr,loc,y) {
    var draw2 = SVG().addTo(loc).size('24vmin', '10vmin').attr({
        y:y,
        id:'navtext'
    })
    var graphictext = draw2.text(text).attr({
        fill: clr,
        y: '44.49',
        x: '50%'
    })
    graphictext.css('cursor', 'pointer')
    graphictext.mouseover(function () {
        graphictext.fill('#F44336')
    })
    graphictext.mouseout(function () {
        graphictext.fill(clr)
    })
    graphictext.font({
        anchor: 'middle',
        size: '2.5vmin',
        family: 'ACBoldSemiCn'
    })
    window.addEventListener('resize', e => {
        console.log(draw2.width())
        if (window.screen.width < 600) {
            graphictext.font({
                size: '50%'
            })

        }
        else {
            graphictext.font({
                size: '70%'
            })
        }
    })
}
function infoText(text, clr,loc,y) {
    var draw2 = SVG().addTo(loc).size('24vmin', '10vmin').attr({
        y:y,
        id:'navtext'
    })
    draw2.css()
    var graphictext = draw2.text(text).attr({
        fill: clr,
        y: '44.49',
        x: '50%',
    })
    graphictext.css('cursor', 'pointer')
    graphictext.mouseover(function () {
        graphictext.fill('#F44336')
    })
    graphictext.mouseout(function () {
        graphictext.fill(clr)
    })
    graphictext.font({
        anchor: 'middle',
        size: '2.5vmin',
        family: 'ACBoldCondIt'
    })
    window.addEventListener('resize', e => {
        console.log(draw2.width())
        if (window.screen.width < 600) {
            graphictext.font({
                size: '50%'
            })

        }
        else {
            graphictext.font({
                size: '70%'
            })
        }
    })
}
function placeText(){

}
export{navText}
export {placeText}