//components
import { Dimensions } from '../../../Classes/spacemaps/dimensions'
import  Navbutton from '../../buttons/navbutton'

export class Sidebar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
    }
    setup(){
        this.dimension = new Dimensions()
        window.addEventListener("resize", e=> {
            this.resize()
        })
    }
    static get observedAttributes(){
        return ['expand']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if( prop == 'expand'){
            if( newVal == 'true'){
                this.expand = 1
            }
            if( newVal == 'false'){
                this.expand = 0
            }
            else{
                return
            }
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.render()
    }
    get expand(){
        return this.getAttribute('expand')
    }
    set expand(val){
        if (val == 1){
        return this.setAttribute('expand','')
        }
        else{
            return this.removeAttribute('expand')
        }
    }
    resize(){
        this.style.height = this.dimension.sidebarSetup + "px"
    }
    render(){
        
        this.style = `height:${this.dimension.sidebarSetup + "px"};`
        this.appendChild(new Navbutton(true,"Portfolio"))
        this.appendChild(new Navbutton(false,"Crypto Meter"))
        this.appendChild(new Navbutton(false,"About Us"))
    }
    get styledTemplate(){
        return `<style>
        *{
            box-sizing: border-box;
            margin-left:1.5vw;
            margin-right:1.5vw;
        }
        es-sidebar{
            height:${this.dimension.sidebarSetup + "px"};
            z-index:2;
            position:relative;
            border-radius:2px;
            display:flex;
            background:transparent;
    }
    es-sidebar([expand]){
        left:0;
    }
    @media only Screen and (max-width:850px){
        es-sidebar{
        }
    }
        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-sidebar', Sidebar);