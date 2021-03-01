//import {Story} from '../storyBoard/story'
import '../buttons/nextButton'
import '../buttons/previousButton'
import '../typography/whiteboard/whiteboard'
import {Story} from '../storyBoard/story'
import '../typography/textboard/textboard'
//images
import webdev from '../../assets/svg/webdev.svg'
import coa from '../../assets/svg/coa.svg'
import me from '../../assets/svg/me.svg'
import stairs from '../../assets/svg/stairs2.svg'
import ws4 from '../../assets/img/ws37.png'
import ws from '../../assets/img/ws.png'
class Carousel extends HTMLElement{
    constructor(){
        super()
        console.log('Carousel constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    //attributes
    static get observedAttributes(){
            return ['width','nextwidth','backface']
        }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('Carousel change')
        switch(prop){
            case 'width':
                console.log('carousel width change')
                return
            case 'backface':
                if(newVal == 'true'){
                    console.log('backface is true.')
                    this.render(true)
                    return
                }
                else{
                    return
                }
        }

    }
    get width(){
        console.log('Carousel get width')
        return this.getAttribute('width')
    }
    set width(val){
        console.log('Carousel set width')
        return this.setAttribute('width')
    }
    get backface(){
        console.log('Carousel get backface')
        return this.getAttribute('backface')
    }
    set backface(val){
        console.log('Carousel set backface')
        return this.setAttribute('backface',val)
    }
    setImages(){
        var dw = [webdev,coa,me,stairs]
        Story.imgset = dw
        console.log(Story)
        return
    }
    connectedCallback(){
        console.log('Carousel connected')
        window.addEventListener('resize',e=>{
            console.log('resizing')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            story.setAttribute('resize','')
            var prevButton = document.querySelector("#body > es-carousel").shadowRoot.querySelector("es-previous")
            var nextButton = document.querySelector("#body > es-carousel").shadowRoot.querySelector("es-next")
            prevButton.setAttribute('move','')
            nextButton.setAttribute('move','')

        })
        this.render(false)
        this.disconnectedCallback()
    }
    render(val){
        console.log('Carousel rendered')
        var cWidth = window.innerWidth
        console.log(cWidth)
        if(val == true){
            this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-story h1='3D' h2='Design ' img=${coa} ${this.setImages()} active class="0"></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"                ></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2"               ></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3"               ></es-story>
        `
        }
        else{
            this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-textboard></es-textboard>
            <es-previous></es-previous>
            <es-story h1='3D' h2='Design ' img=${coa} ${this.setImages()} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
            <es-next><es-next>
        `}
    }

    get styledTemplate(){
        return `<style>
        :host{
            width:100%;
            height:calc(100vh - 10vmin);
            right:0;
            display: -webkit-box;
            position: absolute;
            overflow:hidden;
            perspective: 600px;
            perspective-origin: center;
            transition:0.5s ease-in-out;
            -webkit-box-align: center;
            overflow-y:scroll;
            top:10vmin;
            background-image: radial-gradient(circle at bottom left,#00f5de00 ,68%,transparent 44%,#000024,rgb(0 54 142),transparent);
            background-repeat:no-repeat;
        }
        :host([expand]){
            //background-image:url(${ws});
            backdrop-filter: blur(15px);
        }
        :host(:hover){
            //backdrop-filter: blur(15px);

        }
        </style>
        `
    }
    disconnectedCallback(){
        console.log('Carousel disconnect')
    }
}
customElements.define('es-carousel', Carousel);