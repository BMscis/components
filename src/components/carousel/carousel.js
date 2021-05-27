//Components
import {ToggleButton} from "../buttons/toggleButton"
import {Story} from "../storyBoard/story"
import {BusinessCard} from "../typography/businesscard/businesscard"
//images
import webdev from '../../assets/svg/webdev.gif'
import coa from '../../assets/svg/coa.gif'
import me from '../../assets/svg/me.gif'
import stairs from '../../assets/svg/stairs2.gif'
import { Dimensions } from "../../Classes/spacemaps/dimensions"
//import ws from '../../assets/svg/ws.gif'

export class Carousel extends HTMLElement {
    constructor(darkmode) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.darkmode = darkmode
        this.components = {}
        this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
    }
    //attributes
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.dimension = new Dimensions()
        window.addEventListener("resize", e=> {
            this.resize()
        })
        this.addEventListener('orientationchange', e => {
            this.setCarousel()
            return
        })
        
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    get components(){
        return this.componentsList
    }
    set components(val){
        this.story = 0
        this.toggleButtons = 0
        this.businessCard = 0
        return this.componentsList = {"Bcards": this.businessCardList, "Stry": this.storyList, "Tbtn":this.toggleButtonList}
    }
    get businessCard(){
        return this.businessCardList
    }
    set businessCard(val){
        var b1 = new BusinessCard("Portfolio")
        var b2 = new BusinessCard("About Us")
        var b3 = new BusinessCard("Graph")
        return this.businessCardList = {"port":b1,"aboutus":b2,"graph":b3}
    }
    get story() {
        return this.storyList
    }
    set story(val) {
        var s1 = new Story(
            "3D", "Design", coa, true, 0, "Get access to hyper-realistic 3D designs with real-time animation."
        )
        var s2 = new Story(
            "Web", "Development", webdev, false, 1, "create modern websites."
        )
        var s3 = new Story(
            "Graphic", "Design", me, false, 2, "Visualize your idea and bring it to life with awsome designs."
        )
        var s4 = new Story(
            "UI/UX", "Design", stairs, false, 3, "Create custom user-friendly interfaces with custom widgets."
        )
        return this.storyList = [s1,s2,s3,s4]
    }
    get toggleButtons(){
        return this.toggleButtonList
    }
    set toggleButtons(val){
        var prev = new ToggleButton("prev")
        var nxt = new ToggleButton("next")
        return this.toggleButtonList = {"prev":prev,"next":nxt}
    }
    setCarousel() {
        switch(window.Espii.mobile || this.dimension.fullWidth < 850){
            case true:
                    this.render(true)
            case false:
                    this.render(false)
        }
        
        return
    }
    toggleDarkmode(){
        if(this.darkmode){
            this.toggleAttribute('darkmode')
        }
        return false
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.setCarousel()
        this.toggleDarkmode()
    }
    resize(){
        this.style.height = this.dimension.carouselSetup + "px"
        this.style.width = this.dimension.fullWidth + "px"
    }
    render(val) {
        this.shadow.innerHTML = `${this.styledTemplate}`
        this.getRenderVal(val)
    }
    getRenderVal(val) {
        switch (val) {
            case true :
                return this.getForMobile()
            case false:
                this.getForWebsite()
                return 
            case "true" :
                this.getForMobile()
                return 
            case "false":
                this.getForWebsite()
                return 
            case 'Contact Us':
                this.getForBusinessCardContact()
                return 
            case 'Portfolio':
                this.getForWebsite()
                return 
            case 'Graph':
                this.getForBusinessCardGraph()
                return 
        }
    }
    getForMobile() {
        return `        
        <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
        <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
        <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
        <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
        <es-scrollpad mobi horizontal></es-scrollpad>
        `
    }
    getForWebsite() {
        this.shadow.appendChild(this.businessCardList.port)
        this.shadow.appendChild(this.toggleButtonList.prev)
        this.storyList.forEach(element =>{
            this.shadow.appendChild(element)
        })
        this.shadow.appendChild(this.toggleButtonList.next)
        return 
    }
    getForBusinessCardContact() {
        return `
        <es-businesscard text='Contact Us'></es-businesscard>
        `
    }
    getForBusinessCardPortfolio() {
        return `
        ${this.shadow.append(new ToggleButton("prev"))}
        <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
        <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
        <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
        <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
        ${this.shadow.append(new ToggleButton("next"))}
        `
    }
    getForBusinessCardGraph(){
        this.shadow.appendChild(this.businessCardList.graph)
        return 
    }
    get styledTemplate() {
        return `<style>
        :host{
            overflow:hidden;
            position:relative;
            width:${this.dimension.fullWidth + "px"};
            height:${this.dimension.carouselSetup + "px"};
            align-items: center;
            display: -webkit-box;
            grid-auto-flow: column;
            perspective: 600px;
            perspective-origin: center;
            transition:0.5s ease-in-out;
            -webkit-box-align: center;
            //background-image: radial-gradient(circle at bottom left,#00f5de00 ,68%,transparent 44%,#000024,rgb(0 54 142),transparent);
            background-repeat:no-repeat;
            z-index:1;
        }
        :host([darkmode]){
            background-color: hsl(0deg 0% 8%);
            border-radius: 20px;
            background-image:linear-gradient(to right, #1b1b1b 0 50%,50%, hsl(0deg 0% 8%));
        }
        :host([expand]){
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
        </style>
        `
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
}
customElements.define('es-carousel', Carousel);