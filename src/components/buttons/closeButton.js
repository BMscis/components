class CloseButton extends HTMLElement{
    constructor(){
        super()
        console.log('CloseButton constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('CloseButton attribute change')
    }
    connectedCallback(){
        console.log('CloseButton connected')
        this.addEventListener('click',e =>{
            console.log('CLOSE')
            var carousel = document.querySelector('es-carousel')
            var prevbutton = carousel.shadow.children[2]
            var textBoard = carousel.shadow.children[1]
            var nextbutton = carousel.shadow.lastChild
            prevbutton.removeAttribute('hide','')
            nextbutton.removeAttribute('hide','')
            textBoard.removeAttribute('hide','')
            var story = document.querySelector("es-carousel").shadowRoot.querySelector("es-story[active]")
            story.setAttribute('close','')
            carousel.removeAttribute('expand')

        })
        this.render()
    }
    render(){
        console.log('CloseButton rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        :host {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            margin:20px;
            display: block;
            transform: scale(var(--ggs,1));
            width: 22px;
            height: 22px;
            border: 2px solid transparent;
            border-radius: 40px;
            cursor: pointer;
            color:#f20c9c;
            opacity:1;
            z-index: 2;
        }
        :host(:hover){
            color:#00ff7e;
            transform:scale(1.5)
        
        }
        :host::after,
        :host::before {
            content: "";
            display: block;
            box-sizing: border-box;
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
        console.log('CloseButton disconnect')
    }
}
customElements.define('es-closebutton', CloseButton);