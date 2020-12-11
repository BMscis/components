//imports
import anime from '../../../node_modules/animejs/lib/anime.es.js';

//components
import '../h1/h1'
import '../h2/h2'
import '../buttons/anchorButton'
import '../paragraph/p1'
import './storyImage'

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
        console.log('connected: '+ this.isConnected)
        // if(prop === 'elementleft'){
        //     const eLeft = newVal
        //     const cLeft = newVal/4
        //     this.cssLeft = cLeft
        //     return
        // }
        if(prop === 'rclick'){
            console.log('move right')
            console.log(newVal)
            if(newVal === "true"){
                this.moveRight()
                this.disconnectedCallback()
            }
            else{
                return
            }
        }
        if(prop === 'lclick'){
            console.log('move left')
            console.log(newVal)
            if(newVal === "true"){
                this.moveLeft()
                this.disconnectedCallback()
            }
            else{
                return
            }
        }
        if(prop === 'resize'){
            if(newVal === "true"){
                this.resize()
            }
        }
    }
    // get elementLeft(){
    //     return this.getAttribute('elementleft')
    // }
    // set elementLeft(val){
    //     return this.setAttribute('elementleft',window.innerWidth)
    // }
    get cssLeft(){
            return this.getAttribute('cssleft')
    }
    set cssLeft(val){
        console.log('CSS VAL: '+ val)
        if(val == 0){
            return this.setAttribute('cssleft',(window.innerWidth/2) -150)
        }
        console.log(val === 300)
        console.log(val === -300)
        if(val === 300 || val === -300){
            var cssL = this.cssLeft - val
            console.log('CSS CHANGE: '+ cssL)
            return this.setAttribute('cssleft',cssL)
        }
        else{
            console.log('CSSLEFT VAL: '+ val)
            return this.setAttribute('cssleft',val)
        }
    }
    animateMotion(){
        anime({
            targets:this,
            left:this.cssLeft,
            easing:'easeOutBack',
            duration:500,
        })
    }
    moveRight(){
        console.log('attempting to display right story')
        this.cssLeft = 300
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft',this.cssLeft)
            element.animateMotion()
        });
        return
    }
    moveLeft(){
        console.log('attempting to display left story')
        this.cssLeft = -300
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft',this.cssLeft)
            element.animateMotion()
        });
        return
    }
    resize(){
        console.log('attempting to center story')
        var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active')
        if (story.classList.contains('0')){
            var varU = (window.innerWidth/2)- 150
        }
        if (story.classList.contains('1')){
            var varU = (window.innerWidth/2)- 450
        }
        if (story.classList.contains('2')){
            var varU = (window.innerWidth/2)- 750
        }
        if (story.classList.contains('3')){
            var varU = (window.innerWidth/2)- 1050
        }
        if (story.classList.contains('4')){
            var varU = (window.innerWidth/2)- 1350
        }
        this.cssLeft = varU
        var stories = document.querySelector("es-carousel").shadowRoot.querySelectorAll("es-story")
        stories.forEach(element => {
            element.setAttribute('cssleft',this.cssLeft)
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
            'rclick','lclick','elementleft','resize'
        ];
    }
    render() {
        console.log('story render')
        this.shadow.innerHTML = `
        ${this.styleTemplate}
        <es-image></es-image>
        <es-heading></es-heading>
        <es-heading2></es-heading2>
        <es-p></es-p>
        <es-button></es-button>`
    }
    disconnectedCallback() {
        console.log('story disconnected')
    }
    get styleTemplate() {
        
        return `<style>
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
        justify-content: center;
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
        </style>
    `
    }
    get active(){
        return this.getAttribute('active')
    }
    set active(val){
        return this.setAttribute('active','')
    }
}

customElements.define('es-story', Story);
