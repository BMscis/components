import { EspiiElement } from "../../Interfaces/index"

export class CloseButton extends EspiiElement{
    identity: string
    constructor(identity:string){
        super()
        this.identity = identity
        return
    }
    override render(){
        var xm = document.createElement('a')
        xm.setAttribute("href",this.identity)
        this.appendChild(xm)
        return
    }
}
customElements.define('es-closebutton', CloseButton);