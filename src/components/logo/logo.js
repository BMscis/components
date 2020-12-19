class Logo extends HTMLElement{
    constructor(){
        super()
        console.log('Logo constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('Logo attribute change')
    }
    connectedCallback(){
        console.log('Logo connected')
        this.render()
    }
    render(){
        console.log('Logo rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style>
        :host {
        }
        :host
         {
            transform: scale(var(--ggs,1))
            box-sizing: border-box;
            position: fixed;
            top:6vh;
            display: flex;
            justify-content: center;
            width: 20px;
            height: 20px;
            border-radius: 3px;
            background-image: linear-gradient(to bottom right, #435269, #5190ec 47%, transparent 47% 53%, #5190ec -11%,#244069);
            transform: rotate(45deg);
            
        }
        :host(:hover){
            cursor: pointer;
        }
        :host(:hover)::after,:host(:hover)::before {
            cursor: pointer;
            animation-name:flashlogo;
            animation-duration:1s;
            animation-fill-mode: both;
            animation-timing-function: linear;
        }
        :host::after,:host::before{
            content:'';
            clip-path: polygon(50% 26px, 26% 50%, 50% 70%, 0px 50%);
            height: 80px;
            width: 80px;
            position: absolute;
            background-image: linear-gradient(91deg, transparent, #800E11, #e51900 15vmin, transparent 10vmin);
            background-size: contain;
            background-repeat: no-repeat;
            
        }
        :host::after {
            
            top: -28.75px;
            left: -32px;
            transform: rotate(310deg);
        }
        :host::before {
            top: -30.45px;
            right: -32px;
            transform: rotate(133deg);
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('Logo disconnect')
    }
}
customElements.define('es-logo', Logo);