import { CloseButton } from "../buttons/closeButton"
import { H1 } from "../typography/h1/h1"

export class CloseComponent extends HTMLElement{
    constructor(txt,textafter,ident){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.text = txt
        this.textafter = textafter
        this.ident = ident
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        this.addEventListener('resize',e=>{
            var html = document.querySelector('html').getAttribute('mobi')
            if(html === 'true'){
                this.setAttribute('style','position:relative')
                this.setAttribute('mobi','')
            }
            if(html === 'false'){
                this.setAttribute('style', 'position:absolute')
                if(this.hasAttribute('mobi')){
                    this.removeAttribute('mobi')
                }
            }
        })
        return
    }
    get getComponents(){
        return {"closebutton": new CloseButton(this.ident),"heading":new H1(this.text,this.textafter)}
    }
    static get observedAttributes(){
        return ['text','textafter']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case 'text':
                if(newVal != oldVal){
                    this.text = newVal
                }
                return
            case 'textafter':
                if(newVal != oldVal){
                    this.textafter = newVal
                }
                return
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    get textafter(){
        return this.getAttribute('textafter')
    }
    set textafter(val){
        return this.setAttribute('textafter',val)
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.closebutton)
        this.appendChild(this.components.heading)
        return
    }
    get styledTemplate(){
        return
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
        return
    }
}
customElements.define('es-closecomponent', CloseComponent);