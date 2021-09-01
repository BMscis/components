import { EspiiElement } from "../../Interfaces"
import { removeAllChildren } from "../../ComponentKontrol/removeChildKontrol"
export class ImageContainer extends EspiiElement{
    alt: string
    source: string
    /**
     * 
     * @param alt Alternative Image name.
     * @param source Source value.
     */
    constructor(alt : string,source : string){
        super()
        this.alt = alt
        this.source = source
    }
    override render(){
        var rx = document.createElement("img")
        rx.src = this.source
        rx.alt = this.alt
        this.appendChild(rx)
        return
    }
}
customElements.define('es-imagecontainer', ImageContainer);