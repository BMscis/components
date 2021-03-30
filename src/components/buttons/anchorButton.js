
class AnchorButton extends HTMLElement{
    static get observedAttributes(){
        return ['active']
        
    }
    get styleTemplate(){
        return `
        <style>
        *{
            outline:none;
        }
        :host{
            background: linear-gradient(to right, #cc3e14,  #e2e22ca9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            outline: none;
            border-radius: 5px;
            border:none;
            padding: 10px;
            font-family:ACBoldSemiCn;
            cursor: pointer;
            height: fit-content;
            calc(78vh * 0.03);
            z-index: 1;
        }
        :host(:hover) {
            -webkit-background-clip: border-box;
            -webkit-text-fill-color: #f1f1f1;
            opacity:1;
        }
        </style>
    `
    }
    set css(val){
        if (this.active == false){


        }
    }
    constructor (){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.active = false
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop === "active" ){
            this.css = 0
            this.render()}
    }
    connectedCallback(){
        
        this.css = 0
        this.addEventListener('click', e=>{
            //console.log('EXPAND')
            var carousel = document.querySelector('es-carousel')
            var prevButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-previous')
            var businessCard = document.querySelector("#body > es-carousel").shadowRoot.querySelector("es-businesscard")
            var nextButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-next')
            if(nextButton != null){
                nextButton.setAttribute('hide','')
            }
            if(prevButton != null){
                prevButton.setAttribute('hide','')
            }
            if(businessCard != null ){
                businessCard.setAttribute('hide','')
            }
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            var closeButton = story.shadowRoot.querySelector("es-closebutton")
            story.setAttribute('expandstory','')
            carousel.setAttribute('expand','')
            var storyBackface = document.querySelector("es-carousel").shadowRoot.querySelector("es-story[active] ").shadowRoot.querySelector("es-storybackface")
            //console.log("STORYBACKFACE: " + typeof(storyBackface))

            storyBackface.setAttribute('scaler','true')
            var sidebar = document.querySelector('es-sidebar')
            sidebar.setAttribute('style','z-index: 0')
        })
        this.render();
    }
    render(){
        this.shadow.innerHTML = 
        `
        ${this.styleTemplate}
        <a>Expand</a>`
    }
}
customElements.define('es-button', AnchorButton);