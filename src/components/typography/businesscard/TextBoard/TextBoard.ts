import { EspiiElement } from "../../../../Interfaces/index"

export class Textboard extends EspiiElement{
    constructor(){
        super()
        this.setup()
        return
    }
    setup(){
        this.getComponents
        return
    }
    get getComponents(){
        let xm = document.createElement("text")
        xm.innerHTML = "Build better products faster."

        this.component ={
            Text: xm
        }
        return
    }
    override render(){
        this.appendChild(this.component.Text)
        return
    }
}
customElements.define('es-textboard', Textboard);