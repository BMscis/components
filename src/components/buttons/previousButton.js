import btnGradient from '../../assets/svg/buttonGradient.svg'
class PreviousButton extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})

    }
    static get observedAttributes(){
        return []
    }
    get styleTemplate(){
        return `
            <style>
            :host{
                cursor: pointer;
                box-sizing: border-box;
                position: absolute;
                top:50%;
                left:150px;
                display: block;
                transform: scale(var(--ggs,1));
                width: 22px;
                height: 22px;
                border: 2px dotted;
                border-image: ${'url('+btnGradient+')'};
                border-image-slice: 8;
                border-image-width: 7px;
                border-image-outset: 0;
                transition: 0.5s ease;
                z-index:1;
            }
            :host::before{
                content: "";
                box-sizing: border-box;
                position: absolute;
                top: -2px;
                left: -2px;
                display: block;
                transform: scale(var(--ggs,2)) rotate(45deg);
                width: 22px;
                height: 22px;
                border-left: 2px dotted;
                border-radius: 100px;
                cursor: pointer;
                border-image: ${'url('+btnGradient+')'};
                border-image-width: 2px;
            }
            :host::after{
                content: "";
                display: block;
                box-sizing: border-box;
                position: absolute;
                width: 6px;
                height: 6px;
                border-bottom: 2px inset;
                border-left: 2px inset;
                transform: rotate(45deg);
                left: 7px;
                top: 6px;
            }
            :host(:hover){
                transform: scale(var(--ggs,2)) rotate(360deg);
            }
            </style>
        `
    }
    connectedCallback(){
        console.log('previousC')
        this.addEventListener('click',e=>{
            console.log('previous clicked')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active')
            if (story.previousElementSibling != document.querySelector('es-carousel').shadow.querySelector('es-previous'))
            {
                if (story.previousElementSibling){
                console.log(true)
                story.setAttribute('lclick',true)
                story.classList.remove('active')
                if(story.nextElementSibling.hasAttribute('lclick')){
                    story.nextElementSibling.removeAttribute('lclick')
                }
                story.removeAttribute('active')
                story.previousElementSibling.classList.add('active')
                story.previousElementSibling.setAttribute('active','')
            }}
        })
        this.render()
    }
    disconnectedCallback(){
        console.log('previousD')
    }
    attributeChangedCallback(prop,oldVal,newVal){
        this.render()
    }
    
    render(){
        return this.shadow.innerHTML = `
            ${this.styleTemplate}
        `
    }
}
customElements.define('es-previous', PreviousButton);
