import { EspiiElement } from "../../../Interfaces/index"

export class Paragraph extends EspiiElement{
    text: string
    /**
     * 
     * @param text String Paragraph.
     */
    constructor(text: string){
        super()
        this.text = text
    }
    override render(){
        //var slt = document.createElement("slot")
        this.innerHTML =this.text
        //this.appendChild(slt)
        return
    }
}
customElements.define('es-paragraph', Paragraph);