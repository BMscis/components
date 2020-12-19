//import {Story} from '../storyBoard/story'
import '../storyBoard/story'
import '../buttons/nextButton'
import '../buttons/previousButton'
import '../whiteboard/whiteboard'

//images
import webdev from '../../assets/svg/webdev.svg'
import coa from '../../assets/svg/coa.svg'
import me from '../../assets/svg/me.svg'
import stairs from '../../assets/svg/stairs2.svg'
class Carousel extends HTMLElement{
    constructor(){
        super()
        console.log('Carousel constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    //attributes
    static get observedAttributes(){
            return ['width','nextwidth']
        }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('Carousel change')
        if(prop === 'width'){
            console.log('carousel width change')
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
    connectedCallback(){
        console.log('Carousel connected')
        window.addEventListener('resize',e=>{
            console.log('resizing')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active')
            story.setAttribute('resize',true)
        })
        this.render()
        this.disconnectedCallback()
    }
    render(){
        console.log('Carousel rendered')
        var cWidth = window.innerWidth
        console.log(cWidth)
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-previous></es-previous>
            <es-whiteboard></es-whiteboard>
            <es-story h1='3D' h2='Design ' img=${coa} imgset=${{'one':webdev,'two':coa,'three':me,'four':stairs}} class="active 0"></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"              ></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2"              ></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3"              ></es-story>
            <es-story h1=' ' h2=' ' class="4"              ></es-story>
            <es-next></es      
        `
    }

    get styledTemplate(){
        return `<style>
        :host{
            width:100%;
            height:100%;
            left:0;
            display: -webkit-box;
            position: absolute;
            overflow:hidden;
            perspective: 1000px;
            perspective-origin: center;
            transition:0.5s ease-in-out;
            -webkit-box-align: center;
            overflow-y:auto;
            top:10vmin;
        }
        </style>
        `
    }
    disconnectedCallback(){
        console.log('Carousel disconnect')
    }
}
customElements.define('es-carousel', Carousel);