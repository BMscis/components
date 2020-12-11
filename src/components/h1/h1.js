
class H1 extends HTMLElement{
    static get properties(){
        return {
            text:{type:String}
        }
    }
    get stylesTemplate(){
        return  `
        <style>
            :host{
                font-size: 6vmin;
                z-index: 2;
                text-align: center;
                font-family: 'ACBlack';
                background: linear-gradient(to right,#ceff1a, transparent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                padding: 0 0 0 20px;
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
    render(){
        this.shadow.innerHTML=`
        ${this.stylesTemplate}
        <text>3D</text>`
    }
}
customElements.define('es-heading', H1);