class Toolbar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-menubutton></es-menubutton>
            <es-searchbar contracted></es-searchbar>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            height:10vmin;
            width:95vw;
            //z-index:3;
            position:fixed;
            bottom:0;
            background:white;
        }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-toolbar', Toolbar);