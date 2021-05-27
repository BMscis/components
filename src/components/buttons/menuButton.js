class MenuButton extends HTMLElement {
    constructor() {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
    }
    setup(){
        this.addEventListener('click', e => {
            if (this.active == 'true') {
                var sidebar = document.querySelector("es-sidebar")
                sidebar.setAttribute('expand', 'false')
                this.removeAttribute('active')
            }
            else {
                var sidebar = document.querySelector("es-sidebar")
                sidebar.setAttribute('expand', 'true')
                this.active = 'true'
            }
        })
    }
    static get observedAttributes() {
        return []
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        this.render()
    }
    get active() {
        return this.getAttribute('active')
    }
    set active(val) {
        return this.setAttribute('active', val)
    }
    render() {
        this.shadow.innerHTML = `
            ${this.styledTemplate}
            `
    }
    get styledTemplate() {
        return `<style>
        *{
            outline:none;
        }
        :host {
            color: #01802c;
            position: absolute;
            left:20px;
            transform: scale(var(--ggs,1));
            //padding-left: 2px;
            //padding-top: 10px;
            width: 25px;
            height: 3px;
            background-color: currentColor;
            cursor: pointer;
            transition:0.5s ease;
            transform-style:preserve-3d;
            transform-origin: center;
            display: flex;
            flex-direction: column;
            align-self: flex-end;
            justify-self: center;
            //z-index:2;
          }
          
        :host::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            width: 30px;
            height: 3px;
            background-color: currentColor;
            transition:0.5s ease;
            transform-style:preserve-3d;
            transform-origin: center;
          }
          
        :host::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 0;
            width: 30px;
            height: 3px;
            background-color: currentColor;
            transition:0.5s ease;
            transform-style:preserve-3d;
            transform-origin: center;
          }
        :host(:hover){
            color:#81e900;
            width:6px;
        }
        :host([active]){
            background-color: #00000a;
            background-blend-mode: hard-light;
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            //opacity: 0.5;
            border-radius: 5px;
            width:0;
        }
        :host([active])::before{
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            transform: rotate(45deg);
            width: 30px;
            height: 3px;
            background-color: currentColor;
        }
        :host([active])::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            transform: rotate( -45deg);
            width: 30px;
            height: 5px;
            background-color: currentColor;
            backdrop-filter: drop-shadow(2px 2px 1px black);
            -webkit-backdrop-filter: drop-shadow(2px 2px 1px black);
        }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
}
customElements.define('es-menubutton', MenuButton);