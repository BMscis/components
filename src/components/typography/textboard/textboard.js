class Textboard extends HTMLElement{
    constructor(){
        super()
        //console.log('textboard constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('textboard attribute change')
    }
    connectedCallback(){
        //console.log('textboard connected')
        this.render()
    }
    render(){
        //console.log('textboard rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <text>Build better products faster.</tex>
            `
    }
    get styledTemplate(){
        return `<style>
       :host{
            height:9vh;
        }
        text{
            font-size:6vw;
            color:white;
            font-family:ACBoldCond;
            transition: 0.5s ease;
        }
        :host([hide]){
            display: none
        }
         @media only screen and (max-width: 850px){
            :host{
            }
            text{
                font-size:5vmin;
            }
        }
        </style>`
    }
    disconnectedCallback(){
        //console.log('textboard disconnect')
    }
}
customElements.define('es-textboard', Textboard);