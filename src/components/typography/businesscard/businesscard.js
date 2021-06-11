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
        this.appendChild(this.components[this.text])
        this.appendChild(this.styletemplate[this.text])
        return
    }
    show(){
            // anime({
            //     targets:this,
            //     opacity:[0,1],
            //     delay:500,
            //     duration:1000,
            //     easing:'easeOutQuart'
            // })
        return
    }
    get portfolioStyle() {
        return `
        
        es-businesscard{
            position: absolute;
            width: calc(95vw * 0.3);
            height: calc(78vh * 0.5);
            display:flex;
            flex-direction:row;
            top:14vh;
            left:0vw;
            border-radius: 10px;
            background: transparent;
            border-top: 2px;
            //border-top-style: dotted;
            //border-top-color: blueviolet;
            border-image: linear-gradient(to bottom right,#00368e 50%, transparent);
            border-image-slice: 8;
            opacity:0;
            z-index:1;
        }
        es-businesscard .texture{
            position:absolute;
            opacity:0.8;
            left:0;
            width: calc(100% - 20px);
            height:calc(100% - 20px);
        }
        es-businesscard .infocontainer, .labelcontainer{
            display:flex;
            flex-direction:column;
            justify-content:start;
        }
        es-businesscard .labelcontainer{
        }
        es-businesscard .infocontainer{
        }
        es-businesscard text{
            font-size:10vmin;
            color:white;
            font-family:ACBoldCond;
            transition: 0.5s ease;
        }
        es-businesscard label, es-businesscard a, es-businesscard p{
            backdrop-filter: brightness(2);
            -webkit-backdrop-filter: brightness(2);
            font-family: ACLight;
            width:fit-content;
            font-size:larger;            
        }
        es-businesscard a,es-businesscard p{
            background: linear-gradient(to bottom right,#00368e 50%, #a90101);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin:0;
        }
        es-businesscard label{
            color: silver;
            font-variant-caps: all-petite-caps;
            font-size: larger;
            background: linear-gradient(to bottom right,#ceff1a 50%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            backdrop-filter: brightness(0.5);
            -webkit-backdrop-filter: brightness(0.5);
        }
        es-businesscard a{
            text-decoration: none;
            font-style: normal;
        }
        es-businesscard address{
            color:gold;
            cursor:pointer;
        }
        es-businesscard[hide]{
            display: none
        }
            @media only screen and (max-width: 850px){
            es-businesscard{
                display:none;
                top:29vh
            }
            es-businesscard text{
                font-size:5vmin;
            }
        }
        
        `
    }
    get graphStyle(){
        return `
            
            es-businesscard{
            width:100%;
            height:100%;
            display:grid;
            }
            
        `
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
        return
    }
}
customElements.define('es-businesscard', BusinessCard);