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
            case 'cssmove':
                switch (this.hasAttribute('active')) {
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') + ' has ACTIVE: cssmove change')
                        return
                    case false:
                        console.log('STORY: '+ this.getAttribute('class') + ' has NO ACTIVE: cssmove change')
                        this.moveInactive()
                        return
                }
            case 'expandstory':
                switch(this.hasAttribute('expandstory')){
                    case true:
                        console.log('STORY: '+ this.getAttribute('class') +' EXPAND')
                        this.xpand()
                        this.backface = 0
                        this.render()
                        return
                    case false:
                        return
                }
                case 'close':
                console.log('STORY: '+ this.getAttribute('class') +' CONTRACT')
                this.cloze()
                return
            case 'resize':
                console.log('STORY: '+ this.getAttribute('class') +' RESIZE')
                this.resize()
                this.removeAttribute('resize')
                return
            case 'imgset':
                this.imgset
                return
            case 'ptext':
                this.ptext
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
    get cssMove() {
        return this.getAttribute('cssmove')
    }
    set cssMove(val) {
        return this.setAttribute('cssmove', val)
    }
    get cssMoveClose() {
        return this.getAttribute('cssmoveclose')
    }
    set cssMoveClose(val) {
        return this.setAttribute('cssmoveclose', val)
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
    get expandStory() {
        return this.getAttribute('expandstory')
    }
    set expandStory(val) {
        return this.setAttribute('expandstory', val)
    }
    get expandLeft() {
        return this.getAttribute('expandleft')
    }
    set expandLeft(val) {
        return this.setAttribute('expandleft', val)
    }
    get imgset() {
        return this.imgset
    }
    set imgset(val) {
        return this.imgset = val
    }
    get ptext(){
        return this.getAttribute('ptext')
    }
    set ptext(val){
        return this.setAttribute('ptext')
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
        // fullWidth = clientwidth
        // textBoardSpace = 20% of clientwidth
        // storySpace = offset to left of screen
        // storyWidth = storywidth
        // storyOffset = story offset
        // centerPosition = central position of story
        // next = next position
        // previous = previous position
        // expandLeft = expand story positon
        // cd = close position

        var fullWidth = document.querySelector('es-carousel').clientWidth
        var textBoardSpace = Math.round(0.2*fullWidth)
        var storyOffset = this.offsetLeft
        if (fullWidth <= 700 ){
            var storySpace = Math.round(fullWidth)
            var expandLeft = Math.round(-storyOffset )
        }
        else{
            var storySpace = Math.round(fullWidth + textBoardSpace)
            var expandLeft = Math.round(-storyOffset + textBoardSpace)
        }
        var storyWidth = 300
        var centerPosition = Math.round((storySpace - storyWidth)/2)
        var cPosition = Math.round((fullWidth-storyWidth)/2)

        this.cssMove = centerPosition + 'px'
        this.setAttribute('storyOffset', storyOffset)
        this.setAttribute('expandleft', expandLeft)
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
                var cssmove = this.cssMove
                var moveStory = parseInt(cssmove) - 300
                var moveStoryPx = moveStory + 'px'
                this.cssMove = moveStoryPx
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssmove', moveStoryPx)
                });
                return
            case 'left':
                console.log('STORY: '+ this.getAttribute('class')+ 'moveLEFT')
                var moveStory = parseInt(this.cssMove) + 300
                var moveStoryPx = moveStory + 'px'
                this.cssMove = moveStoryPx
                this.moveActive()
                var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
                storyInacitve.forEach(element => {
                    element.setAttribute('cssmove', moveStoryPx)
                });

        }
    }
    xpand(){
        var fullWidth = document.querySelector('es-carousel').clientWidth
        var textBoardSpace = Math.round(0.2*fullWidth)
        if (fullWidth <= 700){
            var storyOffset = this.offsetLeft
            var expandLeft = Math.round(-storyOffset )
        }
        else{
            var storyOffset = this.offsetLeft
            var expandLeft = Math.round(-storyOffset + textBoardSpace)
        }
        var expandLeftPx = expandLeft + 'px'
        this.cssMove  = expandLeftPx
        this.moveActive()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssmove', expandLeftPx)
        });
        return
    }
    cloze(){
        var fullWidth = document.querySelector('es-carousel').clientWidth
        var textBoardSpace = Math.round(0.2*fullWidth)
        var storyOffset = this.offsetLeft
        var storyWidth = 300

        if (fullWidth <= 700 ){
            var storySpace = Math.round(fullWidth)
        }
        else{
            var storySpace = Math.round(fullWidth + textBoardSpace)
        }

        var centerPosition = Math.round((storySpace - storyWidth)/2) - storyOffset
        var centerPositionPx = centerPosition + 'px'

        this.storyOffset = storyOffset

        this.cssMove = centerPositionPx
        this.removeAttribute('expandstory')
        this.removeAttribute('backface')
        this.moveActive()
        this.render()
        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssmove', centerPositionPx)
        });
    }
    resize(){
        var fullWidth = document.querySelector('es-carousel').clientWidth
        var textBoardSpace = Math.round(0.2*fullWidth)
        var storyOffset = this.offsetLeft
        var storyWidth = 300

        if (fullWidth <= 700 ){
            var storySpace = Math.round(fullWidth)
        }
        else{
            var storySpace = Math.round(fullWidth + textBoardSpace)
        }
        var centerPosition = Math.round((storySpace - storyWidth)/2) - storyOffset
        var centerPositionPx = centerPosition + 'px'

        this.cssMove = centerPositionPx
        this.storyOffset = storyOffset
        
        this.moveActive()

        var storyInacitve = document.querySelector('es-carousel').shadow.querySelectorAll('es-story:not([active])')
        storyInacitve.forEach(element => {
            element.setAttribute('cssmove', centerPositionPx)
        });
        
        console.log("RESIZED")
        return
    }
    moveActive() {
        var cssmove = this.cssMove
        console.log('STORY: ' + this.getAttribute('class') +" transform: translateX(" + cssmove + ") scale(0.8)")
        if (this.hasAttribute('active')) {
            this.animate([
                { transform: "translateX(" + cssmove + ")" }
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
                { transform: "translateX(" + cssmove + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
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
        let cssmove = this.cssMove
        console.log('STORY: ' + this.getAttribute('class') + " INACTIVE-TRANSFORM: translateX(" + cssmove + ") scale(0.8)")
        this.animate([
            { transform: "translateX(" + cssmove + ") scale3d(0.7,0.7,0.7) rotateY(45deg)" }
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
            'active', 'move', 'cssmove', 'expandstory', 'close', 'resize', 'expandleft','imgset','ptext'
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
    :host([expandstory]){
        background-image:none;
        backdrop-filter: blur(40px);
        min-width: 80%;
        height:100%;
        justify-content: space-evenly;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
    }
    :host([expandstory]:hover){
        transform: scale(var(--ggs,1)) rotate(360deg);

    }
        </style>
    `
    }
}
customElements.define('es-story', Story);