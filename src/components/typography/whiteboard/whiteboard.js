
//import bg from '../../../assets/img/espiilogo.svg'
class WhiteBoard extends HTMLElement{
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
        <es-heading text=3D></es-heading>
        <es-heading2 text=Design></es-heading2>
        <es-p></es-p>
        <es-whiteboardblock></es-whiteboardblock>
        `
    }
    get styledTemplate(){
        return `<style>
        es-whiteboard{
            width:70%;
            height:70%;
            border-radius: 60px 60px 60px 0px;
            position:absolute;
            background-color:transparent;
            top:15%;
            left:25%;
            transition:1s ease;
            transform:scale(0)
        }
        es-whiteboard([active]){
            transform:scale(1)
        }
        </style>
        `
        
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-whiteboard', WhiteBoard);