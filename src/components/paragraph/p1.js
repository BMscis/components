class P1 extends HTMLElement{
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
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <slot>${this.text}</slot>
            `
    }
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
        }
        :host{
            width: 80%;
            position: relative;
            font-family:ACLight;
            color: palegoldenrod;
            font-size: calc(78vh * 0.025);
            padding:10px;
            text-align:center;
        }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-p', P1);