import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
import gltfobj from './assets/3d/COA_GLT3.glb'
import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import 'babylonjs-loaders'
import menu from './assets/img/menu.svg'
//header 5vmin
//paragraph 3vmin
//navbar 3.5vmin
//menubar 3.2vmin
function drawNavbar() {
    var rect = document.createElement('div')
    rect.setAttribute('id', 'navbar')
    document.body.appendChild(rect)

    function menuIcon() {
        var draw = SVG().addTo('#body').size('15vmin', '15vmin').attr({
            id:'menuicon'
        })
        var drawline = draw.path('M10 15 L40 15 Z M10 25 L40 25 Z M10 35 L40 35').stroke({
            color: "#F44336",
            width: 3,
        })
        drawline.mouseover(function () {
            drawline.stroke({
                color: '#1A78D9'
            })
            drawline.css('cursor', 'pointer')
        })
        drawline.mouseout(function () {
            drawline.stroke({
                color: '#F44336'
            })
        })
    }
    function navText(text) {
        var draw2 = SVG().addTo('#navbar').size('24vmin', '10vmin')
        var graphictext = draw2.text(text).attr({
            fill: '#DF7B74',
            y: '44.49%',
            x:'50%'
        })
        graphictext.css('cursor', 'pointer')
        graphictext.mouseover(function () {
            graphictext.fill('#F44336')
        })
        graphictext.mouseout(function () {
            graphictext.fill('#DF7B74')
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
    menuIcon()
    navText('Graphic Design')
    navText('3D Design')
    navText('Web Development')

}
function drawTextbody(){
    var rect1 = document.createElement('div')
    rect1.setAttribute('id','textbody')
    document.body.appendChild(rect1)

    function heading(text){
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'middle',
            size: '3vmin',
            family: ' ACBlack',
            fill:'#F44336'
        }).attr({
            x:'-100%',
            y:'15.98%',
            id:'headingtext'
        })
        anime({
            targets: '#headingtext',
            translateX:'120%',
            duration: 3000
        })

    }
    function text(text){
        var draw = SVG().addTo('#textbody').size('100%', '10vmin')
        var heading = draw.text(text)
        heading.font({
            anchor: 'start',
            size: '3vmin',
            family: ' ACBlack',
            fill:'#1A78D9'
        }).attr({
            x:'20%',
            y:'15.98%',
            id:'headingtext',
            opacity:0
        })
        anime({
            targets: '#headingtext',
            opacity:1,
            duration: 8000
        })

    }
    heading('Hello,')
    text('Welcome to the espii club.')
}
function drawVisualpad(){
    var rect2 = document.createElement('div')
    rect2.setAttribute('id','visualpad')
    document.body.appendChild(rect2)  

    var draw = SVG().addTo('#visualpad').size('100%', '100%').attr({
        x:0,
        y:0
    })
    function rectSizereturn(){
        if (window.screen.width <= 600){
            return '70%'
        }
        else{
            return '40%'
        }
    }
    function rectCenter(){
        if (window.screen.width <= 600){
            return '15%'
        }
        else{
            return '30%'
        }
    }
    function rectsize(){
        if (window.screen.width <= 600){
            console.log('true')
            rect.width('70%')
            rect.x('15%')
        }
        else{
            rect.width('40%')
            rect.x('30%')
        }
    }
    var rect = draw.rect(rectSizereturn(),'100%').attr({
        fill:'#1A78D9',
        x:rectCenter(),
        rx:10,
        ry:10,
    })

    window.addEventListener('resize',e=>{
        rectsize()
    })
    var circle = draw.circle('20%','20%').attr({
        fill:'#30D975',
        cx:'50%',
        cy:'50%',
    })
    var circle2 = draw.circle('10%','15%').attr({
        fill:'#1A78D9',
        cx:'50%',
        cy:'50%',
    })
    var circle3 = draw.circle('5%','5%').attr({
        fill:'#C8D945',
        cx:'50%',
        cy:'50%',
    })
    var circle4 = draw.circle('25%','20%').attr({
        fill:'#1A78D9',
        cx:'50%',
        cy:'50%',
        id:'circletransform',
    })
    circle4.css('transform-origin', 'center')
        anime({
            targets:'#circletransform',
            scale:0.125,
            delay:2000,
            duration:8000

        })
    
}
function threeDscene(){
    var draw = SVG().addTo('#body').size('100vw', '100vh')
    var rect = draw.rect('100%','100%').attr({
        id: '3dScene',
        fill:'#1A78D9'
    })
    var canvas = document.createElement('canvas')
    canvas.style.width = '100vw'
    canvas.style.height = '100vh'
    canvas.style.backgroundImage = menu
    document.body.appendChild(canvas)
    var engine = new BABYLON.Engine(canvas, true)
    var scene = new BABYLON.Scene(engine)
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,5,-10,scene))
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(canvas, false)
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene)
    BABYLON.SceneLoader.ImportMesh(undefined,'webpack://espii-components/./src/assets/3d/','COA_GLT3.glb',scene)
    engine.runRenderLoop(function(){
        scene.render()
    })

}
export { drawTextbody}
export { drawNavbar }
export { drawVisualpad }
export { threeDscene }

