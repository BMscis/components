export class ScrollPad extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()
        return
    }
    static get observedAttributes() {
        return [""]
    }
    setup(){
        this.getComponents
        return  `
        <style>
            es-scrollpad[hide]{
                display:none;
            }
            es-scrollpad[mobi]{
                position: absolute;
                z-index: 1;
                right: 0%;
                bottom: 5%;
                width: 10vh;
                transform: rotate3d(0, 0, 1, 90deg);
            }
            es-scrollpad{
                position: absolute;
                z-index: -1;
                right: 0%;
                bottom: 22%;
                width: 10vh;
            }
            svg{
                position:absolute;
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
                0%,
                20%{
                    transform: translateY(0) scaleY(1)
                }
                100%{
                    transform:translateY(6px) scaleY(2);
                    opacity:0;
                }
            }
        </style>
        `
    }
    //
    get getComponents(){
        return
    }
    //
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        return
    }
    render(){
        this.innerHTML += this.styleTemplate
        this.innerHTML += this.htmlTemplate
        return
    }
    get styleTemplate(){
        return `<style>
        es-scrollpad([hide]){
            display:none;
        }
        es-scrollpad([mobi]){
            position: absolute;
            z-index: 1;
            right: 0%;
            bottom: 5%;
            width: 10vh;
            transform: rotate3d(0, 0, 1, 90deg);
        }
        es-scrollpad{
            position: absolute;
            z-index: -1;
            right: 0%;
            bottom: 22%;
            width: 10vh;
        }
        svg{
            position:absolute;
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
        </style>`
    }
    get htmlTemplate(){
        return`
        <svg viewbox="0 0 14 22">
            <rect class="mouse-outline" width="7" height='11' x='4' y='7' rx='3'/>
            <circle class="scroll" cx='7.5' cy='11' r='0.5'/>
        `
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('es-scrollpad', ScrollPad);