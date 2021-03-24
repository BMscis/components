//images



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
            position:relative;
        }
        img{
            height:calc(83vh * 0.5);
            position:relative;
            transition:0.5s ease;
            //opacity:0.5;
        }
        img{
            cursor:pointer;
        }
        img:hover{
            //transform:scale(1.5)
        }
        </style>
        `
    }
    get img(){
        return this.getAttribute('img')
    }
    set img(val){
        return this.setAttribute('img',val)
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
        //this.width = '50%'
        this.render();
    }
    render(){
        return this.shadow.innerHTML = `
        ${this.styleTemplate}
        <img src=${this.img}>`
    }
}
customElements.define('es-image', StoryImages);