import { EspiiElement } from "../../Interfaces/index"

export class ToggleButton extends EspiiElement {
    direction: string
    constructor(direction: string) {
        super()
        this.direction = direction
        this.setup()
    }
    setup(){
        this.addEventListener('click', e => {
            console.log("click")
        })
    }
    override render() {
        this.setAttribute(this.direction, '')
        return 
    }
}
customElements.define('es-toggle', ToggleButton);
