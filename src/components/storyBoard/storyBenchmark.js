//imports
import anime from '../../../node_modules/animejs/lib/anime.es.js';

//components
import '../h1/h1'
import '../h2/h2'
import '../buttons/anchorButton'
import '../paragraph/p1'
import './storyImage'
import '../buttons/closeButton'
import './StoryBackface'

//images
import bg from '../../assets/img/WTArtboard.jpg'
import bgO from '../../assets/img/UTArtboard 1-20.jpg'
import { Thumbs } from 'swiper'
import { forEach } from 'lodash'
import stairs from '../../assets/svg/stairs2.svg'
import ws from '../../assets/img/ws24.png'


export class Story extends HTMLElement {
    constructor() {
        super()
        console.log('story constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('story attributechange:' + this.classList)
        if (prop === 'active') {
            if (this.hasAttribute('active')) {
                switch (newVal) {
                    case '':
                        this.cssLeft = 0
                        this.moveActive()
                        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                        storyInacitve.forEach(element => {
                            element.setAttribute('cssLeft', this.cssLeft)
                        });
                        break
                    case 'left':
                        this.cssLeft = -300
                        this.moveActive()
                        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                        storyInacitve.forEach(element => {
                            element.setAttribute('cssLeft', this.cssLeft)
                        });
                        break
                    case 'right':
                        this.cssLeft = 300
                        this.moveActive()
                        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                        storyInacitve.forEach(element => {
                            element.setAttribute('cssLeft', this.cssLeft)
                        });
                        break
                }
            }
            else {
                return
            }
        }
        if (prop === 'cssleft') {
            if (this.hasAttribute('active') && !this.hasAttribute('resize')) {
                return
            }
            if(this.hasAttribute('resize')){
                this.cssLeft = 0
            }
            else {
                this.moveInactive()
            }
        }
        if (prop === 'expand') {
            if (this.hasAttribute('expand')) {
                this.cssLeft = 'expand'
                this.moveActive()
                this.backface = 0
                this.render()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssLeft', window.innerWidth +'px')
                });
            }
            else {
                return
            }
        }
        if (prop === 'close') {
            this.cssLeft = 'close'
            this.moveActive()
            this.render()
            var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
            storyInacitve.forEach(element => {
                element.setAttribute('cssLeft', this.cssLeft)
            });
        }
        if (prop === 'resize') {
            if(this.hasAttribute('resize')){
                var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
                story.setAttribute('cssleft',0)
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssLeft', this.cssLeft)
                });
            }
            else{return}
        }
        return
    }
    get backface() {
        return this.getAttribute('backface')
    }
    set backface(val) {
        return this.setAttribute('backface', true)
    }
    get storyOffset() {
        return this.getAttribute('storyoffset')
    }
    set storyOffset(val) {
        return this.setAttribute('storyoffset', val)
    }
    get closeLeft(){
        return this.getAttribute('closeleft')
    }
    set closeLeft(val){
        return this.setAttribute('closeleft',val)
    }
    get cssLeft() {
        return this.getAttribute('cssleft')
    }
    set cssLeft(val) {
        if (val === 0) {
            if(this.hasAttribute('resize')){
                this.removeAttribute('resize')
            }
            var windowWidth = Math.round(window.innerWidth /2)
            var selfWidth = 150/2
            var cL = windowWidth - selfWidth
            this.setAttribute('cssleft', (cL)+'px' )
            return
        }
        if (val === 300) {
            var windowWidth = parseInt(this.cssLeft)
            var selfWidth = 300
            var cL = windowWidth - selfWidth
            this.setAttribute('cssleft', (cL)+'px' )
            return
        }
        if (val === -300) {
            var windowWidth = parseInt(this.cssLeft)
            var selfWidth = -300
            var cL = windowWidth - selfWidth
            this.setAttribute('cssleft', (cL)+'px' )
            return
        }
        if (val === 'expand') {
            var oL = this.offsetLeft
            var wind = Math.round(window.innerWidth * (20 / 100))
            var olWind = Math.round(-oL + wind)
            this.setAttribute('storyoffset',oL)
            this.setAttribute('closeleft',this.cssLeft)
            this.setAttribute('cssleft', olWind+'px')
            return
        }
        if (val === 'close') {
            var wind = Math.round(window.innerWidth * (20 / 100))
            var oL = parseInt(this.storyOffset)
            var windOl = Math.round(-oL - wind)
            var thisPosition = parseInt(this.cssLeft)
            var storyGap = (thisPosition - wind)+oL
            var movePosition = parseInt(this.closeLeft) + storyGap
            this.setAttribute('cssleft', movePosition+'px' )
            this.removeAttribute('expand')
            this.removeAttribute('backface')
            return
        }
        return
    }
    get img() {
        console.log('GET img')
        return this.getAttribute('img')
    }
    set img(val) {
        console.log('SET IMG setting image')
        return this.setAttribute('img', val)
    }
    get h1() {
        return this.getAttribute('h1')
    }
    set h1(val) {
        return this.setAttribute('h1', val)
    }
    get h2() {
        return this.getAttribute('h2')
    }
    set h2(val) {
        return this.setAttribute('h2', val)
    }
    get expand() {
        return this.getAttribute('expand')
    }
    set expand(val) {
        return this.setAttribute('expand', val)
    }
    get imgset() {
        return this.getAttribute('imgset')
    }
    set imgset(val) {
        return this.setAttribute('imgset', val)
    }
    get active() {
        return this.getAttribute('active')
    }
    set active(val) {
        return this.setAttribute('active', '')
    }
    get inactive() {
        return this.getAttribute('inactive')
    }
    set inactive(val) {
        return this.setAttribute('inactive', '')
    }
    setup(){
        var windowWidth = Math.round(window.innerWidth * (20 / 100))
        var thisWdith = 300/2
        var centerPoint = windowWidth - thisWdith
        var thisOffset = this.offsetLeft
        this.setAttribute('cssleft',centerPoint + 'px')

        var nextPoint = centerPoint - 300
        var previousPoint = centerPoint - (-300)
    }
    moveActive() {
        console.log("transform: translateX(" + this.cssLeft + ") scale(0.8)")
        this.animate([
            { transform: "translateX(" + this.cssLeft + ")" }
        ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'cubic-bezier(.39,.11,.61,.84)'

            }
        )

    }
    moveInactive() {
        console.log("INACTIVEtransform: translateX(" + this.cssLeft + ") scale(0.8)")
        this.animate([
            { transform: "translateX(" + this.cssLeft +") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
        ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'cubic-bezier(.39,.11,.61,.84)'

            }
        )
    }
    connectedCallback() {
        console.log('story connected: ' + this.classList)
        this.render();
        this.disconnectedCallback()
    }
    static get observedAttributes() {
        return [
            'active', 'move', 'cssleft', 'expand', 'close','resize'
        ];
    }
    render() {
        console.log('BACKFACE ==: ' + this.backface)
        if (this.backface) {
            console.log('story render backface')
            this.shadow.innerHTML = `
            ${this.styleTemplate}
            <es-closebutton></es-closebutton>
            <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
            <es-storybackface images=${this.imgset}></es-storybackface>
            `
        }
        else {
            console.log('story render')
            this.shadow.innerHTML = `
        ${this.styleTemplate}
        <es-image img = ${this.img}></es-image>
        <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
        <es-p></es-p>
        <es-button></es-button>`}
    }
    disconnectedCallback() {
        console.log('story disconnected')
    }
    get styleTemplate() {
        return `<style>
        *{
            box-sizing:border-box;
        }
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
        min-width:300px;
        max-width:300px;
        position: relative;
        border-radius: 3px;
        height: 85vh;
        background-image: ${'url(' + bgO + ')'};
        background-color: #b1b1;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(40px);
        transform-style: preserve-3d;
        transform-origin:center;
        transition: 0.5s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 0.5;
        z-index:0;
    }
    :host([active]){
        opacity: 1;
        position: relative;
        background-image: url(${bg});
        transition: 0.5s ease-in-out;
        box-shadow: 2px 3px 19px 2px rgb(0 0 0 / 71%), 0 0 2px 1px rgb(0 0 0 / 76%);
        transform-style: preserve-3d;
        transform-origin:center;
    }
    :host([active])::after,
    :host::after{
        content: " ";
        border-radius: 10px;
        // width: 100%;
        height: 10%;
        box-shadow: -10px 20px 16px 5px #00000008;
        position: absolute;
        background: linear-gradient(to top, currentColor, transparent, transparent);
        bottom: 0;
        transform-style: preserve-3d;
        transform-origin: top;
        -webkit-box-reflect: below;
        filter:opacity(0.5);
        z-index: -1;
    }
    :host([expand]){
        background-image:none;
        backdrop-filter: blur(40px);
        min-width: 80%;
        height:100%;
        justify-content: space-evenly;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
    }
        </style>
    `
    }
}
customElements.define('es-story', Story);
