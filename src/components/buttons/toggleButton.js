import { Dimensions } from "../../Classes/spacemaps/dimensions"

//import btnGradient from '../../assets/svg/buttonGradient.gif'
export class ToggleButton extends HTMLElement {
    constructor(direction) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.direction = direction
        this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
    }
    static get observedAttributes() {
        return ['']
    }
    get styleTemplate() {
        return `
            <style>
            *{
                outline:none;
            }
            :host{
                cursor: pointer;
                position: absolute;
                top:${this.dimension.toggleVerticalPosition + "px"};
                transform: scale(var(--ggs,1));
                border-image-slice: 8;
                border-image-width: 7px;
                transition: 0.5s ease;
                z-index:2;
            }
            :host([prev]){
                transform-origin: right;
                left:${this.dimension.toggleHorizontalPosition + "px"};
            }
            :host([next]){
                transform-origin: right;
                right:${this.dimension.toggleHorizontalPosition + "px"};
            }
            :host::before{
                content: "";
                position: absolute;
                transform: scale(var(--ggs,1)) rotate(45deg);
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);
                border-radius: 100px;
                cursor: pointer;
                border-image-width: 2px;
            }
            :host::after{
                content: "";
                box-sizing: border-box;
                position: absolute;
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);

                border-radius:25%;
            }

            :host([prev])::after{
                border-bottom: 7px inset;
                border-left: 7px solid white;
                transform: rotate(45deg);
            }
            :host([next])::after{
                border-bottom: 7px inset;
                border-right: 7px solid white;
                transform: rotate(-45deg);
            }

            :host([hide]){
                display:none;
            }
            :host(:hover){
                transform: scaleY(1.5) scaleX(2);
            }
            @media only Screen and (max-width:850px){
            }
            </style>
        `
    }
    setup(){
        this.dimension = new Dimensions()
        this.dimension.toggleSetup
        window.addEventListener('resize', e => {
            this.resize()
        })
        this.addEventListener('orientationchange', e => {
            this.setup()
            this.visibility()
            this.render()
        })
        this.addEventListener('click', e => {
            console.log()
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            switch (this.hasAttribute('prev')) {
                case true:
                    if (story.previousElementSibling.nodeName == 'ES-STORY') {
                        if (story.previousElementSibling) {
                            story.active = false
                            story.previousElementSibling.active = true
                            var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
                            stories.forEach(element => {
                                element.next("left")
                            });
                        }
                    }
                    return
                case false:
                    if (story.nextElementSibling.nodeName == 'ES-STORY') {
                        if (story.nextElementSibling) {
                            story.active = false
                            story.nextElementSibling.active = true
                            var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
                            stories.forEach(element => {
                                element.next("right")
                            });
                            //story.nextElementSibling.translateX('right')
                        }
                    }
                    return
            }
        })
    }
    resize(){
        this.dimension.toggleSetup        
        this.visibility()
        this.render()
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.visibility()

        this.render()
        this.setAttribute(this.direction, '')
    }
    visibility() {
        switch(window.Espii.mobile)
        {
            case true:
                return this.toggleAttribute("hide",false)
            case false:
                return this.toggleAttribute("hide",false)
        }
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }

    render() {
        return this.shadow.innerHTML = `
            ${this.styleTemplate}
        `
    }
}
customElements.define('es-toggle', ToggleButton);
