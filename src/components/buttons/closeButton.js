class CloseButton extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
    }
    setup(){
        this.addEventListener('click',e =>{
            var carousel = document.querySelector('es-carousel')
            var prevButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-previous')
            var businessCard = document.querySelector("#body > es-carousel").shadowRoot.querySelector("es-businesscard")
            var nextButton = document.querySelector("#body > es-carousel").shadow.querySelector('es-next')
            if(document.querySelector('html').getAttribute('mobi') === 'true'){
                var scrollpad = document.querySelector('es-carousel').shadow.querySelector('es-scrollpad')
                scrollpad.removeAttribute('hide')
            }
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
                return
            }

            var story = document.querySelector("es-carousel").shadowRoot.querySelector("es-story[active]")
            story.setAttribute('close','')
            carousel.removeAttribute('expand')
            var sidebar = document.querySelector('es-sidebar')
            sidebar.setAttribute('style','z-index: 2')

        })
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.render()
    }
    render(){
        this.innerHtml =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
        }
        es-closebutton {
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
        es-closebutton(:hover){
            color:#00ff7e;
            transform:scale(1.5)
        
        }
        es-closebutton::after,
        es-closebutton::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 4px;
            background: currentColor;
            transform: rotate(45deg);
            border-radius: 5px;
            top: 8px;
            left: 1px
        }
        es-closebutton::after {
            transform: rotate(-45deg)
        }
        es-closebutton([show]){
            opacity:1;
        }
        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-closebutton', CloseButton);