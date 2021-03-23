import anime from '../../../../node_modules/animejs/lib/anime.es.js';

class Businesscard extends HTMLElement {
    constructor() {
        super()
        console.log('businesscard constructed')
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return ['text']
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        console.log('businesscard attribute change')
        switch(prop){
            case 'text':
                if(newVal != oldVal){
                    this.show()
                    this.text = newVal
                    this.render()
                    return
                }
        }
    }
    get text(){
        return this.getAttribute('text')
    }
    set text(val){
        return this.setAttribute('text',val)
    }
    get borderImage(){
        return this.getAttribute('backgroundimage')
    }
    set borderImage(val){
        return this.setAttribute('backgroundimage', val)
    }
    connectedCallback() {
        console.log('businesscard connected')
        this.render()
    }
    render() {
        console.log('businesscard rendering')
        this.shadow.innerHTML = `
            ${this.getTemplate()}
            ${this.styledTemplate}
            `
    }
    getTemplate(){
        if(this.text === 'Contact Us'){
            return this.contactUs
        }
        if(this.text === 'Portfolio'){
            return this.textBoard
        }
        else{
            return
        }
    }
    show(){
            anime({
                targets:this,
                opacity:[0,1],
                delay:500,
                duration:1000,
                easing:'easeOutQuart'
            })
        return
    }
    get styledTemplate() {
        return `<style>

       :host{
        position: absolute;
        width: 30%;
        height: 70%;
        display:flex;
        flex-direction:row;
        top:0;
        padding:20px;
        border-radius: 10px;
        z-index: 1;
        background: transparent;
        //border-top: 2px;
        //border-top-style: dotted;
        //border-top-color: blueviolet;
        //border-image: ${this.borderImage};
        //border-image-slice: 8;
        opacity:0;
        }
        .texture{
            position:absolute;
            //background:black;
            //filter:blur(20px);
            opacity:0.8;
            left:0;
            width: calc(100% - 20px);
            height:calc(100% - 20px);
            z-index:0;
        }
        .infocontainer, .labelcontainer{
            display:flex;
            height:100%;
            flex-direction:column;
            padding: 20px;
        }
        .labelcontainer{
            width:30%;
        }
        .infocontainer{
            width:70%
        }
        text{
            font-size:10vmin;
            color:white;
            font-family:ACBoldCond;
            transition: 0.5s ease;
        }
        label, a, p{
            filter: brightness(2);
            font-family: ACBlack;
            width:fit-content;
            padding:20px;
            
        }

        a,p{
            background: linear-gradient(to bottom right,#00368e 50%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(2px 4px 6px white) invert(1);
        }
        label{
            color: silver;
            font-variant-caps: all-petite-caps;
            font-size: larger;
            z-index:1;
            background: linear-gradient(to bottom right,#ceff1a 50%, transparent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: brightness(0.5);
        }
        a{
            text-decoration: none;
            font-style: normal;
        }
        p{
            padding:0;
        }
        address{
            color:gold;
            cursor:pointer;
            padding: 20px 20px 30px 0;
        }
        :host([hide]){
            display: none
        }
         @media only screen and (max-width: 800px){
            :host{
                display:none;
            }
            text{
                font-size:5vmin;
            }
        }
        </style>`
    }
    get contactUs() {
        //this.borderImage = 'linear-gradient(to left,transparent 10%, blue 20%, red 30%, transparent 35%)'
        return`
        <div class=texture></div>
        <div class=labelcontainer>
        <label>Name: </label>
        <label>Email: </label>
        <label>Contact: </label>
        </div>
        <div class=infocontainer>
        <p>Melvin Wakhungu Wafula</p>
        <address>
        <a href="mailto:melvinwafula@gmail.com">
        melvinwafula@gmail.com
        </a>
        </address>
        <address>
        <a href="tel:+254729675138">
        +254729675138
        </a>
        </address>
        </div>
        `
    }
    get textBoard(){
        //this.borderImage = 'linear-gradient(to right,transparent 20%, blue 30%, red 40%, transparent 50%)'
        return '<es-textboard ></es-textboard>'
    }
    disconnectedCallback() {
        console.log('businesscard disconnect')
    }
}
customElements.define('es-businesscard', Businesscard);