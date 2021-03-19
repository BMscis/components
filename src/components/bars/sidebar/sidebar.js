//components

class Sidebar extends HTMLElement{
    constructor(){
        super()
        console.log('Sidebar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['expand']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('Sidebar attribute change')
        if( prop == 'expand'){
            if( newVal == 'true'){
                this.expand = 1
            }
            if( newVal == 'false'){
                this.expand = 0
            }
            else{
                return
            }
        }
    }
    connectedCallback(){
        console.log('Sidebar connected')
        this.render()
    }
    get expand(){
        return this.getAttribute('expand')
    }
    set expand(val){
        if (val == 1){
        return this.setAttribute('expand','')
        }
        else{
            return this.removeAttribute('expand')
        }
    }
    render(){
        console.log('Sidebar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-heading2 text='Portfolio'></es-heading2>
            <es-heading2 text='About Us'></es-heading2>
            <es-heading2 text='Contact Us'></es-heading2>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
        position:absolute;
        width:20%;
        left:-20%;
        top:10vmin;
        height:calc(100vh - 10vmin);
        background:transparent;
        backdrop-filter:blur(40px);
        z-index:1;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
        border-radius:2px;
        padding:20px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        flex-wrap:wrap;
        background-image:radial-gradient(circle at center top, hsl(181 96% 22% / 1),2%, transparent,#ac39496b 144%);
        border-radius:10px;
        
    }
    :host([expand]){
        left:0;
    }
        </style>`
    }
    disconnectedCallback(){
        console.log('Sidebar disconnect')
    }
}
customElements.define('es-sidebar', Sidebar);