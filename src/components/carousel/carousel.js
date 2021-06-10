import { Dimensions } from "../../Classes/spacemaps/dimensions"
import { ToggleButton } from "../buttons/toggleButton"
import { StoryContainer } from "../storyBoard/storycontainer"
import { BusinessCard } from "../typography/businesscard/businesscard"
import { ScrollPad } from "../typography/scrollpad/scrollpad"

export class Carousel extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.components = this.getComponents
        this.dimension = new Dimensions()
        window.addEventListener("resize", e=> {
            this.resize()
        })
        this.addEventListener('orientationchange', e => {
            this.setCarousel()
            return
        })
        return
    }
    //
    get getComponents(){
        return {"storycontainer":this.storyContainer,"togglebuttons":this.toggleButtons,"businesscards":this.businessCards,"scrollpad":this.scrollpad}
    }
    get storyContainer(){
        return new StoryContainer()
    }
    get toggleButtons(){
        return {"prev":new ToggleButton("prev"), "next": new ToggleButton("next")}
    }
    get businessCards(){
        return {"port": new BusinessCard("Portfolio"),"aboutus": new BusinessCard("About Us"), "graph": new BusinessCard("Graph")}
    }
    get scrollpad(){
        return new ScrollPad()
    }
    //
    setCarousel() {
        this.style.height = this.dimension.carouselSetup + "px"
        switch(window.Espii.mobile || this.dimension.fullWidth < 850){
            case true:
                    this.render(true)
                    return
            case false:
                    this.render(false)
                    return
        }
        
        return
    }
    toggleDarkmode(){
        if(this.darkmode){
            this.toggleAttribute('darkmode')
        }
        return false
    }
    resize(){
        this.style.height = this.dimension.carouselSetup + "px"
        this.style.width = this.dimension.fullWidth + "px"
    }
    //
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.setCarousel()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(val){
        switch (val) {
            case true :
                return this.forMobile
            case false:
                this.forWebsite
                return 
            case 'Contact Us':
                this.forContacts
                return 
            case 'Portfolio':
                this.forPortfolio
                return 
            case 'Graph':
                this.forGraphs
                return 
        }
    }
    //
    get forMobile(){
        this.appendChild(this.components.storycontainer)
        this.appendChild(this.components.scrollpad)
        return 
    }
    get forWebsite(){
        this.appendChild(this.components.businesscards.port)
        this.appendChild(this.components.storycontainer)
        return
    }
    get forPortfolio(){
        for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        this.appendChild(this.components.businesscards.port)
        this.appendChild(this.components.storycontainer)
        return
    }
    get forContacts(){
        for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        this.appendChild(this.components.businesscards.aboutus)
        return
    }
    get forGraphs(){
        for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        this.appendChild(this.components.businesscards.graph)
        return
    }
    //
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('es-carousel', Carousel);