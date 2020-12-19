
class P1 extends HTMLElement{
    static get properties(){
        return []
    }
    get styleTemplate(){
        return  `
        <style>
            :host{
                width: fit-content;
                position: relative;
                font-family:ACLight;
                color: palegoldenrod;
                padding: 20px;
                z-index:1;
            }
        </style>
        `
    }
    constructor (){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    disconnectedCallback(){

    }
    render(){
        this.shadow.innerHTML=`
        ${this.styleTemplate}
        <slot">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore </slot>`
    }
}
customElements.define('es-p', P1);