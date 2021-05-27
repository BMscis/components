
class AnchorButton extends HTMLElement{
    static get observedAttributes(){
        return ['active']
        
    }
    get styleTemplate(){
        return `
        <style>
        *{
            outline:none;
        }
        :host{
            background: linear-gradient(to right, #cc3e14,  #e2e22ca9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            outline: none;
            border-radius: 5px;
            border:none;
            padding: 10px;
            font-family:ACBoldSemiCn;
            cursor: pointer;
            height: auto;
            calc(78vh * 0.03);
            z-index: 1;
        }
        :host(:hover) {
            -webkit-background-clip: border-box;
            -webkit-text-fill-color: #f1f1f1;
            opacity:1;
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
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
        this.active = false
        this.setup()
    }
    setup(){
        this.addEventListener('click', e=>{
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            story.expand()
        })
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "active" ){
            this.css = 0
            this.render()}
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )        
        this.css = 0

        this.render();
    }
    render(){
        this.shadow.innerHTML = 
        `
        ${this.styleTemplate}
        <a>Expand</a>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
}
customElements.define('es-button', AnchorButton);