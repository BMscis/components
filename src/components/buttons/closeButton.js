export class CloseButton extends HTMLElement{
    constructor(ident){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.ident = ident
        this.setup()
        return
    }
    setup(){
        return
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        return
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
        return
    }
    render(){
        var xm = document.createElement('a')
        xm.setAttribute("href",this.ident)
        this.appendChild(xm)
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
    }
}
customElements.define('es-closebutton', CloseButton);