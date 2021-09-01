import { EspiiElement } from "../../../Interfaces/index"

export class CardHeader extends EspiiElement{
    heading: string
    lowerHeading: string
    /**
     * Display heading style.
     * @param heading Upper Heading String
     * @param lowerHeading Lower Heading Sting
     */
    constructor(heading:string,lowerHeading:string){
        super()
        this.heading = heading
        this.lowerHeading = lowerHeading
    }
    override render(){
        this.setAttribute("lowerheading", this.lowerHeading)
        var slt = document.createElement("text")
        slt.innerHTML = this.heading
        this.appendChild(slt)
        return
    }
}
customElements.define('es-cardheader', CardHeader);