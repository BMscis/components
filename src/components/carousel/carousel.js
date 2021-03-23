//import {Story} from '../storyBoard/story'

//images
import webdev from '../../assets/svg/webdev.gif'
import coa from '../../assets/svg/coa.gif'
import me from '../../assets/svg/me.gif'
import stairs from '../../assets/svg/stairs2.gif'
//import ws from '../../assets/svg/ws.gif'
class Carousel extends HTMLElement {
    constructor() {
        super()
        //console.log('Carousel constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    //attributes
    static get observedAttributes() {
        return ['width', 'nextwidth', 'backface','resize']
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        //console.log('Carousel change')
        switch (prop) {
            case 'width':
                //console.log('carousel width change')
                return
            case 'backface':
                if (newVal == 'true') {
                    //console.log('backface is true.')
                    this.render(true)
                    return
                }
                else {
                    return
                }
            case 'resize':
                if(newVal == 'true' && oldVal != newVal){
                    //console.log('Carousel resize')
                    this.resize = newVal
                    return
                }
                if(newVal == 'false' && oldVal != newVal){
                    this.resize = newVal
                    return
                }
                else{
                    return
                }
        }

    }
    get width() {
        //console.log('Carousel get width')
        return this.getAttribute('width')
    }
    set width(val) {
        //console.log('Carousel set width')
        return this.setAttribute('width')
    }
    get backface() {
        //console.log('Carousel get backface')
        return this.getAttribute('backface')
    }
    set backface(val) {
        //console.log('Carousel set backface')
        return this.setAttribute('backface', val)
    }
    get resize(){
        return this.getAttribute('resize')
    }
    set resize(val){
        if(val === 'true'){
            this.setAttribute('resize', val)
            this.resizeCar()
            this.setAttribute('resize','false')
            return
        }
        if(val === 'false'){
            return this.setAttribute('resize',val)
        }
    }
    setImages() {
        var dw = [webdev, coa, me, stairs]
        Story.imgset = dw
        //console.log(Story)
        return
    }
    resizeCar(){
        //console.log('RESIZING')
        var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
        //var navbar = document.querySelector('es-navbar')
        var prevButton = document.querySelector("body > es-carousel").shadowRoot.querySelector("es-previous")
        var nextButton = document.querySelector("body > es-carousel").shadowRoot.querySelector("es-next")
        
        story.setAttribute('resize', 'true')
        //navbar.setAttribute('render','true')
        prevButton.setAttribute('move','')
        nextButton.setAttribute('move','')
        return
    }
    connectedCallback() {
        //console.log('Carousel connected')
        this.render(false)
        this.disconnectedCallback()
    }
    render(val) {
        //console.log('Carousel rendered')
        var cWidth = window.innerWidth
        //console.log(cWidth)
        if (val == true) {
            this.shadow.innerHTML = `
            ${this.styledTemplate}
            <es-story h1='3D' h2='Design ' img=${coa} ${this.setImages()} active class="0"></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"                ></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2"               ></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3"               ></es-story>
        `
        }
        else {
            this.shadow.innerHTML = `
            ${this.styledTemplate}
            <es-businesscard text='Portfolio'></es-businesscard>
            <es-previous></es-previous>
            <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
            <es-next><es-next>
        `}
    }

    get styledTemplate() {
        return `<style>
        :host{
            width:100vw;
            top: calc(3vh + 20px + 80px);
            height:calc(${window.innerHeight}px - 3vh - 20px - 80px);
            right:0;
            display: flex;
            flex-direction:row;
            position:absolute;
            perspective: 600px;
            perspective-origin: center;
            transition:0.5s ease-in-out;
            -webkit-box-align: center;
            //background-image: radial-gradient(circle at bottom left,#00f5de00 ,68%,transparent 44%,#000024,rgb(0 54 142),transparent);
            background-repeat:no-repeat;
        }
        :host([expand]){
            backdrop-filter: blur(5px);
        }
        :host(:hover){
            //backdrop-filter: blur(15px);

        }
        @media only Screen and (max-width:800px){
            :host{
                
            }
        }
        </style>
        `
    }
    disconnectedCallback() {
        //console.log('Carousel disconnect')
        return false
    }
}
customElements.define('es-carousel', Carousel);