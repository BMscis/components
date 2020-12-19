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
import bg from '../../assets/img/ws20.png'
import bgO from '../../assets/img/ws32.png'
import { Thumbs } from 'swiper'
import { forEach } from 'lodash'


export class Story extends HTMLElement {
    constructor() {
        super()
        console.log('story constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('story attributechange')
        console.log('connected: ' + this.isConnected)
        // if(prop === 'elementleft'){
        //     const eLeft = newVal
        //     const cLeft = newVal/4
        //     this.cssLeft = cLeft
        //     return
        // }
        if (prop === 'rclick') {
            console.log('move right')
            console.log(this.expand)
            console.log(newVal)
            if (newVal === "true") {
                if (this.expand == "true") {
                    this.resize('r')
                    this.expand = 'false'
                }
                else {
                    this.moveRight()
                    this.disconnectedCallback()
                }
            }
            else {
                return
            }
        }
        if (prop === 'lclick') {
            console.log('move left')
            console.log(newVal)
            if (newVal === "true") {
                if (this.expand == "true"){
                    this.resize('l')
                    this.expand = 'false'
                }
                else{
                    this.moveLeft()
                    this.disconnectedCallback()
                }
            }
            else {
                return
            }
        }
        if (prop === 'resize') {
            if (newVal === "true") {
                if(this.expand === "true"){
                    return
                }
                else{
                    this.resize()
                }
            }
        }
        if (prop === 'img') {
            console.log('setting img')
        }
        if (prop === 'expand') {
            console.log('expanding')
            if (newVal === "true") {
                console.log('expand true')
                this.expandStory()
                this.backface = 0
                this.render()
                this.disconnectedCallback()
            }
            else {
                return
            }
        }
        if (prop === 'close'){
            this.resize()
            this.removeAttribute('expand')
            this.removeAttribute('close')
            this.removeAttribute('backface')
            this.render()
        }
    }
    // get elementLeft(){
    //     return this.getAttribute('elementleft')
    // }
    // set elementLeft(val){
    //     return this.setAttribute('elementleft',window.innerWidth)
    // }
    get backface(){
        return this.getAttribute('backface')
    }
    set backface(val){
        return this.setAttribute('backface',true)
    }
    get cssLeft() {
        return this.getAttribute('cssleft')
    }
    set cssLeft(val) {
        console.log('CSS VAL: ' + val)
        if (val == 0) {
            return this.setAttribute('cssleft', (window.innerWidth / 2) - 150)
        }
        if (val == 'expand') {
            var lf = this.cssLeft - this.offsetLeft
            return this.setAttribute('cssleft', lf)
        }
        console.log(val === 300)
        console.log(val === -300)
        if (val === 300 || val === -300) {
            var cssL = this.cssLeft - val
            console.log('CSS CHANGE: ' + cssL)
            return this.setAttribute('cssleft', cssL)
        }
        else {
            console.log('CSSLEFT VAL: ' + val)
            return this.setAttribute('cssleft', val)
        }
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
    animateMotion() {
        anime({
            targets: this,
            left: this.cssLeft,
            easing: 'easeOutSine',
            duration: 500,
        })
    }
    moveRight() {
        console.log('attempting to display right story')
        this.cssLeft = 300
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft', this.cssLeft)
            element.animateMotion()
        });
        return
    }
    moveLeft() {
        console.log('attempting to display left story')
        this.cssLeft = -300
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft', this.cssLeft)
            element.animateMotion()
        });
        return
    }
    expandStory() {
        this.cssLeft = 'expand'
        this.animateMotion()
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story:not(.active)")
        stories.forEach(element => {
            element.setAttribute('cssleft', window.innerWidth)
            element.animateMotion()
        });
        return
    }
    resize(val) {
        console.log('attempting to center story')
        if (this.expand == 'true' && val == 'r') {
            console.log('@nextElement')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active').nextElementSibling
        }
        if (this.expand == 'true' && val == 'l') {
            console.log('@previousElement')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active').previousElementSibling
        }
        if (this.expand == 'false' || val == null){
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active')
        }
        if (story.classList.contains('0')) {
            console.log('0')
            var varU = (window.innerWidth / 2) - 150
        }
        if (story.classList.contains('1')) {
            console.log('1')
            var varU = (window.innerWidth / 2) - 450
        }
        if (story.classList.contains('2')) {
            console.log('2')
            var varU = (window.innerWidth / 2) - 750
        }
        if (story.classList.contains('3')) {
            console.log('3')
            var varU = (window.innerWidth / 2) - 1050
        }
        if (story.classList.contains('4')) {
            console.log('4')
            var varU = (window.innerWidth / 2) - 1350
        }
        console.log(varU)
        this.cssLeft = varU
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft', this.cssLeft)
            element.animateMotion()
        });
        return
    }
    connectedCallback() {
        this.cssLeft = 0
        console.log('story connected')
        this.render();
        this.disconnectedCallback()
    }
    static get observedAttributes() {
        return [
            'rclick', 'lclick', 'elementleft', 'resize', 'img', 'h1', 'h2', 'expand','close'
        ];
    }
    render() {
        console.log('BACKFACE ==: ' + this.backface)
        if(this.backface){
            console.log('story render backface')
            this.shadow.innerHTML = `
            ${this.styleTemplate}
            <es-closebutton></es-closebutton>
            <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
            <es-storybackface images=${this.imgset}></es-storybackface>
            `
        }
        else{
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
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
        width:300px;
        left:${this.cssLeft}px;
        position: relative;
        border-radius: 3px;
        height: 85vh;
        background-image: ${'url(' + bgO + ')'};
        background-color: #b1b1;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        transform: translate3d(0, -10%, -20px) scale3d(.7, .7, .7) rotateY(45deg);
        transform-style: preserve-3d;
        transition: 0.5s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 0.5;
        z-index:0;
    }
    :host(.active){
        opacity: 1;
        position: relative;
        transform: scale(0.8) translate3d(0, -10%, -20px) ;
        background-image: ${'url(' + bg + ')'};
        transition: 0.5s ease;
    }
    :host(.active)::after,
    :host::after{
        content: " ";
        border-radius: 10px;
        width: 100%;
        height: 10%;
        box-shadow: -10px 20px 16px 5px #00000008;
        position: absolute;
        background: linear-gradient(to top, #e51900, transparent, transparent);
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
        width: 100%;
        height:124vh;
        justify-content: space-evenly;
    }
        </style>
    `
    }
    get active() {
        return this.getAttribute('active')
    }
    set active(val) {
        return this.setAttribute('active', '')
    }
}

customElements.define('es-story', Story);
