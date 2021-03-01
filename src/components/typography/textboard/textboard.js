class Textboard extends HTMLElement{
    constructor(){
        super()
        console.log('textboard constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('textboard attribute change')
    }
    connectedCallback(){
        console.log('textboard connected')
        this.render()
    }
    render(){
        console.log('textboard rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <text>Build better products faster.</tex>
            `
    }
    get styledTemplate(){
        return `<style>
       :host{
            position:absolute;
            width:30%;
            top:30%;
            left:10%;
            z-index:1;
        }
        text{
            font-size:10vmin;
            color:white;
            font-family:ACBoldCond;
            transition: 0.5s ease;
        }
        :host([hide]){
            display: none
        }
        @media only screen and (max-width: 800px){
            :host{
                display:none;
            }
            text{
                font-size:5vmin;
            }
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('textboard disconnect')
    }
}
customElements.define('es-textboard', Textboard);