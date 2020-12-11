//images
import webdev from '../../assets/svg/webdev.svg'
import coa from '../../assets/svg/coa.svg'
import me from '../../assets/svg/me.svg'


class StoryImages extends HTMLElement{

    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observeredAttributes() {
        return ['img','width']
    }
    get styleTemplate(){
        return `
        <style>
        :host{
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            height: 50%;
        }
        </style>
        `
    }
    get img(){
        return this.getAttribute('img')
    }
    set img(val){
        return this.style.backgroundImage = 'url(' + val +')'
    }
    get width(){
        return this.getAttribute('width')
    }
    set width(val){
        return this.style.width = val
        
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "img" || "width"){this.render()}
    }
    connectedCallback(){
        this.img = coa
        this.width = '50%'
        this.render();
    }
    render(){
        return this.shadow.innerHTML = `
        ${this.styleTemplate}
        <slot></slot>`
    }
}
customElements.define('es-image', StoryImages);