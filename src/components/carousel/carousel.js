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
        return ['width', 'nextwidth', 'resize','mobibusinesscard']
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        //console.log('Carousel change')
        switch (prop) {
            case 'width':
                //console.log('carousel width change')
                return
            case 'resize':
                if(newVal == 'true' && oldVal != newVal){
                    //console.log('Carousel resize')
                    this.resizeCar()
                    return
                }
                if(newVal == 'false' && oldVal != newVal){
                    return
                }
                else{
                    return
                }
            case 'mobibusinesscard':
                this.render(newVal)
                return
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
    get resize(){
        return this.getAttribute('resize')
    }
    set resize(val){
        if(val === 'true'){
            return 
        }
        if(val === 'false'){
            return 
        }
    }
    setImages() {
        var dw = [webdev, coa, me, stairs]
        Story.imgset = dw
        //console.log(Story)
        return
    }
    resizeCar(){
        var html = document.querySelector('html')
        //console.log('RESIZING')
        function detectMob() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];
        
            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }
        if(html.getAttribute('mobi') === "true"){
            var navi  = detectMob()
            html.setAttribute('mobi', navi)
            if(navi === true || window.outerWidth < 850){
                this.render(true)
            }
            if(navi === false){
                this.render(false)
            }
        }
        if(html.getAttribute('mobi') === 'false'){
            var navi  = detectMob()                
            html.setAttribute('mobi', navi)
            if(navi === true || window.outerWidth < 850){
                this.render(true)
            }
            else{
                this.render(false)
            }
        }
        return
    }
    connectedCallback() {
        //console.log('Carousel connected')
        window.addEventListener('resize',e=>{
            //console.log('@ WINDOW RESIZE')
            this.setAttribute('resize', 'true')
            this.setAttribute('resize', 'false')
            return
        })
        if(document.querySelector('html').getAttribute('mobi' === 'true') || window.outerWidth < 850){
            this.render(true)
        }
        else{
            this.render(false)
        }
        this.disconnectedCallback()
    }
    render(val) {
        //mobile
        if(val == true) {
            this.shadow.innerHTML = `
            ${this.styledTemplate}
            <es-previous></es-previous>
            <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
            <es-next></es-next>
            <es-scrollpad mobi></es-scrollpad>
        `}
        //closed 
        if(val == false) {
            this.shadow.innerHTML = `
            ${this.styledTemplate}
            <es-businesscard ></es-businesscard>
            <es-previous></es-previous>
            <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
            <es-next><es-next>
        `}
        if(val === 'Contact Us'){
            this.shadow.innerHTML = `
            <es-businesscard text='Contact Us'></es-businesscard>
            `
        }
        if(val === 'Portfolio'){
            this.shadow.innerHTML = `
            ${this.styledTemplate}
            <es-previous></es-previous>
            <es-story h1='3D' h2='Design ' img=${coa} active class="0" ptext="Get access to hyper-realistic 3D designs with real-time animation."></es-story>
            <es-story h1='Web ' h2='Development ' img=${webdev} class="1"  ptext='create modern websites '></es-story>
            <es-story h1='Graphic' h2='Design' img=${me} class="2" ptext="Visualize your idea and bring it to life with awsome designs"></es-story>
            <es-story h1='UI/UX' h2='Design' img=${stairs} class="3" ptext="Create custom user-friendly interfaces with custom widgets."></es-story>
            <es-next><es-next>
        `
        }
    }

    get styledTemplate() {
        return `<style>
        *{
            outline:none;
        }
        :host{
            position:absolute;
            top:20vh;
            left:0;
            width:95vw;
            height:78vh;
            display: flex;
            flex-direction:row;
            perspective: 600px;
            perspective-origin: center;
            transition:0.5s ease-in-out;
            -webkit-box-align: center;
            //background-image: radial-gradient(circle at bottom left,#00f5de00 ,68%,transparent 44%,#000024,rgb(0 54 142),transparent);
            background-repeat:no-repeat;
            z-index:1;
        }
        :host([expand]){
            backdrop-filter: blur(5px);
        }
        :host(:hover){
            //backdrop-filter: blur(15px);

        }
        @media only Screen and (max-width:850px){
            :host{
                transform: scale(0.8);
            }
            :host([expand]){
                transform: scale(1);
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