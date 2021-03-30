class CloseButton extends HTMLElement{
    constructor(){
        super()
        //console.log('CloseButton constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('CloseButton attribute change')
    }
    connectedCallback(){
        //console.log('CloseButton connected')
        this.addEventListener('click',e =>{
            //console.log('CLOSE')
            var carousel = document.querySelector('es-carousel')
            var prevButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-previous')
            var businessCard = document.querySelector("#body > es-carousel").shadowRoot.querySelector("es-businesscard")
            var nextButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-next')

            if(document.querySelector('html').getAttribute('mobi') != 'true'){
                if(nextButton != null){
                    nextButton.removeAttribute('hide','')
                }
                if(prevButton != null){
                    prevButton.removeAttribute('hide','')
                }
                if(businessCard != null ){
                    businessCard.removeAttribute('hide','')
                }
            }
            else{
                console.log()
            }

            var story = document.querySelector("es-carousel").shadowRoot.querySelector("es-story[active]")
            story.setAttribute('close','')
            carousel.removeAttribute('expand')
            var sidebar = document.querySelector('es-sidebar')
            sidebar.setAttribute('style','z-index: 2')

        })
        this.render()
    }
    render(){
        //console.log('CloseButton rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
        }
        :host {
            box-sizing: border-box;
            position: relative;
            transform: scale(var(--ggs,1));
            width: 22px;
            height: 22px;
            border-radius: 40px;
            cursor: pointer;
            color:#f20c9c;
            opacity:1;
        }
        :host(:hover){
            color:#00ff7e;
            transform:scale(1.5)
        
        }
        :host::after,
        :host::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 2px;
            background: currentColor;
            transform: rotate(45deg);
            border-radius: 5px;
            top: 8px;
            left: 1px
        }
        :host::after {
            transform: rotate(-45deg)
        }
        :host([show]){
            opacity:1;
        }
        </style>`
    }
    disconnectedCallback(){
        //console.log('CloseButton disconnect')
    }
}
customElements.define('es-closebutton', CloseButton);