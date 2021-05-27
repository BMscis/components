//images



class StoryImages extends HTMLElement{

    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
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
            height:calc(60vh * 0.5);
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
    get alt(){
        return this.getAttribute('alt')
    }
    set alt(val){
        return this.setAttribute('alt',val)
    }
    get width(){
        return this.getAttribute('width')
    }
    set width(val){
        return this.style.width = val
    }

    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "img" || "width" || "alt"){this.render()}
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        //this.width = '50%'
        this.render();
    }
    render(){
        return this.shadow.innerHTML = `
        ${this.styleTemplate}
        <img alt="${this.alt} "src=${this.img}>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-image', StoryImages);