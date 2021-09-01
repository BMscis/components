import { CloseButton } from "../Buttons/closeButton"
import { CardHeader } from "../Typography/Heading/CardHeader"
import { EspiiElement } from "../../Interfaces/index"
export class CloseHeading extends EspiiElement{
    identity: string
    constructor(heading:string,lowerHeading:string,identity:string){
        super()
        this.text = heading
        this.lowerHeading = lowerHeading
        this.identity = identity
        this.setup()
        return
    }
    setup(){
        this.getComponents
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
        this.component = {
            CloseButton: new CloseButton(this.identity),
            CardHeader: new CardHeader(this.text,this.lowerHeading),
        }
        return
    }
    static get observedAttributes(){
        return ['text','lowerHeading']
    }
    attributeChangedCallback(prop:string,oldVal:string,newVal:string){
        switch(prop){
            case 'text':
                if(newVal != oldVal){
                    this.text = newVal
                }
                return
            case 'lowerHeading':
                if(newVal != oldVal){
                    this.lowerHeading = newVal
                }
                return
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        this.setAttribute('text',val)
        return 
    }
    get lowerHeading(){
        return this.getAttribute('lowerHeading')
    }
    set lowerHeading(val){
        this.setAttribute('lowerHeading',val)
        return 
    }
    override render(){
        this.appendChild(this.component.CloseButton)
        this.appendChild(this.component.CardHeader)
        return
    }
}
customElements.define('es-closeheading', CloseHeading);