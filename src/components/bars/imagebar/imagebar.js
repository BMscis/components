class Imagebar extends HTMLElement{
    constructor(){
        super()
        //console.log('imagebar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['src','text','description']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('imagebar attribute change')
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
    connectedCallback(){
        //console.log('imagebar connected')
        // this.addEventListener('mouseover', e=>{
        //     this.scrollIntoView(alignToTop)
        //     //console.log('hover')
        // })
        this.addEventListener('focusin',e=>{
            console.log('focus')
            this.setAttribute('hover','')
        })
        this.render()
    }
    render(){
        //console.log('imagebar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <img src=${this.src}>
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
        :host{
            transition: 0.5s ease;
            position:relative;
            height: calc(78vh * 0.9);
            display: flex;
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
        }
        .descriptiontext{
            position: absolute;
            top: 45vh;
            left: 0%;
            opacity:1;
            transition:1s ease-in-out;
        }
        :host([hover]){
            opacity:1;
        }
        :host(:hover){
            opacity:1;
        }
        :host(:hover) .tooltiptext{
            opacity:1;
        }
        :host(:hover) .descriptiontext{
            opacity:1;
        }
        @media only Screen and (max-width:850px){
            img{
                //height:73vw;
                //width:73vw;
            }
            :host{
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
        //console.log('imagebar disconnect')
    }
}
customElements.define('es-imagebar', Imagebar);