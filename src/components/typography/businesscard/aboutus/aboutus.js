export class AboutUs extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.getComponents
        return
    }
    //
    get getComponents(){
        return
    }
    //
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        return
    }
    render(){
        this.innerHTML = `
        <div class=texture></div>
        <div class=labelcontainer>
        <label>Name: </label>
        <label>Email: </label>
        <label>Contact: </label>
        </div>
        <div class=infocontainer>
        <p>Melvin Wakhungu Wafula</p>
        <address>
        <a href="mailto:melvinwafula@gmail.com">
        melvinwafula@gmail.com
        </a>
        </address>
        <address>
        <a href="tel:+254729675138">
        +254729675138
        </a>
        </address>
        </div>
        `
        return
    }
    get styleTemplate(){
        return``
    }
    get htmlTemplate(){
        return``
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('es-aboutus', AboutUs);