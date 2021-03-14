//components

//images
class Navbar extends HTMLElement{
    constructor(){
        super()
        console.log('Navbar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('Navbar attribute change')
    }
    connectedCallback(){
        console.log('Navbar connected')
        this.render()
    }
    render(){
        console.log('Navbar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-menubutton></es-menubutton>
            <es-logo></es-logo>
            <es-searchbar></es-searchbar>
            <es-label text='Welcome to espii club.' textafter=''></es-label>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
        position:absolute;
        top:0;
        width:100%;
        height:10vmin;
        display:flex;
        justify-content:space-between;
        align-items:center;
        backgrond:transparent;
        padding: 0 calc(10% - 20px);
        box-shadow:inset 0px 1px 12px 0px #191717;
        background-image: radial-gradient(circle at bottom right, #2b0023,1%, transparent)
    }
        hr{
            position:absolute;
            width:100%;
            top:9vmin;
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('Navbar disconnect')
    }
}
customElements.define('es-navbar', Navbar);