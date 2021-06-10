export class Textboard extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    get getComponents(){
        let xm = document.createElement("text")
        xm.innerHTML = "Build better products faster."
        let sm = document.createElement("style")
        sm.innerHTML = this.styledTemplate
        return{
            "text": xm,
            "componentstyle": sm
     }
     return
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
        return
    }
    render(){
        this.appendChild(this.components.text)
        this.appendChild(this.components.componentstyle)
        return
    }
    get styledTemplate(){
        return `
        es-textboard{
            text-align:center
        }
        es-textboard text{
            font-size: 5vw;
            color: white;
            font-family: MarkOT,Arial,sans-serif;
            transition: 0.5s ease;
        }
        es-textboard.darkmode text{
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(218deg, red,#0b12e4, #cd06f1,red);
        }
        es-textboard[hide]{
            display: none
        }
         @media only screen and (max-width: 850px){
            es-textboard{
            }
            es-textboard text{
                font-size:5vmin;
            }
        }
        `
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
        return
    }
}
customElements.define('es-textboard', Textboard);