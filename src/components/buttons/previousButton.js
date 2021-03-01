import btnGradient from '../../assets/svg/buttonGradient.svg'
class PreviousButton extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.move()
    }
    static get observedAttributes() {
        return ['cssX','move']
    }
    get styleTemplate() {
        return `
            <style>
            :host{
                cursor: pointer;
                box-sizing: border-box;
                position: absolute;
                top:80%;
                left:${this.cssX};
                display: block;
                transform: scale(var(--ggs,1));
                transform-origin: center;
                width: 22px;
                height: 22px;
                //border: 2px dotted;
                border-image: ${'url(' + btnGradient + ')'};
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
                display: block;
                transform: scale(var(--ggs,1)) rotate(45deg);
                width: 22px;
                height: 22px;
                border-left: 2px dotted;
                border-radius: 100px;
                cursor: pointer;
                border-image: ${'url(' + btnGradient + ')'};
                border-image-width: 2px;
            }
            :host::after{
                content: "";
                display: block;
                box-sizing: border-box;
                position: absolute;
                width: 22px;
                height: 22px;
                border-bottom: 7px inset;
                border-left: 7px solid white;
                border-radius:25%;
                transform: rotate(45deg);
            }
            :host([hide]){
                display:none;
            }
            :host(:hover){
                transform: scaleY(1.5) scaleX(2);
            }
            </style>
        `
    }
    get cssX(){
        return this.getAttribute('cssX')
    }
    set cssX(val){
        return this.setAttribute('cssX',val)
    }
    connectedCallback() {
        console.log('previousC')
        this.addEventListener('click', e => {
            console.log('previous clicked')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            if (story.previousElementSibling != document.querySelector('es-carousel').shadow.querySelector('es-previous')) {
                if (story.previousElementSibling) {
                    story.removeAttribute('active')
                    story.previousElementSibling.setAttribute('active', 'left')
                }
            }
        })
        this.render()
    }
    move(){
        var i = document.querySelector('es-carousel').clientWidth
        var c = 0.2*i
        if (i <= 700){
            var x = i/2
            y = 300/1.5
        }
        else{
            var x = Math.round((i + c)/2)
            var y = 300/1.5
        }
        
        var position = Math.round(x - y)
        this.cssX = position + 'px'
    }
    disconnectedCallback() {
        console.log('previousD')
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop == 'move'){
            this.move()
            this.render()
        }
    }

    render() {
        return this.shadow.innerHTML = `
            ${this.styleTemplate}
        `
    }
}
customElements.define('es-previous', PreviousButton);
