import { EspiiElement } from "../../Interfaces/index"

export class AnchorButton extends EspiiElement{
    indentity: string
    /**
     * 
     * @param indentity Unique String name for anchor Button
     */
    constructor(indentity:string){
        super()
        this.indentity = indentity
    }
    override render(){
        var rx = document.createElement("a")
        rx.innerHTML = "Expand"
        rx.href = this.indentity
        this.appendChild(rx)
        return
    }
}
customElements.define('es-anchorbutton', AnchorButton);