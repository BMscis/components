class Searchbar extends HTMLElement{
    constructor(){
        super()
        console.log('searchbar constructed')
        this.shadow = this.attachShadow({mode:'open'})
    }
    static get observedAttributes(){
        return []
    }
    attributeChangedCallback(prop,oldVal,newVal){
        console.log('searchbar attribute change')
    }
    connectedCallback(){
        console.log('searchbar connected')
        this.render()
    }
    render(){
        console.log('searchbar rendering')
        this.shadow.innerHTML =  `
            ${this.styledTemplate}
            <button class='gg-search'></button>
            <input type='text'>
            `
    }
    get styledTemplate(){
        return `<style>
        :host{
            background-image:radial-gradient(circle at bottom,  #bd4411, transparent);
            height: 3.5vmin;
            width: 40%;
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            align-items:center;
            border-radius:10px;
            z-index:0;
            align-self:flex-end;
            
    box-shadow: inset 20px 1px 4px 0px #0000003d;
        }
        input{
            outline:none;
            border:none;
            width:-webkit-fill-available;
            font-size:medium;
            padding-left:10px;
            height:100%;
            background:none;
            z-index:1;
            text-spacing:2px;
            color:white;
            font-family: ACLight;
        }
        input:hover (~ .gg-search){
            color:red;
        }
        .gg-search {
            box-sizing: border-box;
            position: relative;
            display: block;
            transform: scale(var(--ggs,1));
            width: 16px;
            height: 16px;
            border: 2px solid;
            border-radius: 100%;
            margin-left: 5px;
            margin-top: -4px;
            color:#c97a00;
            background-color:transparent;
            cursor:pointer;
        }
        .gg-search::after {
            content: "";
            display: block;
            box-sizing: border-box;
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
        console.log('searchbar disconnect')
    }
}
customElements.define('es-searchbar', Searchbar);