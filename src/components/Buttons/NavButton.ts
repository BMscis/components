import { A } from "@svgdotjs/svg.js"
import { EspiiElement } from "../../Interfaces/index"

export class NavButton extends EspiiElement {
    text: string
    active: boolean
    constructor(active: boolean, text: string) {
        super()
        this.text = text
        this.active = active
        this.setup()
    }
    setup(){

        this.addEventListener('click', e => {
            var active = this.hasAttribute("active")
            switch (active) {
                case true:
                    return
                case false:
                    var activeNavbutton = document.querySelector("es-navbutton[active]")
                    activeNavbutton.toggleAttribute('active', false)
                    this.toggleAttribute('active', true)
                    var carousel:EspiiElement = document.querySelector('es-carousel')
                    carousel.send(this.text)
                    return
            }
        })
    }
    toggleActive(){
        if (this.active) {
            return this.toggleAttribute("active", true)
        } else {
            return
        }
    }
    render() {
        this.classList.add(`Navbutton`)
        this.toggleActive()
        var rx = document.createElement("button")
        rx.innerHTML = this.text
        this.appendChild(rx)
        return
    }
}
customElements.define(`es-navbutton`, NavButton);