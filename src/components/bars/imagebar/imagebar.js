import { P1 } from "../../typography/paragraph/p1"

export class ImageBar extends HTMLElement{
    constructor(src,alt,tooltip,description){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.source = src
        this.altern = alt
        this.tooltip = tooltip
        this.description = description
        this.components = {}
        this.setup()
    }
    static get observedAttributes(){
        return ['src','text','description']
    }
    setup(){
        this.components = this.getComponents
        this.addEventListener('focusin',e=>{
            this.setAttribute('hover','')
        })
    }
    get getComponents(){
        var imag = document.createElement("img")
        imag.src = this.source
        imag.alt = this.altern
        var txt = new P1(this.tooltip)
        txt.classList.add("tooltiptext")
        var dsr = new P1(this.description)
        dsr.classList.add("descriptiontext")
        return {"image":imag, "tooltip":txt,"description":dsr}
    }
    attributeChangedCallback(prop,oldVal,newVal){

    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        // this.addEventListener('mouseover', e=>{
        //     this.scrollIntoView(alignToTop)
        // })

        this.render()
    }
    render(){
        this.appendChild(this.components.image)
        this.appendChild(this.components.tooltip)
        this.appendChild(this.components.description)
    }
    get styledTemplate(){
        return 
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-imagebar', ImageBar);