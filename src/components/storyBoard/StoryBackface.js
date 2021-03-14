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
        console.log('StoryBackface constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['scaler','images']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('StoryBackface attribute change')
        switch(prop){
            case 'scaler':
                this.scale()
                return
            case 'images':
                console.log()
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
        console.log('StoryBackface connected')
        this.render()
    }
    render(){
        console.log('StoryBackface rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    scale(){
        var images = this.shadowRoot.querySelectorAll('div')
        anime({
            targets: images,
            scale:[0.1, 1],
            rotateY:20,
            delay:500,
            duration:3000
        })
    }
    get styledTemplate(){
        return `<style>
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
            display: -webkit-box;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            margin: 20px;
            overflow-y: auto;
            overflow-x: hidden;
            backdrop-filter: blur(40px);
            background-image: linear-gradient(91deg, transparent, #800E11, #e51900 -15vmin, transparent 0vmin);
            transform-style:preserve-3d;
        }
  
        </style>`
    }
    disconnectedCallback(){
        console.log('StoryBackface disconnect')
    }
}
customElements.define('es-storybackface', StoryBackface);