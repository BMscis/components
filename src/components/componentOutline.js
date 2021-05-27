class Component extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
        this.setup()
    }
    setup(){
        
    }
    static get observedAttributes(){
        return ['']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case '':
                return
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style></style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-component', Component);