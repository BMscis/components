export class CloseComponent extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
    }
    setup(){
        this.addEventListener('resize',e=>{
            var html = document.querySelector('html').getAttribute('mobi')
            if(html === 'true'){
                this.setAttribute('style','position:relative')
                this.setAttribute('mobi','')
            }
            if(html === 'false'){
                this.setAttribute('style', 'position:absolute')
                if(this.hasAttribute('mobi')){
                    this.removeAttribute('mobi')
                }
            }
        })
    }
    static get observedAttributes(){
        return ['text','textafter']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case 'text':
                if(newVal != oldVal){
                    this.text = newVal
                }
                return
            case 'textafter':
                if(newVal != oldVal){
                    this.textafter = newVal
                }
                return
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    get textafter(){
        return this.getAttribute('textafter')
    }
    set textafter(val){
        return this.setAttribute('textafter',val)
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        var html = document.querySelector('html').getAttribute('mobi')
        if(html === 'true'){
            this.setAttribute('style','position:relative')
            this.setAttribute('mobi','')
        }
        else{
            if(this.hasAttribute('mobi')){
                this.removeAttribute('mobi')
            }
        }

        this.render()
    }
    render(){
        this.innerHtml =  `
            ${this.styledTemplate}
            <es-closebutton></es-closebutton>
            <es-heading text=${this.text} textafter=${this.textafter}></es-heading>
            `
    }
    get styledTemplate(){
        return `<style>
        es-closecomponent{
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: calc((78vh * 0.1) + (78vh * 0.05));
            height: calc((78vh * 0.1) + (78vh * 0.05));
            position:absolute;
            top:0;
            margin:10px;
            z-index:2;
            transform: scale(var(--ggs,1));
        }
        es-closecomponent([mobi]){
            transform: scale(var(--ggs,0.6));
        }
        </style>`
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-closecomponent', CloseComponent);