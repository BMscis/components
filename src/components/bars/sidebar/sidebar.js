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
            <es-searchbar></es-searchbar>
            <es-navbutton active text='Portfolio'></es-navbutton>
            <es-navbutton inactive text='Contact Us'></es-navbutton>
            `
    }
    get styledTemplate(){
        return `<style>
        *{
            box-sizing: border-box;
        }
        :host{
        position:absolute;
        width:30%;
        //left:-20%;
        top: calc(3vh + 20px);
        //backdrop-filter: hue-rotate(242deg);
        height:80px;
        background:transparent;
        backdrop-filter:blur(5px);
        z-index:1;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08);
        border-radius:2px;
        padding:5px 5px 5px 20px;
        display:block;
        flex-wrap:wrap;
        //background-image:radial-gradient(circle at center top, hsl(181 96% 22% / 1),2%, transparent,#ac39496b 144%);
        background:transparent;
        border-radius:10px;
        
    }
    :host([expand]){
        left:0;
    }
    @media only Screen and (max-width:800px){
        :host{
            width:50vmin;
        }
    }
        </style>`
    }
    disconnectedCallback(){
        console.log('Sidebar disconnect')
    }
}
customElements.define('es-sidebar', Sidebar);