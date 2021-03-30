
class Navbutton extends HTMLElement{
    static get properties(){
        return ['text']
    }
    get styleTemplate(){
        return `
        <style>
        *{
            outline:none;
        }
            :host{
                display: grid;
                white-space: nowrap;
                position:relative;
                cursor:pointer;
                transition:0.5s ease;
                margin-bottom: 1vh;
                height: 4vh;
                margin: 3vh;
            }
            :host([active]){
                background: linear-gradient(to right, #c30047, #1a71ff);
                -webkit-background-clip: text;
                backdrop-filter: brightness(2)
                -webkit-backdrop-filter: brightness(2)
                opacity:1;
                transition:0.5s ease;
            }
            :host([inactive]){
                opacity:0.5;
                transition:0.5s ease;
            }
            :host([inactive]:hover){
                opacity:1;

            }
            button {
                border: none;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                outline: none;
                border-radius: 2px;
                font-family: 'ACLight';
                font-size:2vh;
                cursor:pointer;
                margin:0;
                padding:0;
                height: 3vh;
            }
            :host([active]) button{
                -webkit-background-clip: text;
                background: transparent;
                border-bottom: 2px solid;
                border-bottom-color: blueviolet;
                border-image: linear-gradient(to right,transparent 30%, blue 35%, red 50%, transparent 70%);
                border-image-slice: 8;
            }
        </style>
        `
    }
    constructor (){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.addEventListener('click',e=>{
            if(this.hasAttribute('active')){
                return
            }
            if(this.hasAttribute('inactive')){
                var activeNavbutton = document.querySelector("es-sidebar").shadowRoot.querySelector("es-navbutton[active]")
                activeNavbutton.removeAttribute('active')
                activeNavbutton.setAttribute('inactive','')
                this.removeAttribute('inactive')
                this.setAttribute('active','')
                if(window.outerWidth > 850){
                    var businesscard = document.querySelector('es-carousel').shadowRoot.querySelector("es-businesscard");
                    businesscard.setAttribute('text',this.text)
                }
                
            }

            if(window.outerWidth < 850){
                var carousel = document.querySelector('es-carousel')
                if(this.text === 'Contact Us'){
                    carousel.setAttribute('mobibusinesscard','Contact Us')
                }
                if(this.text === 'Portfolio'){
                    carousel.setAttribute('mobibusinesscard','Portfolio')
                }
            }

        })
        this.render();
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "text" ){
            //console.log('text rendered')
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    render(){
        this.shadow.innerHTML=`
        ${this.styleTemplate}
        <button>${this.text}</button>`
    }
}
customElements.define('es-navbutton', Navbutton);