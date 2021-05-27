import { Dimensions } from '../../../Classes/spacemaps/dimensions.js';

export class BusinessCard extends HTMLElement {
    constructor(text) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({ mode: 'open' })
        this.text = text
        this.setup()
    }
    static get observedAttributes() {
        return ['']
    }
    setup(){
        this.dimension = new Dimensions()
        window.addEventListener('resize', e => {
            this.resize()
        })
    }
    resize(){
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.render()
        this.show()
    }
    render() {
        this.templates
    }
    get templates(){
        switch(this.text){
            case "Portfolio":
                this.shadow.innerHTML = `
                ${this.textBoard}
                ${this.styledTemplate}
                `
                return
            case "Graph":
                this.shadow.innerHTML = `
                ${this.graphStyle}
                ${this.graph}
                `
                return
            case "About Us":
                return this.aboutUs
        }
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
    get styledTemplate() {
        return `<style>

       :host{
        position: absolute;
        width: calc(95vw * 0.3);
        height: calc(78vh * 0.5);
        display:flex;
        flex-direction:row;
        top:14vh;
        left:5vw;
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
        .texture{
            position:absolute;
            opacity:0.8;
            left:0;
            width: calc(100% - 20px);
            height:calc(100% - 20px);
        }
        .infocontainer, .labelcontainer{
            display:flex;
            flex-direction:column;
            justify-content:start;
        }
        .labelcontainer{
        }
        .infocontainer{
        }
        text{
            font-size:10vmin;
            color:white;
            font-family:ACBoldCond;
            transition: 0.5s ease;
        }
        label, a, p{
            backdrop-filter: brightness(2);
            -webkit-backdrop-filter: brightness(2);
            font-family: ACLight;
            width:fit-content;
            font-size:larger;            
        }

        a,p{
            background: linear-gradient(to bottom right,#00368e 50%, #a90101);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin:0;
        }
        label{
            color: silver;
            font-variant-caps: all-petite-caps;
            font-size: larger;
            background: linear-gradient(to bottom right,#ceff1a 50%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            backdrop-filter: brightness(0.5);
            -webkit-backdrop-filter: brightness(0.5);
        }
        a{
            text-decoration: none;
            font-style: normal;
        }
        p{
            //padding:0;
        }
        address{
            color:gold;
            cursor:pointer;
        }
        :host([hide]){
            display: none
        }
         @media only screen and (max-width: 850px){
            :host{
                top:29vh
            }
            text{
                font-size:5vmin;
            }
        }
        </style>`
    }
    get aboutUs() {
        //this.borderImage = 'linear-gradient(to left,transparent 10%, blue 20%, red 30%, transparent 35%)'
        return`
        <div class=texture></div>
        <div class=labelcontainer>
        <label>Name: </label>
        <label>Email: </label>
        <label>Contact: </label>
        </div>
        <div class=infocontainer>
        <p>Melvin Wakhungu Wafula</p>
        <address>
        <a href="mailto:melvinwafula@gmail.com">
        melvinwafula@gmail.com
        </a>
        </address>
        <address>
        <a href="tel:+254729675138">
        +254729675138
        </a>
        </address>
        </div>
        `
    }
    get textBoard(){
        //this.borderImage = 'linear-gradient(to right,transparent 20%, blue 30%, red 40%, transparent 50%)'
        return '<es-textboard ></es-textboard>'
    }
    get graph(){
        return `<es-graph></es-graph>`
    }
    get graphStyle(){
        return `
        <style>
            :host{
            width:100%;
            height:100%;
            display:grid;
            }
        </style>
        `

    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
}
customElements.define('es-businesscard', BusinessCard);