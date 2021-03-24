//import btnGradient from '../../assets/svg/buttonGradient.gif'
class NextButton extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.move()
    }
    static get observedAttributes(){
        return ['onclick','move']
    }
    get styleTemplate(){
        return `
            <style>
            :host{
                cursor: pointer;
                position: absolute;
                top:calc((${window.innerHeight}px - 3vh - 20px - 80px)/2);
                right:${this.cssX};
                transform: scale(var(--ggs,1));
                transform-origin: center;
                width: calc(83vh * 0.05);
                height: calc(83vh * 0.05);
                border-image-slice: 8;
                border-image-width: 7px;
                transition: 0.5s ease;
                z-index:1;
            }
            :host::before{
                content: "";
                position: absolute;
                transform: scale(var(--ggs,1)) rotate(45deg);
                width: calc(83vh * 0.05);
                height: calc(83vh * 0.05);
                border-left: 2px dotted;
                border-radius: 100px;
                cursor: pointer;
                border-image-width: 2px;
            }
            :host::after{
                content: "";
                box-sizing: border-box;
                position: absolute;
                width: calc(83vh * 0.05);
                height: calc(83vh * 0.05);
                border-bottom: 7px inset;
                border-right: 7px solid white;
                border-radius:25%;
                transform: rotate(-45deg);
            }
            :host([hide]){
                display:none;
            }
            :host(:hover){
                transform: scaleY(1.5) scaleX(2);
            }
            </style>
        `
    }
    get cssX(){
        return this.getAttribute('cssX')
    }
    set cssX(val){
        return this.setAttribute('cssX',val)
    }
    connectedCallback(){
        this.addEventListener('click',e=>{
            //console.log('NEXT')
            var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
            if (story.nextElementSibling != document.querySelector('es-carousel').shadow.querySelector('es-next') ){
                if (story.nextElementSibling){
                //console.log('STORY: ' + story.getAttribute('class'))    
                story.removeAttribute('active')
                story.nextElementSibling.setAttribute('active','right')
            }
            return
        }
        return
        })
        this.render()

    }
    move(){
        var fullWidth = window.innerWidth
        var textBoardSpace = 0.2*fullWidth
        if (fullWidth <= 800){
            var storySpace = fullWidth/2
            nextToStoryBoard = 300/1.5
        }
        else{
            var storySpace = (fullWidth - textBoardSpace)/2
            var nextToStoryBoard = 300/1.5
        }
        
        var centerPosition = Math.round(storySpace - nextToStoryBoard)
        this.cssX = centerPosition + 'px'

    }
    disconnectedCallback(){
        //console.log('nextD')
    }
    attributeChangedCallback(prop,oldVal,newVal){
        if (prop == 'move'){
            this.move()
            this.render()
        }
    }
    
    render(){
        return this.shadow.innerHTML = `
            ${this.styleTemplate}
        `
    }
}
customElements.define('es-next', NextButton);