import btnGradient from '../../assets/svg/buttonGradient.svg'
class NextButton extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})

    }
    static get observedAttributes(){
        return ['onclick']
    }
    get styleTemplate(){
        return `
            <style>
            :host{
                cursor: pointer;
                box-sizing: border-box;
                position: absolute;
                top:50%;
                right:150px;
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
                border-right: 2px inset;
                left: 5px;
                top: 6px;
                transform: rotate(-45deg);
            }
            :host(:hover){
                transform: scale(var(--ggs,2)) rotate(360deg);
            }
            </style>
        `
    }
    connectedCallback(){
        console.log('nextC')
        this.addEventListener('click',e=>{
            console.log('next clicked')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story.active')
            if (story.nextElementSibling != document.querySelector('es-carousel').shadow.querySelector('es-next') ){
                if (story.nextElementSibling){
                console.log(true)
                story.setAttribute('rclick',true)
                story.classList.remove('active')
                if(story.previousElementSibling.hasAttribute('Rclick')){
                    story.previousElementSibling.removeAttribute('Rclick')
                }
                if(story.hasAttribute('active')){
                    story.removeAttribute('active')
                }
                story.nextElementSibling.classList.add('active')
                story.nextElementSibling.setAttribute('active','')
            }
            else{
                return
            }
        }
        })
        this.render()
    }
    disconnectedCallback(){
        console.log('nextD')
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
customElements.define('es-next', NextButton);