class Searchbar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             
        this.render()
    }
    render(){
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <button type="submit" name='searchbutton' class='gg-search'></button>
            <form>
            <input  type="search" name='search' id='search' autofocus="autofocus" input>
            </form>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            display:inline-grid;
            align-items:center;
            border-radius:10px;
            //z-index:0;
            align-self:flex-end;
        }
        input{
            outline:none;
            border:none;
            font-size:medium;
            height:3vh;
            background:transparent;
            //z-index:1;
            text-spacing:2px;
            font-family: ACLight;
            border-image: linear-gradient(to right, blue , red);
            border-image-slice: 10;
            border-radius: 24px;
            border-bottom: 1px solid;
            color:white;
}
        }
        input:hover (~ .gg-search){
            color:red;
        }
        .gg-search {
            transform: scale(var(--ggs,0.7));
            width: 16px;
            height: 16px;
            border: 2px solid;
            border-radius: 100%;
            color:aliceblue;
            background-color:transparent;
            cursor:pointer;
            outline: none;
            position:absolute;
        }
        .gg-search::after {
            content: "";
            position: absolute;
            border-radius: 3px;
            width: 2px;
            height: 8px;
            background: currentColor;
            transform: rotate(-45deg);
            top: 10px;
            left: 12px
        }
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )                                                                              
    }
}
customElements.define('es-searchbar', Searchbar);