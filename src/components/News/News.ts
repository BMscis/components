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

        let link2 = document.createElement('a')
        link2.href = "https://www.lynalden.com/fraying-petrodollar-system/"
        link2.innerHTML = "The Fraying of the US Global Currency Reserve System."
        this.appendChild(heading)
        this.appendChild(link)
        this.appendChild(link2)
        return
    }
}
customElements.define('es-news', News);