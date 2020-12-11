
class AnchorButton extends HTMLElement{
    static get observedAttributes(){
        return ['active']
        
    }
    get styleTemplate(){
        return `
        <style>
        :host{
            background: linear-gradient(to right, #cc3e14,  #e2e22ca9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            outline: none;
            border-radius: 5px;
            border:none;
            padding: 2vmin;
            font-family:ACBoldSemiCn;
            cursor: pointer;
            z-index:1;
            height: fit-content;
            margin: 20px;
            font-size: 1.5vw;
        }
        :host(:hover) {
            -webkit-background-clip: border-box;
            -webkit-text-fill-color: #f1f1f1;
            opacity:0.4;
        }
        </style>
    `
    }
    set css(val){
        if (this.active == false){


        }
    }
    constructor (){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.active = false
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "active" ){
            this.css = 0
            this.render()}
    }
    connectedCallback(){
        
        this.css = 0
        this.render();
    }
    render(){
        this.shadow.innerHTML = 
        `
        ${this.styleTemplate}
        <a>Expand</a>`
    }
}
customElements.define('es-button', AnchorButton);