import { ImageContainer } from "./ImageContainer"
import { CardHeader } from "../Typography/Heading/CardHeader"
import { Paragraph } from "../Typography/Paragraph/Paragraph"
import { AnchorButton } from "../Buttons/AnchorButton"
import { CloseHeading } from "./CloseHeading"
import { StoryBackface } from "./StoryBackface"
import { EspiiElement } from "../../Interfaces"

export class Story extends EspiiElement {
    heading: string
    lowerHeading: string
    img: string
    active: boolean
    className: string
    paragraph: string
    identity: number
    constructor(
        heading:string, 
        lowerHeading:string, 
        img: string,
        active: boolean,
        className: string,
        paragraph: string,
        identity: number
        ) {
        super()
        this.heading = heading
        this.lowerHeading = lowerHeading
        this.img = img
        this.active = active
        this.className = className
        this.paragraph = paragraph
        this.identity = identity
        this.component = {
            ImageContainer: new ImageContainer(this.heading + this.lowerHeading, this.img),
            CardHeader    : new CardHeader(this.heading, this.lowerHeading),
            Paragraph     : new Paragraph(this.paragraph),
            AnchorButton  : new AnchorButton(`#es-story-${this.identity}`),
            StoryBackface : new StoryBackface(this.className,`#backface-${this.identity}`),
            CloseHeading  : new CloseHeading(this.heading, this.lowerHeading,`#co-story-${this.identity}`)
        }
        this.setAttribute("id",`#co-story-${this.identity}`)
            
    }
    override render() {
                this.appendChild(this.component.ImageContainer)
                this.appendChild(this.component.CardHeader)
                //this.appendChild(this.component.Paragraph)
                this.appendChild(this.component.AnchorButton)
                this.appendChild(this.component.StoryBackface)
                this.appendChild(this.component.CloseHeading)
                return
    }
}
customElements.define('es-story', Story);