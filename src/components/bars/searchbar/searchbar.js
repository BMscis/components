class Searchbar extends HTMLElement{
    constructor(){
        super()
        //console.log('searchbar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        //console.log('searchbar attribute change')
    }
    connectedCallback(){
        //console.log('searchbar connected')
        this.render()
    }
    render(){
        //console.log('searchbar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <button type="submit" class='gg-search'></button>
            <input  type="search" name='search' id='search' autofocus="autofocus" input>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            height: 5vh;
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
            transform: scale(var(--ggs,1));
            width: 16px;
            height: 16px;
            border: 2px solid;
            border-radius: 100%;
            color:aliceblue;
            background-color:transparent;
            cursor:pointer;
            outline: none;
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
    disconnectedCallback(){
        //console.log('searchbar disconnect')
    }
}
customElements.define('es-searchbar', Searchbar);