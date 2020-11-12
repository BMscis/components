import anime from '../node_modules/animejs/lib/anime.es.js';
import mv from '@google/model-viewer'
import envHdri from './assets/3d/studio024.hdr'
import coa from './assets/3d/C2.glb'

function drawVisualpad() {
    var rect2 = document.createElement('div')
    rect2.setAttribute('id', 'visualpad')
    document.getElementById('p1a').appendChild(rect2)

    // var draw = SVG().addTo('#visualpad').attr({
    //     x: 0,
    //     y: 0,
    // })
    // draw.css('width','clamp(40ch, 50%, 80ch)')
    // draw.css('height','clamp(55ch, 50%, 80ch)')
    // // function rectSizereturn() {
    // //     if (window.screen.width <= 600) {
    // //         return '70%'
    // //     }
    // //     else {
    // //         return '40%'
    // //     }
    // // }
    // // function rectCenter() {
    // //     if (window.screen.width <= 600) {
    // //         return '15%'
    // //     }
    // //     else {
    // //         return '30%'
    // //     }
    // // }
    // // function rectsize() {
    // //     if (window.screen.width <= 600) {
    // //         console.log('true')
    // //         rect.width('70%')
    // //         rect.x('15%')
    // //     }
    // //     else {
    // //         rect.width('40%')
    // //         rect.x('30%')
    // //     }
    // // }
    // function rectsize(){
    //     rect.css('height','100%')
    //     rect.css('width','100%')

    // }
    // // var rect = draw.rect('100%','100%').attr({
    // //     fill: '#1A78D9',
    // //     rx: 10,
    // //     ry: 10,
    // // })
    // // rect.css('margin','auto')
    // var circle = draw.circle('20%', '20%').attr({
    //     fill: '#30D975',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle2 = draw.circle('10%', '15%').attr({
    //     fill: '#1A78D9',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle3 = draw.circle('5%', '5%').attr({
    //     fill: '#C8D945',
    //     cx: '50%',
    //     cy: '50%',
    // })
    // var circle4 = draw.circle('25%', '20%').attr({
    //     fill: '#1A78D9',
    //     cx: '50%',
    //     cy: '50%',
    //     id: 'circletransform',
    // })
    // circle4.css('transform-origin', 'center')
    // anime({
    //     targets: '#circletransform',
    //     scale: 0.125,
    //     delay: 2000,
    //     duration: 8000

    // })

}
function threeDscene() {
    var modelV = document.createElement('model-viewer')
    modelV.setAttribute('src', coa)
    modelV.style.width = 'clamp(200px, 50%, 500px)'
    modelV.style.height = 'clamp(300px, 50%, 1000px)'
    modelV.style.margin = 'auto'
    modelV.setAttribute('camera-controls', '')
    modelV.setAttribute('auto-rotate', '')
    modelV.setAttribute('shadow-intensity', '4')
    modelV.setAttribute('shadow-softness', '0')
    modelV.setAttribute('field-of-view', '50')
    modelV.setAttribute('max-field-of-view', '50deg')
    modelV.setAttribute('environment-image', envHdri)
    document.getElementById('p2a').appendChild(modelV)
}
// export { threeDscene }

