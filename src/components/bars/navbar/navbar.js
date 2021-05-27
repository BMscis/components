//components

import { Dimensions } from "../../../Classes/spacemaps/dimensions"

//images
export class Navbar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
        this.setup()
    }
    static get observedAttributes(){
        return ['']
    }
    setup(){
        this.dimension = new Dimensions()
        window.addEventListener("resize", e=> {
            this.resize()
        })
        window.addEventListener('orientationchange',e=>{
            this.resize()
        })
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case 'render':
                this.render()
                return
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.render()
    }
    resize(){
        this.style.height = this.dimension.navbarSetup + "px"
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-label text='Welcome to espii club.' textafter=''></es-label>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
        position:relative;
        width:fit-content;
        height:${this.dimension.navbarSetup + "px"};
        display:flex;
        justify-content:flex-end;
        align-items:center;
        z-index:2;
    }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-navbar', Navbar);