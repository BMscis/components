//components
import './storyImage'

//images
import one from '../../assets/img/ws10.png'
import two from '../../assets/img/ws11.png'
import three from '../../assets/img/ws12.png'
import four from '../../assets/img/ws13.png'

class StoryBackface extends HTMLElement{
    constructor(){
        super()
        console.log('StoryBackface constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('StoryBackface attribute change')
    }
    get images(){
        return this.getAttribute('images')
    }
    set images(val){
        return this.setAttribute('images',val)
    }

    connectedCallback(){
        console.log('StoryBackface connected')
        this.images = [one,two,three,four]
        console.log(this.images.length)
        this.render()
    }
    render(){
        console.log('StoryBackface rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <img src=${one}>
            <img src=${two}>
            <img src=${three}>
            <img src=${four}>
            `
    }
    get styledTemplate(){
        return `<style>
        ::-webkit-scrollbar {
            width: 0;
        }
        :host{
            display: flex;
            flex-flow: wrap;
            justify-content: flex-start;
            width: 100%;
            height: 100%;
            margin:20px;
            overflow-y:auto;
            overflow-x:hidden;
            box-sizing:border-box;
            scrollbar-width:none;
            backdrop-filter: blur(40px);
            background-image:linear-gradient(91deg, transparent, #800E11, #e51900 -15vmin, transparent 0vmin);
            perspective: 1000px;
        }
        es-image img{
            opacity:0.5;
        }
        img{
            width:80%;
            height:80%;
            padding:2% 10% 10% 2%;
            cursor:pointer;
            position: sticky;
            top:0;
            transform:scale3d(0.7,0.7,0.7) rotateY(45deg)
        }
        img(:hover){
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('StoryBackface disconnect')
    }
}
customElements.define('es-storybackface', StoryBackface);