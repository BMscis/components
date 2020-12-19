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
        this.render()
    }
    render(){
        console.log('StoryBackface rendering')
        var imgs = this.images
        console.log(imgs)
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            ${imgs.forEach(element => {
                `<es-image img=${element}></es-image>`                
            })}
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
            width:50%;
            height:60%;
            padding:20px;
            overflow-y:auto;
            overflow-x:hidden;
            box-sizing:border-box;
            scrollbar-width:none;
            backdrop-filter: blur(40px);
            background-image:linear-gradient(91deg, transparent, #800E11, #e51900 -15vmin, transparent 0vmin);
        }
        es-image img{
            opacity:0.5;
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('StoryBackface disconnect')
    }
}
customElements.define('es-storybackface', StoryBackface);