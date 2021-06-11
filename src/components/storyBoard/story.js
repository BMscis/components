//import Classes
import { Dimensions } from "../../Classes/spacemaps/dimensions"
//import images
import one from '../../assets/img/Asset4.png'
import two from '../../assets/img/Asset2.png'
import three from '../../assets/img/espiiforweb.png'
import four from '../../assets/img/jasenalogo.png'
import five from '../../assets/img/Asset5.png'
import six from '../../assets/img/Asset6.png'
import seven from '../../assets/img/phone.png'
import { StoryImage } from "./storyImage"
import { H1 } from "../typography/h1/h1"
import { P1 } from "../typography/paragraph/p1"
import {AnchorButton} from "../buttons/anchorButton"
import { CloseComponent } from "./closecomponent"
import { StoryBackface } from "./StoryBackface"

export class Story extends HTMLElement {
    constructor(h1, h2, img, active, aclass, ptext) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.h1 = h1
        this.h2 = h2
        this.img = img
        this.active = active
        this.aclass = aclass
        this.ptext = ptext
        this.components = {}
        //this.shadow =this.attachShadow({ mode: 'open' })
        this.setup()
    }
    static get observedAttributes() {
        return [
            //'active', 'move', 'storyTranslateXStart', 'expandstory', 'close', 'resize', 'expandleft', 'imgset', 'ptext'
        ];
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }

    setup() {
        this.dimension = new Dimensions()
        this.dimension.storySetup
        this.getcomponents
        //this.translateX()
        // this.addEventListener("dbclick", e => {
        //     this.expand()
        // })
        // window.addEventListener('resize', e => {
        //     this.resize()
        // })
        // this.addEventListener('orientationchange', e => {
        //     this.setAttribute('resize', 'true')

        // })
        // this.addEventListener('touchstart', e => {
        //     if (this.hasAttribute('expandstory')) {
        //         return
        //     }
        //     else {
        //         var touches = e.changedTouches
        //         this.firstTouch = touches[0].screenX
        //         this.touchMove = false
        //     }
        //     return
        // })
        // this.addEventListener('touchmove', e => {
        //     this.touchMove = true
        // })
        // this.addEventListener('touchend', e => {
        //     if (this.hasAttribute('expandstory')) {
        //         return
        //     }
        //     else {
        //         var touches = e.changedTouches
        //         this.lastTouch = touches[touches.length - 1].screenX
        //         var firstTouch = this.firstTouch
        //         var lastTouch = touches[touches.length - 1].screenX
        //         if (firstTouch > lastTouch && this.touchMove === 'true') {
        //             document.querySelector('es-carousel').shadowRoot.querySelector('es-next').click()
        //         }
        //         if (firstTouch < lastTouch && this.touchMove === 'true') {
        //             document.querySelector('es-carousel').shadowRoot.querySelector('es-previous').click()

        //         }
        //     }

        // })
        // this.addEventListener('touchcancel', e => {
        // })
    }
    get getcomponents(){
        this.components["esimage"] = new StoryImage(this.h1 + this.h2, this.img)
        this.components["heading"] = new H1(this.h1, this.h2)
        this.components["p2"] = new P1(this.ptext)
        this.components["esbutton"] = new AnchorButton()
        this.components["backface"] = new StoryBackface(this.aclass)
        this.components["close"] = new CloseComponent(this.h1, this.h2)
        return
    }
    animateTranslateX() {
        switch (this.active) {
            case true:
                this.moveActive()
                return
            case false:
                this.moveInactive()
                return
        }
    }
    translateX(val) {
        switch (val) {
            case 'right':
                this.animateTranslateX()
                return
            case 'left':
                this.animateTranslateX()
                return
            default:
                this.animateTranslateX()
        }
    }
    expand() {
        this.dimension.expandStory()
        this.animatetranslateX()
    }
    cloze() {
        var fullWidth = document.body.scrollWidth
        var textBoardSpace = Math.round(0.2 * fullWidth)
        var offsetLeft = this.offsetLeft
        var storyWidth = 300

        // if (fullWidth <= 850) {
        //     var storySpace = Math.round(fullWidth)
        // }
        // else {
        //     var storySpace = Math.round(fullWidth + textBoardSpace)
        // }
        var storySpace = Math.round(fullWidth)
        var cPosition = Math.round((storySpace - storyWidth) / 2) - offsetLeft
        var cPositionPx = cPosition + 'px'

        this.offsetLeft = offsetLeft

        this.setAttribute('storyTranslateXStart', cPositionPx)
        this.removeAttribute('expandstory')
        this.removeAttribute('backface')
        this.moveActive()
        this.render()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('storyTranslateXStart', cPositionPx)
        });
    }
    resize() {
        this.dimension.storySetup
        this.style.width = this.dimension.storyWidth + "px"
        this.style.height = this.dimension.storyHeight + "px"
        this.animateTranslateX()
        return
    }
    next(val) {
        this.dimension.moveStory = val
        this.dimension.storySetup
        console.log(this.dimension.storyTranslate)
        this.animateTranslateX()
        return
    }
    moveActive() {
        this.toggleActive()
        //this.style.left = this.dimension.storyTranslate + "px"
        // this.animate([
        //     { transform: "translateX(" + this.dimension.storyTranslate + ") scale(1) rotate(0)" }
        // ],
        //     {
        //         duration: 350,
        //         delay: this.offsetLeft / 3,
        //         fill: 'forwards',
        //         easing: 'cubic-bezier(.39,.11,.61,.84)'
        //     }
        // )
    }
    moveInactive() {
        this.toggleActive()
        //this.style.left = this.dimension.storyTranslate + "px"
        // this.animate([
        //     { transform: "translateX(" + this.dimension.storyTranslate + ") scale3d(0.7,0.7,0.7) rotateY(20deg)" }
        // ],
        //     {
        //         duration: 350,
        //         delay: this.offsetLeft / 3,
        //         fill: 'forwards',
        //         easing: 'cubic-bezier(.39,.11,.61,.84)'
        //     }
        // )
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" ) 
        this.toggleAttribute('darkmode', true)
        this.render("front");
        //this.toggleActive()
    }
    toggleActive() {
        switch(this.active){
            case true:
                this.toggleAttribute("active", true)
                return
            case false:
                this.toggleAttribute("active", false)
                return
        }
    }
    render(val) {
        this.style.height = this.dimension.storyHeight + "px"
        switch(val){
            case "backface":
                this.disconnectedCallback()
                this.setAttribute("backface",'')
                this.appendChild(this.components.close)
                this.appendChild(this.components.backface)
                return
            case "front":
                this.appendChild(this.components.esimage)
                this.appendChild(this.components.heading)
                this.appendChild(this.components.p2)
                this.appendChild(this.components.esbutton)
                return
            case "closeback":
                this.removeAttribute("backface")
                this.disconnectedCallback()
                this.appendChild(this.components.esimage)
                this.appendChild(this.components.heading)
                this.appendChild(this.components.p2)
                this.appendChild(this.components.esbutton)
                return
        }
        
        
    }
    disconnectedCallback(){
        for (var [key,val] of Object.entries(this.childNodes)){
            this.removeChild(val)
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
        return
    }
    get styleTemplate() {
        return
    }
}
customElements.define('es-story', Story);