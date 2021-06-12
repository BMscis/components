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
import { AnchorButton } from "../buttons/anchorButton"
import { CloseComponent } from "./closecomponent"
import { StoryBackface } from "./StoryBackface"

export class Story extends HTMLElement {
    constructor(h1, h2, img, active, aclass, ptext,ident) {
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.h1 = h1
        this.h2 = h2
        this.img = img
        this.active = active
        this.aclass = aclass
        this.ptext = ptext
        this.ident = ident
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
    show() {
        this.animate(
            [{ opacity: 1 }],
            {
                duration: 1000,
                easing: "ease-in-out",
                fill: 'forwards'
            }
        )
        return
    }
    hide() {
        this.animate(
            [{ opacity: 0 }],
            {
                duration: 1000,
                easing: "ease-in-out",
                fill: 'forwards'
            }
        )
        return
    }
    get getcomponents() {
        this.components["esimage"] = new StoryImage(this.h1 + this.h2, this.img)
        this.components["heading"] = new H1(this.h1, this.h2)
        this.components["p2"] = new P1(this.ptext)
        this.components["esbutton"] = new AnchorButton(`#es-story-${this.ident}`)
        this.components["backface"] = new StoryBackface(this.aclass)
        this.components["close"] = new CloseComponent(this.h1, this.h2,`#co-story-${this.ident}`)
        this.setAttribute("id",`#co-story-${this.ident}`)
        return
    }

    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.toggleAttribute('darkmode', true)
        this.render("front");
        this.show()
        //this.toggleActive()
    }
    toggleActive() {
        switch (this.active) {
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
                this.appendChild(this.components.close)
                this.appendChild(this.components.backface)
                this.appendChild(this.components.esimage)
                this.appendChild(this.components.heading)
                this.appendChild(this.components.p2)
                this.appendChild(this.components.esbutton)
                return
    }
    disconnectedCallback() {
        this.hide()
        for (var [key, val] of Object.entries(this.childNodes)) {
            this.removeChild(val)
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
    disconnectedBackface() {
        for (var [key, val] of Object.entries(this.childNodes)) {
            this.removeChild(val)
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
    get styleTemplate() {
        return
    }
}
customElements.define('es-story', Story);