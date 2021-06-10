
class Label extends HTMLElement{
    static get properties(){
        return ['text','textafter']
    }
    get stylesTemplate(){
        return  `
        <style>
            es-label{
                font-size: 2vh;
                //z-index: 2;
                text-align: center;
                font-family: 'ACBlack';
                background: linear-gradient(to bottom right,#dedede 77%, transparent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                position:relative;
            }
            es-label::after{
                content:"${this.textAfter}";
                font-size: 16px;
                //z-index: 2;
                font-family: 'ACBlack';
                background: linear-gradient(to right, #cc3e14, yellowgreen);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                //padding: 0 0 20px 20px ;
                display: grid;
                white-space: nowrap;
                left: 25%;
                top: 60%;
                position: absolute;
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
        //this.shadow =this.attachShadow({mode:'open'})
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render();
    }
    render(){
        this.innerHtml=`
        ${this.stylesTemplate}
        <text>${this.text}</text>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-label', Label);