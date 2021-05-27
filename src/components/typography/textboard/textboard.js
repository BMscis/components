class Textboard extends HTMLElement{
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
        this.classList.add('darkmode')
        this.render()
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <text>Build better products faster.</tex>
            `
    }
    get styledTemplate(){
        return `<style>
       :host{
            text-align:center
        }
        text{
            font-size: 5vw;
            color: white;
            font-family: MarkOT,Arial,sans-serif;
            transition: 0.5s ease;
        }
        :host(.darkmode) text{
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(218deg, red,#0b12e4, #cd06f1,red);
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
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-textboard', Textboard);