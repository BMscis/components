class MenuButton extends HTMLElement {
    constructor() {
        super()
        console.log('MenuButton constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return []
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('MenuButton attribute change')
    }
    connectedCallback() {
        console.log('MenuButton connected')
        this.addEventListener('click', e => {
            console.log('sidebar')
            if (this.active == 'true') {
                var sidebar = document.querySelector("#body > es-sidebar")
                sidebar.setAttribute('expand', 'false')
                this.removeAttribute('active')
            }
            else {
                var sidebar = document.querySelector("#body > es-sidebar")
                sidebar.setAttribute('expand', 'true')
                this.active = 'true'
            }
        })
        this.render()
    }
    get active() {
        return this.getAttribute('active')
    }
    set active(val) {
        return this.setAttribute('active', val)
    }
    render() {
        console.log('MenuButton rendering')
        this.shadow.innerHTML = `
            ${this.styledTemplate}
            `
    }
    get styledTemplate() {
        return `<style>
        :host {
            color: #7992bf;
            position: absolute;
            left:20px;
            transform: scale(var(--ggs,1));
            margin-left: 2px;
            margin-top: 10px;
            width: 17px;
            height: 1px;
            background-color: currentColor;
            cursor: pointer;
            transition:0.5s ease;
            display: flex;
            flex-direction: column;
            align-self: flex-end;
            justify-self: center;
            z-index:2;
          }
          
        :host::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            width: 17px;
            height: 1px;
            background-color: currentColor;
          }
          
        :host::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 0;
            width: 17px;
            height: 1px;
            background-color: currentColor;
          }
        :host(:hover){
            color:#19eff4
        }
        :host([active]){
            background-color: #00000a;
            background-image: url(./assets/img/ws8.png);
            background-blend-mode: hard-light;
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.5;
            border-radius: 5px;
            width:0;
        }
        :host([active])::before{
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            transform: rotate(45deg);
            width: 17px;
            height: 1px;
            background-color: currentColor;
        }
        :host([active])::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            transform: rotate( -45deg);
            width: 17px;
            height: 1px;
            background-color: currentColor;
        }
        </style>`
    }
    disconnectedCallback() {
        console.log('MenuButton disconnect')
    }
}
customElements.define('es-menubutton', MenuButton);