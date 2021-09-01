import { EspiiElement } from "../../../Interfaces/index"

/**
 * ScrollPad
 */
export class ScrollPad extends EspiiElement{
    constructor(){
        super()
        return
    }
    override render(){
        this.innerHTML += this.htmlTemplate
        return
    }
    get htmlTemplate(){
        return`
        <svg viewbox="0 0 14 22">
            <rect class="mouse-outline" width="7" height='11' x='4' y='7' rx='3'/>
            <circle class="scroll" cx='7.5' cy='11' r='0.5'/>
        `
    }
}
customElements.define('es-scroll', ScrollPad);