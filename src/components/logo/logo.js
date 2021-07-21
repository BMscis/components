import { Dimensions } from "../../Classes/spacemaps/dimensions"

export class Logo extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //console.log('Logo constructed')
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
    }
    setup(){
        this.dimension = new Dimensions()
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('Logo attribute change')
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        //console.log('Logo connected')
        this.render()
    }
    resize(){
        console.log("RESIZING LOGO")
    }
    render(){
        //console.log('Logo rendering')
        // this.style = `
        // width: ${this.dimension.logoSetup + "px"};
        // height: ${this.dimension.logoSetup + "px"};`
        var rx = document.createElement('div')
        rx.classList.add('logo')
        this.appendChild(rx)
        return
    }
    get styledTemplate(){
        return `<style>
        es-logo{
            width:auto;
            height:auto;
            margin:auto;
            display:block;
        }
        .logo
         {
            transform: scale(var(--ggs,1))
            box-sizing: border-box;
            width: ${this.dimension.logoSetup + "px"};
            height: ${this.dimension.logoSetup + "px"};
            border-radius: 3px;
            background-image: linear-gradient(to bottom right , #3ffd1e ,#1b5028 46% 45%,transparent 55%, #1b5028 55% ,#3bab57 );
            backdrop-filter: saturate(2) blur(0.2px);
            -webkit-backdrop-filter: saturate(2) blur(0.2px);
            transform: rotate(45deg);
            transition:0.5s ease;
            position:relative;
            margin:auto;
        }
        .logo(:hover){
            cursor: pointer;
        }
        .logo(:hover)::after,.logo(:hover)::before {
            cursor: pointer;
            animation-name:flashlogo;
            animation-duration:1s;
            animation-fill-mode: both;
            animation-timing-function: linear;
        }
        .logo::after,.logo::before{
            content:'';
            clip-path: polygon(50% 26px, 26% 50%, 50% 70%, 0px 50%);
            height: 80px;
            width: 80px;
            position: absolute;
            background-image: radial-gradient(circle at top,#3ffd1e,32%,#010500 63%);
            background-size: contain;
            background-repeat: no-repeat;
            
        }
        .logo::after {
            
            top: -28.75px;
            left: -32px;
            transform: rotate(310deg);
        }
        .logo::before {
            top: -30.45px;
            right: -32px;
            transform: rotate(133deg);
            backdrop-filter: brightness(0.6);
            -webkit-backdrop-filter: brightness(0.6);
        }
        @media only screen and (max-width: 850px){
            .logo{
                left:revert;
                right: calc(50% - 10px);
            }
        }
        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
        //console.log('Logo disconnect')
    }
}
customElements.define('es-logo', Logo);