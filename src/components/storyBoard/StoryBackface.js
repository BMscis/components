//modules
import anime from '../../../node_modules/animejs/lib/anime.es.js';
//components

//images
// import one from '../../assets/img/lg.png'
// import two from '../../assets/img/Asset2.png'
// import three from '../../assets/img/Asset3.png'
// import four from '../../assets/img/Asset1.png'

class StoryBackface extends HTMLElement{
    constructor(){
        super()
        //console.log('StoryBackface constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['scaler','images']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('StoryBackface attribute change')
        switch(prop){
            case 'scaler':
                this.scale()
                return
            case 'images':
                //console.log()
                return
        }
    }
    get images(){
        return this.getAttribute('images')
    }
    set images(val){
        return this.setAttribute('images',val)
    }

    connectedCallback(){
        //console.log('StoryBackface connected')
        this.render()
    }
    render(){
        //console.log('StoryBackface rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <div >
            <svg viewbox="0 0 14 22">
            <rect class="mouse-outline" width="7" height='11' x='4' y='7' rx='3'/>
            <circle class="scroll" cx='7.5' cy='11' r='0.5'/>
            </div>
            <slot ></slot>
            `
    }
    scale(){
        // var images = this.shadowRoot.querySelectorAll('slot')
        // anime({
        //     targets: images,
        //     scale:[0.1, 1],
        //     rotateY:20,
        //     delay:500,
        //     duration:3000
        // })
        return
    }
    get styledTemplate(){
        return `<style>
        ::-webkit-scrollbar {
            width: 0;
        }
        *{
            outline:none;
        }
        :host{
            display: flex;
            flex-direction:column;
            width: calc(80vw * 0.85);
            height: calc(78vh * 0.9);
            padding: 0;
            backdrop-filter: blur(0px);
            background-image: linear-gradient(91deg, transparent, #850E11, #e51900 -15vmin, transparent 0vmin);
            transform-style:preserve-3d;
            overflow:hidden;
            position:relative;
            z-index:1;
        }
        svg{
            position:absolute;
        }
        div{
            position: absolute;
            z-index: -1;
            right: 0%;
            bottom: 22%;
            width: 10vh;
        }
        slot{
            width: 100%;
            height: calc(78vh * 0.9);
            position:relative;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow-y:scroll;
            scroll-snap-type: y mandatory;

        }
        .mouse-outline{
            fill:none;
            stroke:pink;
            stroke-width:0.5;
        }
        .scroll{
            fill: white;
            opacity:1;
            transform-origin: 50% 10px;
            animation-name:scroll;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
        }
        @keyframes scroll{
            0,
            20%{
                transform: translateY(0) scaleY(1)
            }
            100%{
                transform:translateY(6px) scaleY(2);
                opacity:0;
            }
        }
        @media only Screen and (max-width:850px){
            :host{
                width:95vw;
            }
        }
  
        </style>`
    }
    disconnectedCallback(){
        //console.log('StoryBackface disconnect')
    }
}
customElements.define('es-storybackface', StoryBackface);