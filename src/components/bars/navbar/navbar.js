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
        this.render()
    }
    render(){
        //console.log('Navbar rendering')
        var htmlmobi = document.querySelector("html")
        if(htmlmobi == true || htmlmobi.clientWidth < 800){
            this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-logo></es-logo>
            <es-label text='Welcome to espii club.' textafter=''></es-label>
            `
        }
        else{
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <es-label text='Welcome to espii club.' textafter=''></es-label>
            `
        }
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