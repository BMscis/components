import { A } from "@svgdotjs/svg.js"
import { EspiiElement } from "../../Interfaces/index"

export class News extends EspiiElement{
    constructor(){
        super()
        return
    }
    override render(){
        let heading = document.createElement('text')
        heading.innerHTML = "NEWS"
        let link = document.createElement('a')
        link.href = "https://www.businessdailyafrica.com/bd/economy/kenya-tops-in-china-projects-completion-ahead-deadline-3579114"
        link.innerHTML = "Kenya Tops In China BRI Completion Rate."
        this.appendChild(heading)
        this.appendChild(link)
        return
    }
}
customElements.define('es-news', News);