//components
import { EspiiElement } from '../../../Interfaces/index'
import  {NavButton} from '../../Buttons/NavButton'

export class SideBar extends EspiiElement{
    constructor(){
        super()
    }
    override render(){
        
        this.appendChild(new NavButton(true,"Portfolio"))
        this.appendChild(new NavButton(false,"Crypto Meter"))
        this.appendChild(new NavButton(false,"About Us"))
        this.appendChild(new NavButton(false, "Central Bank of Kenya"))
    }
}
customElements.define('es-sidebar', SideBar);