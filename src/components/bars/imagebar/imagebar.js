class Imagebar extends HTMLElement{
    constructor(){
        super()
        //console.log('imagebar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['src','text']
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
                }
                return
        }
    }
    connectedCallback(){
        //console.log('imagebar connected')
        // this.addEventListener('mouseover', e=>{
        //     this.scrollIntoView(alignToTop)
        //     //console.log('hover')
        // })
        this.render()
    }
    render(){
        //console.log('imagebar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <img src=${this.src}>
            <span class="tooltiptext">${this.text}</span>
            <div class="descriptiontext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
            </div>
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
    get styledTemplate(){
        return `<style>
        *{
            outline:none;
        }
        :host{
            cursor:pointer;
            top:0;
            transition: 0.5s ease;
            opacity:0.5;
            position:relative;
        }
        img{
            height:73vh;
            width:73vh;
        }
        .tooltiptext{
            opacity:0;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            position: absolute;
            left: calc(500px + 120px);
            top: 30%;
            white-space: pre;
            transition:1s ease-in-out;
            font-family: ACSemiLight;
            background: radial-gradient(#ffffff 28%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(-27px 22px 5px black) saturate(0.5);
        }
        .descriptiontext{
            opacity:0;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            position: absolute;
            width:70%;
            left: calc(500px + 60px);
            top: 40%;
            transition:1s ease-in-out;
            font-family: ACSemiLight;
            background: radial-gradient(#ffffff 28%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(-27px 22px 5px black) saturate(0.5);
        }
        :host(:hover){
            opacity:1;
        }
        :host(:hover) .tooltiptext{
            opacity:1;
            filter: drop-shadow(2px 4px 6px black) saturate(1);
        }
        :host(:hover) .descriptiontext{
            opacity:1;
            filter: drop-shadow(2px 4px 6px black) saturate(1);
        }
        @media only Screen and (max-width:850px){
            img{
                height:73vw;
                width:73vw;
            }
            .tooltiptext{
                top: 50vw;
                left: 60%;
            }
            .descriptiontext{
                top: 55vw;
                left: 10%;
            }
        }
        </style>`
    }
    disconnectedCallback(){
        //console.log('imagebar disconnect')
    }
}
customElements.define('es-imagebar', Imagebar);