class Imagebar extends HTMLElement{
    constructor(){
        super()
        console.log('imagebar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return ['image','text']
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('imagebar attribute change')
        switch(prop){
            case 'image':
                //this.image = newVal
                return
            case 'text':
                //this.text = newVal
                return
        }
    }
    connectedCallback(){
        console.log('imagebar connected')
        this.render()
    }
    render(){
        console.log('imagebar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <div>
            <span class="tooltiptext">${this.text}</span>
            </div>
            `
    }
    get styledTemplate(){
        return `<style>
        host:{
            width:auto;
            cursor:pointer;
            top:0;
            transition: 0.5s ease;
            background-image:${this.image};
        }
        div{
            width:fit-content;
            height: fit-content;
            position:relative;
            cursor:pointer;
        }
        div .tooltiptext{
            opacity:0;
            width: 120px;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            position: absolute;
            left: 70%;
            top: 25%;
            transition:1s ease-in-out;
            font-family: ACSemiLight;
            background: radial-gradient(#ffffff 28%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(-27px 22px 5px black) saturate(0.5);
        }
        host:hover{
            transform:scale3d(1,1,1) rotateY(0deg);
            filter: brightness(1);
        }
        div:hover .tooltiptext{
            opacity:1;
            filter: drop-shadow(2px 4px 6px black) saturate(1);
        }
        </style>`
    }
    disconnectedCallback(){
        console.log('imagebar disconnect')
    }
}
customElements.define('es-cimagebar', Imagebar);