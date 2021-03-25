//components

//images
class Navbar extends HTMLElement{
    constructor(){
        super()
        //console.log('Navbar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['render']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('Navbar attribute change')
        switch(prop){
            case 'render':
                this.render()
                return
        }
    }
    connectedCallback(){
        //console.log('Navbar connected')
        window.addEventListener('resize',e=>{
            console.log('resizing nav')
            var navbar = document.querySelector('es-navbar')
            if(window.outerWidth <= 850 && navbar != null){
                document.body.removeChild(navbar)
            }
            if(window.outerWidth > 850 && navbar === null){
                var nav = document.createElement('es-navbar')
                document.body.prepend(nav)
            }
        })
        this.render()
    }
    render(){
        //console.log('Navbar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-label text='Welcome to espii club.' textafter=''></es-label>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
        position:relative;
        top:0;
        left:0;
        width:80vw;
        height:3vh;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        z-index:2;
    }
        </style>`
    }
    disconnectedCallback(){
        //console.log('Navbar disconnect')
    }
}
customElements.define('es-navbar', Navbar);