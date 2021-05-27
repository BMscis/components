//import bg from '../../../assets/img/ws34.png'
class WhiteBoardBlock extends HTMLElement{
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
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}

            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            width:95vw;
            height:100%;
            border-radius: 60px 60px 60px 0px;
            position:absolute;
            top: 0;
            left: 0;
            background:rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            background-size:cover;
            background-repeat:no-repeat;
            //z-index:0;
            transition:1s ease;
            //padding:20px;

        }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-whiteboardblock', WhiteBoardBlock);