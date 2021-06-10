const { Dimensions } = require("../../Classes/spacemaps/dimensions")

class Navbutton extends HTMLElement {
    constructor(active, text) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.text = text
        this.active = active
        //this.shadow =this.attachShadow({ mode: 'open' })
        this.setup()
    }
    static get properties() {
        return ['active', 'text']
    }
    setup(){
        this.dimension = new Dimensions()
        this.addEventListener('click', e => {
            var active = this.hasAttribute("active")
            switch (active) {
                case true:
                    return
                case false:
                    var activeNavbutton = document.querySelector("es-navbutton[active]")
                    activeNavbutton.toggleAttribute('active', false)
                    this.toggleAttribute('active', true)
                    var carousel = document.querySelector('es-carousel')
                    carousel.render(this.text)
                    return
            }
        })
    }
    get styleTemplate() {
        return `
            <style>
            *{
                outline:none;
            }
                es-navbutton{
                    display: grid;
                    white-space: nowrap;
                    position:relative;
                    cursor:pointer;
                    transition:0.5s ease;
                    margin-bottom: 1vh;
                    height: 4vh;
                    margin: 3vh;
                }
                es-navbutton([active]){
                    background: linear-gradient(to right, #c30047, #1a71ff);
                    -webkit-background-clip: text;
                    backdrop-filter: brightness(2)
                    -webkit-backdrop-filter: brightness(2)
                    opacity:1;
                    transition:0.5s ease;
                }
                es-navbutton([inactive]){
                    opacity:0.5;
                    transition:0.5s ease;
                }
                es-navbutton([inactive]:hover){
                    opacity:1;
    
                }
                button {
                    border: none;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    outline: none;
                    border-radius: 2px;
                    font-family: 'ACLight';
                    font-size:2vh;
                    cursor:pointer;
                    margin:0;
                    padding:0;
                    height: 3vh;
                }
                es-navbutton(.darkmode) button{
                    -webkit-background-clip: none;
                    -webkit-text-fill-color: black;
                    padding:0 10px;
                    background: hsl(0deg 0% 100%);
                }
                es-navbutton(.darkmode[active]) button{
                    -webkit-background-clip: none;
                    background: transparent;
                    background-image:linear-gradient(45deg, #3ffd1e, transparent);
                    border: none;
                }
                es-navbutton([active]) button{
                    -webkit-background-clip: text;
                    background: transparent;
                    border-bottom: 2px solid;
                    border-bottom-color: blueviolet;
                    border-image: linear-gradient(to right,transparent 30%, blue 35%, red 50%, transparent 70%);
                    border-image-slice: 8;
                }
            </style>
            `

    }
    toggleActive(){
        if (this.active) {
            this.toggleAttribute("active", true)
        } else {
            //this.setAttribute('inactive','')
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.classList.add(`Navbutton`)
        this.classList.add(`darkmode`)

        this.render();
        this.toggleActive()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === "text") {
        }
        if (prop === "active") {
        }
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
    render() {
        var rx = document.createElement("button")
        rx.innerHTML = this.text
        this.appendChild(rx)
        return
    }
}
customElements.define(`es-navbutton`, Navbutton);
module.exports = Navbutton