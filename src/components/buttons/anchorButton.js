export class AnchorButton extends HTMLElement{
    constructor(ident){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.ident = ident
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
        // this.addEventListener("click",e =>{
        //     this.parentElement.render('backface')
        //     var xm = document.querySelectorAll('es-story:not([backface])')
        //     xm.forEach(element => {
        //         element.setAttribute("filter",'')  
        //     });
        //     var bs = document.querySelectorAll('es-businesscard')
        //     bs.forEach(element => {
        //         element.hide()
        //     });  
        // })
    }
    get getComponents(){
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        var rx = document.createElement("a")
        rx.innerHTML = "Expand"
        rx.href = this.ident
        this.appendChild(rx)
        return
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('es-button', AnchorButton);