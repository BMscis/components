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
        this.shadow = this.attachShadow({ mode: 'open' })
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
        this.translateX()
        this.addEventListener("dbclick", e => {
            this.expand()
        })
        window.addEventListener('resize', e => {
            this.resize()
        })
        this.addEventListener('orientationchange', e => {
            this.setAttribute('resize', 'true')

        })
        this.addEventListener('touchstart', e => {
            if (this.hasAttribute('expandstory')) {
                return
            }
            else {
                var touches = e.changedTouches
                this.firstTouch = touches[0].screenX
                this.touchMove = false
            }
            return
        })
        this.addEventListener('touchmove', e => {
            this.touchMove = true
        })
        this.addEventListener('touchend', e => {
            if (this.hasAttribute('expandstory')) {
                return
            }
            else {
                var touches = e.changedTouches
                this.lastTouch = touches[touches.length - 1].screenX
                var firstTouch = this.firstTouch
                var lastTouch = touches[touches.length - 1].screenX
                if (firstTouch > lastTouch && this.touchMove === 'true') {
                    document.querySelector('es-carousel').shadowRoot.querySelector('es-next').click()
                }
                if (firstTouch < lastTouch && this.touchMove === 'true') {
                    document.querySelector('es-carousel').shadowRoot.querySelector('es-previous').click()

                }
            }

        })
        this.addEventListener('touchcancel', e => {
        })
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
        this.animate([
            { transform: "translateX(" + this.dimension.storyTranslate + ") scale(1) rotate(0)" }
        ],
            {
                duration: 350,
                delay: this.offsetLeft / 3,
                fill: 'forwards',
                easing: 'cubic-bezier(.39,.11,.61,.84)'
            }
        )
    }
    moveInactive() {
        this.toggleActive()
        this.animate([
            { transform: "translateX(" + this.dimension.storyTranslate + ") scale3d(0.7,0.7,0.7) rotateY(20deg)" }
        ],
            {
                duration: 350,
                delay: this.offsetLeft / 3,
                fill: 'forwards',
                easing: 'cubic-bezier(.39,.11,.61,.84)'
            }
        )
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" ) 
        this.toggleAttribute('darkmode', true)
        this.render();
        this.toggleActive()
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
    render() {
        if (this.backface) {
            this.shadow.innerHTML = `
            ${this.styleTemplate}
            <es-closecomponent text=${this.h1} textafter=${this.h2}></es-closecomponent>
            <es-storybackface></es-storybackface>
            `
            if (this.classList.contains('0')) {
                this.imgset = [
                    [one,
                        'Coart of Arms',
                        'We design family, company, organizational or state escutcheons with personalized mottos.',
                    ],
                    [two,
                        'Escutcheons',
                        'Rolls of arms are the primary sentiment for brand recognition. Shields have been used across time by noble families and organizations to inform the public about genealogy.'],
                    [three,
                        'Corporate Logos',
                        'Make creative graphic symbols to aid and promote brand recognition across different platforms.'],
                    [four,
                        'Production Logos',
                        'Get digitized logos that can be animated and be used accross multiple digital platforms.'
                    ]
                ]
            }
            if (this.classList.contains('1')) {
                this.imgset = [
                    [five,
                        'Social Media Design',
                        'Get custom social media design for your websites and chat rooms'
                    ],
                    [six,
                        'App Design',
                        'Get userflow concepts that customers and users can easily adapt to. '

                    ],
                    [seven,
                        'Mobile Design',
                        'Get design templates that seamlessly transition from web to mobile. '
                    ]
                ]
            }
        }
        else {
            this.shadow.innerHTML = `
        ${this.styleTemplate}
        <es-image alt="${this.h1 + this.h2}" img = ${this.img}></es-image>
        <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
        <es-p text='${this.ptext}'></es-p>
        <es-button></es-button>`}
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
    get styleTemplate() {
        return `<style>
        *{
            box-sizing:border-box;
            outline:none;
        }
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
            height:${this.dimension.storyHeight + "px"};
            width:300px;
            min-width:300px;
            max-width:300px;
            position: relative;
            border-radius: 3px;
            background-color: #b1b1;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            transform-style: preserve-3d;
            transform-origin:center;
            transition: 0.5s ease;
            align-items: center;
            display: grid;
            grid-auto-flow: row;
            justify-items: center;                                          
            opacity: 0.5;
            z-index:0;

        }
        :host([darkmode]){
            background-color: #000000;
        }
        :host([backface]){
            display:flex;
            flex-direction:row;
            align-items:flex-start;
        }
        :host([active]){
            opacity: 1;
            box-shadow: 2px 3px 19px 2px rgb(0 0 0 / 71%), 0 0 2px 1px rgb(0 0 0 / 76%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-right: 1px outset;
            border-left: 1px outset;
            border-image: linear-gradient(transparent, transparent,#e63380,transparent,transparent);
            border-image-slice:1;
            z-index:1;
        
        }
        :host([darkmode][active]){
            //border:none;
            //box-shadow:2px 3px 15px 18px hsl(0deg 0% 5%), 0 0 4px 3px hsl(0deg 0% 9%);
        }
        :host([darkmode][active])::after,
        :host::after{
            content:none;
        }
        :host([active])::after,
        :host::after{
            content: " ";
            border-radius: 10px;
            width: 100%;
            height: 10%;
            box-shadow: -10px 20px 16px 5px #00000008;
            position: absolute;
            background: linear-gradient(to top, currentColor, transparent, transparent);
            bottom: 0;
            transform-style: preserve-3d;
            transform-origin: top;
            backdrop-filter:opacity(0.5);
            -webkit-backdrop-filter:opacity(0.5);
            z-index: -1;
        }
        @supports (-webkit-box-reflect: below;) {
            :host([active])::after,
        :host::after{
            -webkit-box-reflect: below;
            }
        }
        :host([expandstory]){
            background-image:none;
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            min-width:calc(95vw * 0.8);
            max-width:calc(95vw * 0.8);
            flex-wrap: wrap;
            justify-content: end;
            flex-direction: column;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
            background:border-box;
        }
        :host([expandstorymobi]){
            height:calc(85vh * 0.9);
        }
        @media only Screen and (max-width:850px){
            :host([expandstory]){
                max-width:95vw;
                min-width:95vw;
                flex-wrap:nowrap;
            }
            div{
                //margin-left: 5%;
            }
        }
        :host([expandstory]:hover){
        
        }
        </style>
    `
    }
}
customElements.define('es-story', Story);