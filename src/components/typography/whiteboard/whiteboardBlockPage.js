class WhiteBoardBlockPage extends HTMLElement{
    constructor(){
        super()
        //console.log('WhiteBoardBlockPage constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('WhiteBoardBlockPage attribute change')
    }
    connectedCallback(){
        //console.log('WhiteBoardBlockPage connected')
        this.render()
    }
    render(){
        //console.log('WhiteBoardBlockPage rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            width:100vw;
            height:100%;
            border-radius:10px;
            position:absolute;
            top: 0;
            left: 0;
            background-image:linear-gradient(rgb(47, 184, 255) 0%, rgb(158, 236, 217) 100%);
            border-radius: 60px 60px 60px 0px;
            transform: matrix(1, 0.14, 0, 0.99, 0, 0);
            transform-origin: left bottom;
            z-index: -1;
            transition:1s ease;
        }
        :host(:hover){
            transform: rotateX(30deg) rotateY(30deg) translateY(-3px)
        }
        </style>`
    }
    disconnectedCallback(){
        //console.log('WhiteBoardBlockPage disconnect')
    }
}
customElements.define('es-whiteboardblockpage', WhiteBoardBlockPage);