
class H2 extends HTMLElement{
    static get properties(){
        return ['text']
    }
    get styleTemplate(){
        return `
        <style>
            :host{
                font-size: 20px;
                //z-index: 2;
                font-family: 'ACBoldSemiCn';
                //background: #ff5e00;
                //-webkit-background-clip: text;
                //-webkit-text-fill-color: transparent;
                color:whitesmoke;
                //padding: 0 0 0px 20px ;
                display: grid;
                white-space: nowrap;
                position:relative;
                cursor:pointer;
                
            }
            :host([active]){
                background: linear-gradient(to right, #c30047, #1a71ff);
                -webkit-background-clip: text;
                filter: brightness(2)
                opacity:1;
            }
            :host([inactive]){
                filter:brightness(0.5);
                opacity:0.5;
            }
            :host(:hover){
                background: linear-gradient(to right, #c30047, #1a71ff);
                -webkit-background-clip: text;
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
            //console.log('text rendered')}
        }
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