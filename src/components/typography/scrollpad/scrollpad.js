class Scrollpad extends HTMLElement{
    constructor(){
        super()
        //console.log('scrollpad constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('scrollpad attribute change')
        switch(prop){
            case '':
                return
        }
    }
    connectedCallback(){
        //console.log('scrollpad connected')
        this.render()
    }
    render(){
        //console.log('scrollpad rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <svg viewbox="0 0 14 22">
            <rect class="mouse-outline" width="7" height='11' x='4' y='7' rx='3'/>
            <circle class="scroll" cx='7.5' cy='11' r='0.5'/>
            `
    }
    get styledTemplate(){
        return `<style>
        :host([mobi]){
            position: absolute;
            z-index: -1;
            right: 0%;
            bottom: 5%;
            width: 10vh;
            transform: rotate3d(0, 0, 1, 90deg);
        }
        :host{
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
    disconnectedCallback(){
        //console.log('scrollpad disconnect')
    }
}
customElements.define('es-scrollpad', Scrollpad);