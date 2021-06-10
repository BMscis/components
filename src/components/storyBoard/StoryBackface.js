//modules
//components

//images
// import one from '../../assets/img/lg.png'
// import two from '../../assets/img/Asset2.png'
// import three from '../../assets/img/Asset3.png'
// import four from '../../assets/img/Asset1.png'

export class StoryBackface extends HTMLElement{
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
            }
            if(html === 'false'){
                this.setAttribute('style', 'position:absolute')
            }
        })
    }
    static get observedAttributes(){
        return ['scaler','images']
    }
    attributeChangedCallback(prop,oldVal,newVal){
    }
    get images(){
        return this.getAttribute('images')
    }
    set images(val){
        return this.setAttribute('images',val)
    }

    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
    }
    render(){
        this.innerHtml =  `
            ${this.styledTemplate}
            <es-scrollpad vertical ></es-scrollpad>
            <slot></slot>
            `
    }
    scale(){
        // var images = this.shadowRoot.querySelectorAll('slot')
        // anime({
        //     targets: images,
        //     scale:[0.1, 1],
        //     rotateY:20,
        //     delay:500,
        //     duration:3000
        // })
        return
    }
    get styledTemplate(){
        return `<style>
        ::-webkit-scrollbar {
            width: 0;
        }
        *{
            outline:none;
        }
        es-storybackface{
            display: flex;
            flex-direction:column;
            align-items:center;
            width: calc(80vw * 0.85);
            height: calc(78vh * 0.9);
            padding: 0;
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            background-image: linear-gradient(91deg, transparent, #850E11, #e51900 -15vmin, transparent 0vmin);
            transform-style:preserve-3d;
            overflow:hidden;
            position:absolute;
            right:0;
            z-index:1;
        }
        svg{
            position:absolute;
        }
        slot{
            width: auto;
            height: calc(78vh * 0.9);
            position:relative;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow-y:scroll;
            scroll-snap-type: y mandatory;
            scrollbar-width:none;

        }
        .mouse-outline{
            fill:none;
            stroke:pink;
            stroke-width:0.5;
        }
        .scroll{
            fill: white;
            opacity:1;
            transform-origin: 50% 10px;
            animation-name:scroll;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
        }
        @keyframes scroll{
            0,
            20%{
                transform: translateY(0) scaleY(1)
            }
            100%{
                transform:translateY(6px) scaleY(2);
                opacity:0;
            }
        }
        @media only Screen and (max-width:850px){
            es-storybackface{
                width:85vw;
            }
            slot{
                width:calc(78vh * 0.6);
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
customElements.define('es-storybackface', StoryBackface);