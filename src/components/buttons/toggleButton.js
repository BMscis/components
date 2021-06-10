import { Dimensions } from "../../Classes/spacemaps/dimensions"

//import btnGradient from '../../assets/svg/buttonGradient.gif'
export class ToggleButton extends HTMLElement {
    constructor(direction) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.direction = direction
        //this.shadow =this.attachShadow({ mode: 'open' })
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
            es-togglebutton{
                cursor: pointer;
                position: absolute;
                top:${this.dimension.toggleVerticalPosition + "px"};
                transform: scale(var(--ggs,1));
                border-image-slice: 8;
                border-image-width: 7px;
                transition: 0.5s ease;
                z-index:2;
            }
            es-togglebutton([prev]){
                transform-origin: right;
                left:${this.dimension.toggleHorizontalPosition + "px"};
            }
            es-togglebutton([next]){
                transform-origin: right;
                right:${this.dimension.toggleHorizontalPosition + "px"};
            }
            es-togglebutton::before{
                content: "";
                position: absolute;
                transform: scale(var(--ggs,1)) rotate(45deg);
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);
                border-radius: 100px;
                cursor: pointer;
                border-image-width: 2px;
            }
            es-togglebutton::after{
                content: "";
                box-sizing: border-box;
                position: absolute;
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);

                border-radius:25%;
            }

            es-togglebutton([prev])::after{
                border-bottom: 7px inset;
                border-left: 7px solid white;
                transform: rotate(45deg);
            }
            es-togglebutton([next])::after{
                border-bottom: 7px inset;
                border-right: 7px solid white;
                transform: rotate(-45deg);
            }

            es-togglebutton([hide]){
                display:none;
            }
            es-togglebutton(:hover){
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
        // window.addEventListener('resize', e => {
        //     this.resize()
        // })
        // this.addEventListener('orientationchange', e => {
        //     this.setup()
        //     this.visibility()
        //     this.render()
        // })
        this.addEventListener('click', e => {
            console.log("click")
            // var story = document.querySelector('es-story[active]')
            // switch (this.hasAttribute('prev')) {
            //     case true:
            //         if (story.previousElementSibling.nodeName == 'ES-STORY') {
            //             if (story.previousElementSibling) {
            //                 story.removeAttribute("active")
            //                 story.previousElementSibling.setAttribute("active", "")
            //                 // var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
            //                 // stories.forEach(element => {
            //                 //     element.next("left")
            //                 // });
            //             }
            //         }
            //         return
            //     case false:
            //         if (story.nextElementSibling.nodeName == 'ES-STORY') {
            //             if (story.nextElementSibling) {
            //                 story.removeAttribute("active")
            //                 story.nextElementSibling.setAttribute("active","")
            //                 // var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
            //                 // stories.forEach(element => {
            //                 //     element.next("right")
            //                 // });
            //                 //story.nextElementSibling.translateX('right')
            //             }
            //         }
            //         return
            // }
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
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }

    render() {
        //this.style.top = this.dimension.toggleVerticalPosition + "px"
        return 
    }
}
customElements.define('es-toggle', ToggleButton);
