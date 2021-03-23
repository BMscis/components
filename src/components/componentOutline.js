class Component extends HTMLElement{
    constructor(){
        super()
        //console.log('Component constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('Component attribute change')
        switch(prop){
            case '':
                return
        }
    }
    connectedCallback(){
        //console.log('Component connected')
        this.render()
    }
    render(){
        //console.log('Component rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            `
    }
    get styledTemplate(){
        return `<style></style>`
    }
    disconnectedCallback(){
        //console.log('Component disconnect')
    }
}
customElements.define('es-component', Component);