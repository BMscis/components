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
        this.setup()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('story attributechange:' + this.classList)
        switch (prop) {
            case 'active':
                switch (newVal) {
                    case null:
                        this.moveBack()
                        return
                    case '':
                        return
                    case 'right':
                        this.moveMe('right')
                        return
                    case 'left':
                        this.moveMe('left')
                }
                return
            case 'cssx':
                switch (this.hasAttribute('active')) {
                    case true:
                        return
                    case false:
                        this.moveBack()
                        return
                }
            case 'expand':
                switch(this.hasAttribute('expand')){
                    case true:
                        this.xpand()
                        this.backface = 0
                        this.render()
                        return
                    case false:
                        return
                }
                return
            case 'close':
                this.cloze()
                return
            case 'resize':
                this.resize()
                return
        }

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
    get closeLeft() {
        return this.getAttribute('closeleft')
    }
    set closeLeft(val) {
        return this.setAttribute('closeleft', val)
    }
    get cssX() {
        return this.getAttribute('cssx')
    }
    set cssX(val) {
        this.setAttribute('staticx', val)
        return this.setAttribute('cssx', val)
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
    get expandX() {
        return this.getAttribute('expandx')
    }
    set expandX(val) {
        return this.setAttribute('expandx', val)
    }
    get staticX() {
        return this.getAttribute('staticx')
    }
    set staticX(val) {
        return this.setAttribute('staticx', val)
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
    setup() {
        var i = window.innerWidth
        var c = Math.round(0.2*i)
        var x = Math.round(i+c)
        var y = 300
        var z = this.offsetLeft
        var position = Math.round((x-y)/2)
        var next = Math.round(-(x-(3*y))/2)
        var previous = Math.round((x-(3*y))/2)
        var xp = -z + c
        var cl = -z - c
        var cz = (-c - x)/2
        var cd = Math.round((-c - x + i - (3*y))/2)
        console.log('SETUP: i'+i )
        console.log('SETUP: c'+c )
        console.log('SETUP: x'+x )
        console.log('SETUP: y'+y )
        console.log('SETUP: z'+z )
        console.log('SETUP: position'+ position)
        console.log('SETUP: next'+ next)
        console.log('SETUP: previous'+ previous)
        console.log('SETUP: xpand'+ xp)
        console.log('SETUP: coll'+ cl)
        console.log('SETUP: close'+ cd)
        var windowWidth = Math.round(window.innerWidth / 2)
        var windowOffset = Math.round(windowWidth + (windowWidth * (20 / 100)))
        console.log('SETUP: windowOffet'+ windowOffset)
        var windowOffsetStart = Math.round(window.innerWidth * (20 / 100))
        var thisWdith = 300 / 2
        var centerPoint = windowOffset - thisWdith
        var thisOffset = this.offsetLeft
        var nextPoint = Math.round(centerPoint - 300)
        var previousPoint = Math.round(centerPoint - 300)
        var thisExpand = Math.round(-thisOffset + windowOffsetStart)
        var thisCollapse = Math.round(-thisOffset - windowOffset)
        var close = (thisCollapse - windowOffset) + thisOffset
        var center = centerPoint + close
        this.cssX = centerPoint + 'px'
        this.setAttribute('storyOffset', thisOffset)
        this.setAttribute('windowoffset', windowOffset)
        this.setAttribute('expandx', thisExpand)
        //this.staticX = centerPoint
        this.setAttribute('closeX', center)
        switch (this.hasAttribute('active')) {
            case true:
                this.moveActive()
                return
            case false:
                this.moveInactive()
        }
    }
    moveMe(val) {
        switch (val) {
            case 'right':
                var np = parseInt(this.cssX) - 300
                this.cssX = np + 'px'
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssx', this.cssX)
                });
                return
            case 'left':
                var np = parseInt(this.cssX) + 300
                this.cssX = np + 'px'
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssx', this.cssX)
                });

        }
    }
    moveBack() {
        this.moveInactive()
        return
    }
    xpand(){
        var ex = this.expandX
        this.setAttribute('cssx',ex + 'px')
        this.moveActive()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssx', this.cssX)
        });
        return
    }
    cloze(){
        this.setAttribute('cssx',this.staticX)
        this.removeAttribute('expand')
        this.removeAttribute('backface')
        this.moveActive()
        this.render()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssx', this.cssX)
        });
    }
    resize(){
        var windowWidth = Math.round(window.innerWidth / 2)
        var windowOffset = Math.round(windowWidth + (windowWidth * (20 / 100)))
        var windowOffsetStart = Math.round(window.innerWidth * (20 / 100))
        var thisWdith = 300 / 2
        var centerPoint = windowOffset - thisWdith - parseInt(this.storyOffset)
        this.cssX = centerPoint + 'px'
        this.moveActive()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssx', this.cssX)
        });

    }
    moveActive() {
        console.log("transform: translateX(" + this.cssX + ") scale(0.8)")
        if (this.hasAttribute('active')) {
            this.animate([
                { transform: "translateX(" + this.cssX + ")" }
            ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'cubic-bezier(.39,.11,.61,.84)'

                }
            )
        }
        else {
            this.animate([
                { transform: "translateX(" + this.cssX + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
            ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'cubic-bezier(.39,.11,.61,.84)'

                }
            )
        }

    }
    moveInactive() {
        console.log("INACTIVEtransform: translateX(" + this.cssX + ") scale(0.8)")
        this.animate([
            { transform: "translateX(" + this.cssX + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
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
            'active', 'move', 'cssx', 'expand', 'close', 'resize', 'expandx','staticx'
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
        width: 100%;
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
