export class Component extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.getComponents
        return
    }
    get getComponents(){
        return
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        return
    }
    render(){
        this.innerHTML = `
        `
        return
    }
    get styleTemplate(){
        return``
    }
    get htmlTemplate(){
        return``
    }
disconnectedCallback(){
        hide(this)
        removeAllChildren(this)      
        return
    }
}
customElements.define('es-component', Component);