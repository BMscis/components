export class CloseButton extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
        return
    }
    setup(){
        this.addEventListener('click',e =>{
            this.parentElement.parentElement.render("closeback")
            var xm = document.querySelectorAll('es-story[filter]')
            xm.forEach(element => {
                element.removeAttribute("filter")  
            });          
        })
        return
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        return
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
        return
    }
    render(){
        return
    }
    get styledTemplate(){
        return
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-closebutton', CloseButton);