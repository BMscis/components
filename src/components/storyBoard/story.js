//imports
import anime from '../../../node_modules/animejs/lib/anime.es.js';

//components
import '../typography/h1/h1'
import '../typography/h2/h2'
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
        console.log('STORY: '+ this.getAttribute('class') + ' ATTRIBUTE-CHANGE:' + prop)
        switch (prop) {
            case 'active':
                switch (newVal) {
                    case null:
                        console.log('STORY: '+ this.getAttribute('class') + ' ACTIVE: moveback')
                        this.moveInactive()
                        return
                    case '':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: none')
                        return
                    case 'right':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: right')
                        this.moveMe('right')
                        return
                    case 'left':
                        console.log('STORY: '+ this.getAttribute('class') +' ACTIVE: left')
                        this.moveMe('left')
                }
                return
            case 'cssx':
                switch (this.hasAttribute('active')) {
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') + ' has ACTIVE: cssx change: ' + this.cssX)
                        return
                    case false:
                        console.log('STORY: '+ this.getAttribute('class') + ' has NO ACTIVE: cssx change: ' + this.cssX)
                        this.moveBack()
                        return
                }
            case 'expand':
                switch(this.hasAttribute('expand')){
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') +' EXPAND')
                        this.xpand()
                        this.backface = 0
                        this.render()
                        return
                    case false:
                        return
                }
                return
                case 'close':
                console.log('STORY: '+ this.getAttribute('class') +' CONTRACT')
                this.cloze()
                return
            case 'resize':
                console.log('STORY: '+ this.getAttribute('class') +' RESIZE')
                this.resize()
                return
            case 'imgset':
                this.imgset
                return
            case 'staticx':
                console.log('STORY: '+ this.getAttribute('class') + ' - StaticX change' )
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
        
        return this.imgset
    }
    set imgset(val) {
        return this.imgset = val
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
    get ptext(){
        return this.getAttribute('ptext')
    }
    set ptext(val){
        return this.setAttribute('ptext')
    }
    setup() {
        // i = clientwidth
        // c = 20% of clientwidth
        // x = offset to left of screen
        // y = storywidth
        // z = story offset
        // position = central position of story
        // next = next position
        // previous = previous position
        // xp = expand story positon
        // cd = close position

        var i = document.querySelector('es-carousel').clientWidth
        var c = Math.round(0.2*i)
        if (i <= 700){
            var x = Math.round(i)
        }
        else{
            var x = Math.round(i+c)
        }
        var y = 300
        var z = this.offsetLeft
        var position = Math.round((x-y)/2)
        var cPosition = Math.round((i-y)/2)
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
        this.cssX = position + 'px'
        this.setAttribute('storyOffset', z)
        this.setAttribute('expandx', xp)
        this.setAttribute('closeX', cd)
        this.setAttribute('Cposition',cPosition)
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
                console.log('STORY: '+ this.getAttribute('class')+ ' moveRIGHT')
                var staticx = this.cssX
                var np = parseInt(staticx) - 300
                this.cssX = np + 'px'
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssx', np + 'px')
                });
                return
            case 'left':
                console.log('STORY: '+ this.getAttribute('class')+ 'moveLEFT')
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
        var cW = document.querySelector('es-carousel').clientWidth
        var windowWidth = Math.round(cW / 2)
        var i = document.querySelector('es-carousel').clientWidth
        var c = Math.round(0.2*i)
        if (i <= 700){
            var x = Math.round(i)
        }
        else{
            var x = Math.round(i+c)
        }
        var y = 300
        var z = this.offsetLeft
        var position = Math.round((x-y)/2)

        this.cssX = position + 'px'
        this.moveActive()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssx', this.cssX)
        });

    }
    moveActive() {
        console.log('STORY: ' + this.getAttribute('class') +" transform: translateX(" + this.cssX + ") scale(0.8)")
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
        let cssX = this.cssX
        console.log('STORY: ' + this.getAttribute('class') + " INACTIVE-TRANSFORM: translateX(" + cssX + ") scale(0.8)")
        this.animate([
            { transform: "translateX(" + cssX + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
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
            'active', 'move', 'cssx', 'expand', 'close', 'resize', 'expandx','staticx','imgset'
        ];
    }
    render() {
        console.log('BACKFACE ==: ' + this.backface)
        if (this.backface) {
            console.log(' story render backface')
            this.shadow.innerHTML = `
            ${this.styleTemplate}
            <es-closebutton></es-closebutton>
            <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
            <es-storybackface images=></es-storybackface>
            `
        }
        else {
            console.log('story render')
            this.shadow.innerHTML = `
        ${this.styleTemplate}
        <es-image img = ${this.img}></es-image>
        <es-heading text=${this.h1} textafter=${this.h2}></es-heading>
        <es-p text='${this.ptext}'></es-p>
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
        filter: blur(5px);
    }
    :host([active]){
        opacity: 1;
        position: relative;
        background-image: url(${bg});
        transition: 0.5s ease-in-out;
        box-shadow: 2px 3px 19px 2px rgb(0 0 0 / 71%), 0 0 2px 1px rgb(0 0 0 / 76%);
        transform-style: preserve-3d;
        transform-origin:center;
        filter: blur(0px);
        z-index:1;

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
    :host([expand]:hover){
        transform: scale(var(--ggs,1)) rotate(360deg);

    }
        </style>
    `
    }
}
customElements.define('es-story', Story);