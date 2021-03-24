//import bg from '../../../assets/img/ws34.png'
class WhiteBoardBlock extends HTMLElement{
    constructor(){
        super()
        //console.log('WhiteBoardBlock constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('WhiteBoardBlock attribute change')
    }
    connectedCallback(){
        //console.log('WhiteBoardBlock connected')
        this.render()
    }
    render(){
        //console.log('WhiteBoardBlock rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}

            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            width:100vw;
            height:100%;
            border-radius: 60px 60px 60px 0px;
            position:absolute;
            top: 0;
            left: 0;
            background:rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(40px);
            background-size:cover;
            background-repeat:no-repeat;
            //z-index:0;
            transition:1s ease;
            //padding:20px;

        }
        </style>`
    }
    disconnectedCallback(){
        //console.log('WhiteBoardBlock disconnect')
    }
}
customElements.define('es-whiteboardblock', WhiteBoardBlock);