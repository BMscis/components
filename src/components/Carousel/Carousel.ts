import { EspiiElement } from "../../Interfaces/index"
import { BlockchainComponent } from "../BlockchainComponent/BlockchainComponent"
import { ToggleButton } from "../buttons/toggleButton"
import { CBKView } from "../CBK/CBKView"
import { StoryContainer } from "../StoryBoard/StoryContainer"
import { BusinessCard } from "../Typography/BusinessCard/BusinessCard"
import { ScrollPad } from "../Typography/ScrollPad/ScrollPad"

export class Carousel extends EspiiElement{
    constructor(){
        super()
        this.setup()
        return
    }
    setup(){
        //this.getComponents()
        this.send("first")
    }
    async getComponents(){
        this.component = {
            StoryContainer :this.storyContainer,
            ScrollPad      :this.scrollpad,
            Blockchain     :this.blockchain
        }
        this.componentDictionary = {
            ToggleButton   :this.toggleButtons,
            BusinessCard   :this.businessCards,
        }
        return 
    }
    get storyContainer(){
        return new StoryContainer("story",0)
    }
    get toggleButtons(){
        return {PrevToggleButton:new ToggleButton("prev"), NextToggleButton: new ToggleButton("next")}
    }
    get businessCards(){
        return {Portfolio: new BusinessCard("Portfolio"),AboutUs: new BusinessCard("About Us"), Graph: new BusinessCard("Crypto Meter")}
    }
    get scrollpad(){
        return new ScrollPad()
    }
    get blockchain(){
        return new BlockchainComponent()
    }
    setCarousel() {
        this.render("first")
        return
    }
    override connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.setCarousel()
    }
    send(val: string | boolean){
        switch (val) {
            case true :
                return this.forMobile
            case false:
                this.forWebsite
                return 
            case "first":
                this.firstWebsite
                return 
            case 'About Us':
                this.forContacts
                return 
            case 'Portfolio':
                this.forPortfolio
                return 
            case "Crypto Meter":
                this.forGraphs
                return
            case "CBK":
                this.forCBK
            default :
                this.firstWebsite
                return
        }
    }
    get forMobile(){
        this.sendComponents = [this.component.StoryContainer,this.component.ScrollPad]
        return 
    }
    get forWebsite(){
        this.disconnectedCallback()
        this.sendComponents = [new BusinessCard("Portfolio"),new StoryContainer("story",0)]
        this.connectedCallback()
        return
    }
    get firstWebsite(){
        this.sendComponents = [new BusinessCard("Portfolio"),new StoryContainer("story",0)]
        return
    }
    get forPortfolio(){
        this.disconnectedCallback()
        this.sendComponents = [new BusinessCard("Portfolio"),new StoryContainer("story",0)]
        this.connectedCallback()
        return
    }
    get forContacts(){
        this.sendComponents = [new BusinessCard("About Us")]
        this.connectedCallback()
        return
    }
    get forGraphs(){
        this.disconnectedCallback()
        this.sendComponents = [new BusinessCard("Crypto Meter") ,new BlockchainComponent()]
        this.connectedCallback()
        return
    }
    get forCBK(){
        this.disconnectedCallback()
        this.sendComponents = [new CBKView()]
        this.connectedCallback()
        return
    }
}
customElements.define('es-carousel', Carousel);