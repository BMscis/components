import { Dimensions } from '../../../Classes/spacemaps/dimensions.js';
import { AboutUs } from './aboutus/aboutus.js';
import { Graph } from './graphs/graph.js';
import { Textboard } from './textboard/textboard.js';

export class BusinessCard extends HTMLElement {
    constructor(text) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({ mode: 'open' })
        this.text = text
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return ['']
    }
    setup(){
        this.dimension = new Dimensions()
        this.components = this.getcomponents
        this.styletemplate = this.getstyles
        window.addEventListener('resize', e => {
            this.resize()
        })
        return
    }
    get getcomponents(){
        switch(this.text){
            case "Portfolio":
                return {"Portfolio":new Textboard()}
            case "Crypto Meter":
                return {"Crypto Meter":new Graph()}
            case "About Us":
                return {"About Us":new AboutUs()}
        }
        return
    }
    get getstyles(){
        var sm = document.createElement("style")
        switch(this.text){
            case "Portfolio":
                sm.innerHTML = this.portfolioStyle
                return {"Portfolio":sm}
            case "Crypto Meter":
                sm.innerHTML = this.graphStyle
                return {"Crypto Meter": sm}
            case "About Us":
                sm.innerHTML = this.portfolioStyle
                return {"About Us":sm}
        }
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
        //this.show()
        return
    }
    render() {
        this.setAttribute("name", this.text)
        this.appendChild(this.components[this.text])
        this.appendChild(this.styletemplate[this.text])
        return
    }
    show(){
            this.animate(
                [{opacity:1}],
                {
                    duration: 1000,
                    easing: "ease-in-out",
                    fill:'forwards'
                }
            )
        return
    }
    hide(){
        this.animate(
            [{opacity:0}],
            {
                duration: 1000,
                easing: "ease-in-out",
                fill:'forwards'
            }
        )
        return
        }
    get portfolioStyle() {
        return
    }
    get graphStyle(){
        return `

        `
    }
    disconnectedCallback(){
        this.hide()
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
        return
    }
}
customElements.define('es-businesscard', BusinessCard);