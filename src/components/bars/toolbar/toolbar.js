class Toolbar extends HTMLElement{
    constructor(){
        super()
        console.log('toolbar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('toolbar attribute change')
    }
    connectedCallback(){
        console.log('toolbar connected')
        this.render()
    }
    render(){
        console.log('toolbar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-menubutton></es-menubutton>
            <es-searchbar contracted></es-searchbar>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            height:10vmin;
            width:100%;
            z-index:3;
            position:fixed;
            bottom:0;
            background:white;
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('toolbar disconnect')
    }
}
customElements.define('es-toolbar', Toolbar);