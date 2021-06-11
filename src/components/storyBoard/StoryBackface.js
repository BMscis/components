//modules
//components

//import images

import { ScrollPad } from '../typography/scrollpad/scrollpad'
import { StoryContainer } from './storycontainer'

export class StoryBackface extends HTMLElement {
    constructor(imageset) {
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow =this.attachShadow({mode:'open'})
        this.components = {}
        this.imageset = imageset
        this.setup()
        return
    }
    setup() {
        this.components = this.getComponents
        this.addEventListener('resize', e => {
            var html = document.querySelector('html').getAttribute('mobi')
            if (html === 'true') {
                this.setAttribute('style', 'position:relative')
            }
            if (html === 'false') {
                this.setAttribute('style', 'position:absolute')
            }
        })
        return
    }
    get getComponents() {
        var scr = new ScrollPad()
        scr.setAttribute("vertical", '')
        return {"scrollpadvert":scr,"container":new StoryContainer(this.imageset)}
    }
    static get observedAttributes() {
        return ['scaler', 'images']
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        return
    }
    get images() {
        return this.getAttribute('images')
    }
    set images(val) {
        return this.setAttribute('images', val)
    }

    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.container)
        this.appendChild(this.components.scrollpadvert)
        return
    }
    scale() {
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
    get styledTemplate() {
        return 
    }
    disconnectedCallback() {
        for (let i = 0; i < this.childElementCount + 1; i++) {
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('es-storybackface', StoryBackface);