class Imagebar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this.shadow =this.attachShadow({mode:'open'})
        this.setup()
    }
    static get observedAttributes(){
        return ['src','text','description']
    }
    setup(){
        this.addEventListener('focusin',e=>{
            this.setAttribute('hover','')
        })
    }
    attributeChangedCallback(prop,oldVal,newVal){
        switch(prop){
            case 'src':
                if(newVal === oldVal){
                    return
                }
                else{
                    this.src = newVal
                    this.render()
                    return
                }
            case 'text':
                if(newVal === oldVal){
                    return
                }
                else{
                    this.text = newVal
                    return
                }
            case 'description':
                if(newVal === oldVal){
                    return
                }
                else{
                    this.description = newVal
                    return
                }
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        // this.addEventListener('mouseover', e=>{
        //     this.scrollIntoView(alignToTop)
        // })

        this.render()
    }
    render(){
        this.innerHtml =  `
            ${this.styledTemplate}
            <img alt='${this.text}' src=${this.src}>
            <es-p class="tooltiptext">${this.text}</es-p>
            <es-p class="descriptiontext">
            ${this.description}
            </es-p>
            `
    }
    get src(){
        return this.getAttribute('src')
    }
    set src(val){
        return this.setAttribute('src',val)
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    get description(){
        return this.getAttribute('description')
    }
    set description(val){
        return this.setAttribute('description',val)
    }
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
            user-select:none;
        }
        es-imagebar{
            transition: 0.5s ease;
            position:relative;
            height: calc(78vh * 0.9);
            width:calc(78vh * 0.5);
            display: inline-flex;
            justify-content: center;
            margin:10px;
            scroll-snap-align: start;
            z-index:1;
            user-select:none;

        }
        img{
            height: calc(78vh * 0.5);
            //width:73vh;
            scroll-snap-align: start;
            z-index:0;
            user-select:none;

        }
        .tooltiptext{
            border-radius: 6px;
            position: absolute;
            top: 40vh;
            left: 0%;
            opacity:1;
            transition:1s ease-in-out;
            font-variant-numeric: ordinal;
            font-size: calc(78vh * 0.045);
            opacity:0.5;
        }
        .descriptiontext{
            position: absolute;
            top: 45vh;
            left: 0%;
            opacity:1;
            transition:1s ease-in-out;
            font-variant-caps: all-petite-caps;
            font-family: 'ACBoldSemiCn';
            font-size: calc(78vh * 0.035);
        }
        es-imagebar([hover]){
            opacity:1;
        }
        es-imagebar(:hover){
            opacity:1;
        }
        es-imagebar(:hover) .tooltiptext{
            //opacity:1;
        }
        es-imagebar(:hover) .descriptiontext{
            //opacity:1;
        }
        @media only Screen and (max-width:850px){
            img{
                //height:73vw;
                //width:73vw;
            }
            es-imagebar{
                opacity:1;
                justify-content:flex-end;
            }
            .tooltiptext{

            }
            .descriptiontext{

            }
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
customElements.define('es-imagebar', Imagebar);