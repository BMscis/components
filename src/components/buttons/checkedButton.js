export class CheckedButton extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.components = []
        this.setup()
    }
    setup(){
        this.getInputs = 0
        return
    }
    get getInputs(){return}
    set getInputs(val){
        for(let i = 0; i < 4; i++){
            let xm = document.createElement('input')
            if(i == 0){
                xm.checked = "checked"
            }
            xm.type = "radio"
            xm.id = `story-${i}`
            this.components.push(xm)
        }
        return
    }
    static get observedAttributes(){
        return ['']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case '':
                return
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
    }
    render(){
        for(let i = 0; i < 4; i++){
            this.appendChild(this.components[i])
        }

    }
    get styledTemplate(){
        return `<style>

        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-checkedbutton', CheckedButton);