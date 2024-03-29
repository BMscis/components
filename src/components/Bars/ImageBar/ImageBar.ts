import { EspiiElement } from "../../../Interfaces/index"
import { Paragraph } from "../../Typography/Paragraph/Paragraph"

export class ImageBar extends EspiiElement{
    source: string
    altern: string
    tooltip: string
    description: string
    constructor(src: string,alt: string,tooltip: string,description: string){
        super()
        this.source = src
        this.altern = alt
        this.tooltip = tooltip
        this.description = description
        this.setup()
    }
    setup(){
        this.getComponents
        this.addEventListener('focusin',e=>{
            this.setAttribute('hover','')
        })
    }
    get getComponents(){
        var imag = document.createElement("img")
        imag.src = this.source
        imag.alt = this.altern

        this.component = {
            Image: imag
        }
        //var txt = new Paragraph(this.tooltip)
        //txt.classList.add("tooltiptext")
        //var dsr = new Paragraph(this.description)
        //dsr.classList.add("descriptiontext")

        // this.componentList = {
        //     Paragraph:[txt,dsr]
        // }
        return 
    }
    override render(){
        this.appendChild(this.component.Image)
        // let fdiv = document.createElement("div")
        // fdiv.appendChild(this.componentList.Paragraph[0])
        // fdiv.appendChild(this.componentList.Paragraph[1])
        // this.appendChild(fdiv)
    }
}
customElements.define('es-imagebar', ImageBar);