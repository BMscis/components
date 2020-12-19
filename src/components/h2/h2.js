
class H2 extends HTMLElement{
    static get properties(){
        return ['text']
    }
    get styleTemplate(){
        return `
        <style>
            :host{
                font-size: 3vmin;
                z-index: 2;
                font-family: 'ACBlack';
                background: linear-gradient(to right, #cc3e14, yellowgreen);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                padding: 0 0 20px 20px ;
                display: grid;
                white-space: nowrap;
                position:relative;
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
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "text" ){
            console.log('text rendered')}
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    render(){
        this.shadow.innerHTML=`
        ${this.styleTemplate}
        <text>${this.text}</text>`
    }
}
customElements.define('es-heading2', H2);