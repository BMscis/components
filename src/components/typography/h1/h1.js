export class H1 extends HTMLElement{
    constructor(text,textafter){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.text = text
        this.textAfter = textafter
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.setAttribute("textafter", this.textAfter)
        var slt = document.createElement("text")
        slt.innerHTML = this.text
        this.appendChild(slt)
        return
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('es-heading', H1);