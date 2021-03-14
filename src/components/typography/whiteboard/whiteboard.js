
//import bg from '../../../assets/img/espiilogo.svg'
class WhiteBoard extends HTMLElement{
    constructor(){
        super()
        console.log('WhiteBoard constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('WhiteBoard attribute change')
    }
    connectedCallback(){
        console.log('WhiteBoard connected')
        this.render()
    }
    render(){
        console.log('WhiteBoard rendering')
        this.shadow.innerHTML =  `
        ${this.styledTemplate}
        <es-heading text=3D></es-heading>
        <es-heading2 text=Design></es-heading2>
        <es-p></es-p>
        <es-whiteboardblock></es-whiteboardblock>
        `
    }
    get styledTemplate(){
        return `<style>
        :host{
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
        :host([active]){
            transform:scale(1)
        }
        </style>
        `
        
    }
    disconnectedCallback(){
        console.log('WhiteBoard disconnect')
    }
}
customElements.define('es-whiteboard', WhiteBoard);