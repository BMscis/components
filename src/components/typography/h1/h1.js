
class H1 extends HTMLElement{
    static get properties(){
        return ['text','textafter']
    }
    get stylesTemplate(){
        return  `
        <style>
            *{
                outline:none;
            }
            :host{
                //width:calc((78vh * 0.1) + (78vh * 0.05));
                height:calc((78vh * 0.1) + (78vh * 0.05));
                position:relative;
                transform: scale(var(--ggs,1));
            }
            text{
                font-size: calc(78vh * 0.08);
                text-align: center;
                font-family: 'ACLight';
                background: linear-gradient(to bottom right,#ceff1a 50%, transparent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;


            }
            :host::after{
                content:"${this.textAfter}";
                //font-size: calc(78vh * 0.05);
                font-family: 'ACLight';
                background: linear-gradient(to right, #cc3e14, yellowgreen);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                //padding: 0 0 20px 20px ;
                display: grid;
                white-space: nowrap;
                //left: 2%;
                //top: 60%;
                //position: absolute;
            }
        </style>
        `
    }

    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "text" ){
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    get textAfter(){
        return this.getAttribute('textafter')
    }
    set textAfter(val){
        return this.setAttribute('textafter',val)
    }
    constructor (){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render();
    }
    render(){
        this.shadow.innerHTML=`
        ${this.stylesTemplate}
        <text>${this.text}</text>
        `
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-heading', H1);