class WhiteBoardBlockPage extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
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
        this.innerHtml =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        es-whiteboardblockpage{
            width:95vw;
            height:100%;
            border-radius:10px;
            position:absolute;
            top: 0;
            left: 0;
            background-image:linear-gradient(rgb(47, 184, 255) 0%, rgb(158, 236, 217) 100%);
            border-radius: 60px 60px 60px 0px;
            transform: matrix(1, 0.14, 0, 0.99, 0, 0);
            transform-origin: left bottom;
            //z-index: -1;
            transition:1s ease;
        }
        es-whiteboardblockpage(:hover){
            transform: rotateX(30deg) rotateY(30deg) translateY(-3px)
        }
        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-whiteboardblockpage', WhiteBoardBlockPage);