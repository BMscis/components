import btc from "../../assets/img/btc.svg"
import whalealert from "../../assets/img/whalealert.svg"
import { Dimensions } from "../../Classes/spacemaps/dimensions"
class Graph extends HTMLElement {
    constructor() {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
        this.sell = 0.0
        this.buy = 0.0
    }
    static get observedAttributes() {
        return []
    }
    setup() {
        this.dimension = new Dimensions()
        var varH = this.dimension.carouselSetup
        this.height = varH + "px"
        this.ulHeight = (varH - 40) + "px"
        this.halfHeight = (varH / 2) + "px"
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        switch (prop) {
            case '':
                return
        }
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        window.Espii.esgraph = this
        this.render()
        this.getsream()
    }
    getsream() {
        async function getWhales() {
            await window.Espii.whalealert.fetchData()
        }
        function getwebSock(){
            window.Espii.aggTrade.aggwebsocket.addEventListener("open", function (event) {
                //window.Espii.aggTrade.aggwebsocket.send("t1")
            })
            window.Espii.aggTrade.aggwebsocket.addEventListener("message", function (event) {
                var datar = JSON.parse(event.data)

                var price = window.Espii.esgraph.shadow.children.table.children.tbody.children.aggtrade.children.bg.children.data.children.pr.children.price
                var quantity = window.Espii.esgraph.shadow.children.table.children.tbody.children.aggtrade.children.bg.children.data.children.qt.children.quantity
                var highT = window.Espii.esgraph.shadow.children.table.children.tbody.children.aggtrade.children.bg.children.data.children.hightrades
                if (parseFloat(datar.q).toFixed(4) < 1) {
                    switch (datar.m) {
                        case true:
                            window.Espii.esgraph.sell += parseFloat(datar.q)
                            price.innerHTML = window.Espii.esgraph.sell.toFixed(2)
                            return
                        case "true":
                            window.Espii.esgraph.sell += parseFloat(datar.q)
                            price.innerHTML = window.Espii.esgraph.sell.toFixed(2)
                            return
                        case false:
                            window.Espii.esgraph.buy += parseFloat(datar.q)
                            quantity.innerHTML = window.Espii.esgraph.buy.toFixed(2)
                            return
                        case "false":
                            window.Espii.esgraph.buy += parseFloat(datar.q)
                            quantity.innerHTML = window.Espii.esgraph.buy.toFixed(2)
                            return
                    }
                }
                else {
                    switch (datar.m) {
                        case true:
                            var li = document.createElement('li')
                            var spn = document.createElement('span')
                            spn.classList.add('sell')
                            spn.innerHTML = "SELL"
                            li.innerHTML = "@" + parseFloat(datar.p).toFixed(2) + " qty " + parseFloat(datar.q).toFixed(4)
                            price.innerHTML = parseFloat(datar.p).toFixed(2)
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4)
                            highT.appendChild(spn)
                            highT.appendChild(li)
                            return
                        case "true":
                            var li = document.createElement('li')
                            var spn = document.createElement('span')
                            spn.classList.add('sell')
                            spn.innerHTML = "SELL"
                            li.innerHTML = "@" + parseFloat(datar.p).toFixed(2) + " qty " + parseFloat(datar.q).toFixed(4)
                            price.innerHTML = parseFloat(datar.p).toFixed(2)
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4)
                            highT.appendChild(spn)
                            highT.appendChild(li)
                            return
                        case false:
                            var li = document.createElement('li')
                            var spn = document.createElement('span')
                            spn.classList.add('buy')
                            spn.innerHTML = "BUY"
                            li.innerHTML = "@" + parseFloat(datar.p).toFixed(2) + " qty " + parseFloat(datar.q).toFixed(4)
                            price.innerHTML = parseFloat(datar.p).toFixed(2)
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4)
                            highT.appendChild(spn)
                            highT.appendChild(li)
                            return
                        case "false":
                            var li = document.createElement('li')
                            var spn = document.createElement('span')
                            spn.classList.add('buy')
                            spn.innerHTML = "BUY"
                            li.innerHTML = "@" + parseFloat(datar.p).toFixed(2) + " qty " + parseFloat(datar.q).toFixed(4)
                            price.innerHTML = parseFloat(datar.p).toFixed(2)
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4)
                            highT.appendChild(spn)
                            highT.appendChild(li)
                            return
                    }
                    var li = document.createElement('li')
                    li.innerHTML = "BTC @ " + parseFloat(datar.p).toFixed(2) + " qty " + parseFloat(datar.q).toFixed(4)
                    price.innerHTML = parseFloat(datar.p).toFixed(2)
                    quantity.innerHTML = parseFloat(datar.q).toFixed(4)
                    highT.appendChild(li)
                }
            })
        }
        getWhales()
        getwebSock()
        // window.Espii.abnormalTrade.abwebsocket.addEventListener("open", function (event1) {
        //     window.Espii.abnormalTrade.websocket.send("t1")
        // })
        // window.Espii.abnormalTrade.abwebsocket.addEventListener("message", function (event1) {
        //     var datax = JSON.parse(event1.data)
        //     var asset = window.Espii.esgraph.shadow.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.as.children.symbol
        //     var evt = window.Espii.esgraph.shadow.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.ev.children.event
        //     var vlm = window.Espii.esgraph.shadow.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.ev.children.volume
        //     if(datax.data.volume != undefined){
        //         vlm.innerHTML = datax.data.volume
        //     }else{
        //         vlm.innerHTML = datax.data.priceChange
        //     }
        //     asset.innerHTML = datax.data.symbol
        //     evt.innerHTML = datax.data.eventType
        // })
    }
    render() {
        this.shadow.innerHTML = `
            ${this.styledTemplate}
            <table id="table">
                <tbody id="tbody">
                    <tr id="aggtrade">
                        <td id="bg">
                            <h1>BTC/USDT</h1>
                            <ul id="data">
                                <div id="pr">
                                    <label>
                                        <text class="sell">SELL</text>
                                    </label>
                                    <label id="price"></label>
                                </div>
                                <div id="qt">
                                    <label>
                                        <text class="buy">BUY</text>
                                    </label>
                                    <label id="quantity"></label>
                                </div>
                                <hr>
                                <ul id="hightrades"></ul>
                            </ul>
                        </td>
                        <th>
                            <img src=${btc}>
                        </th>
                    </tr>
                    <tr id="whalealert">
                        <td id="bg">
                            <h1>WHALE ALERT!</h1>
                            <ul id="data">
                            </ul>
                        </td>
                        <th>
                            <img src=${whalealert}>
                        </th>
                    </tr>
                    <tr><th></th></tr>
                    <tr><th></th></tr>
                </tbody>
            </table>
            `
    }
    get styledTemplate() {
        return `
        <style>
        ::-webkit-scrollbar {
            width: 0;
        }
        *{
            box-sizing:border-box
        }
            :host{
                width:${window.innerWidth + "px"};
                height:${this.height};
                display:grid;
             }
             table{
                width:${window.innerWidth + "px"};
                height:${this.height};
                display:grid;
             }
             tbody{
                width:${window.innerWidth + "px"};
                height:${this.height};
                display:grid;
                grid-auto-flow: column;
             }
             tr{
                width:341.5px;
                display: grid;
                position:relative;
                background:transparent;
               
             }
             tr:hover th{
                background-image:radial-gradient(circle at top left,#3b149833 0 65%,#3f00ff00 20% 31%, #038bff)
             }
             th{
                width: 321.5px;
                height: ${this.height};
                display: grid;
                background-image: radial-gradient(circle at top left,#3b149833,#3f00ff00, #038bff);
                border-radius: 30px;
                filter: drop-shadow(2px 4px 6px black);
                cursor: pointer;
                position: absolute;
                transition:0.5s ease-in-out;
             }

             td{
                width:321.5px;
                height: ${this.height};
                border-radius: 30px;
                cursor: pointer;
                text-align:center;
                z-index:1;
                font-family: 'ACBoldSemiCn';
                text-shadow: 9px 6px 6px #00000080;
                color:#ffefd5;
                background-image: linear-gradient(to top, #58ff034f 0 39%,#ff005238, transparent 62% 100%);
             }
             h1{
                position: absolute;
                margin: 25%;
                width: fit-content;
                white-space: nowrap;
                opacity:0.3
                }
             text{
             }
             ul{
                list-style-type: none;
                display: flex;
                position: relative;
                flex-direction: column;
                padding: 0;
                margin: auto;
                overflow:auto;
                height:${this.ulHeight};
                jsutify-content:flex-end;
            }
            #hightrades{
                justify-content:start;
                overflow-y:scroll;
                overflow-x:hidden;
                margin:0;
                height:calc(${this.halfHeight});
                margin-bottom: 20px;

            }
            .list{
                display:grid;
                margin:13px 10px;
                grid-auto-flow:column;
                //margin-right: 69px;

            }
             div{
                position: relative;
                display: grid;
                justify-items: center;

             }
             .sell{
                 color:red
             }
             .buy{
                 color:green
             }
             label{
                font-family: 'ACBoldSemiCn';
                color: whitesmoke;
                text-align:center;
                width:fit-content
             }
             p{
                font-family: 'ACBoldSemiCn';
                color: gray;
                text-align:center;
                width:fit-content;
                margin:auto;
             }
             img{
                 width:25%;
                 opacity:0.3
             }
             .arrow {
                box-sizing: border-box;
                position: relative;
                display: block;
                width: 22px;
                height: 22px;
                border: 2px solid;
                transform: scale(var(--ggs,1));
                border-radius: 20px
               }
               
               .arrow::after,
               .arrow::before {
                content: "";
                display: block;
                box-sizing: border-box;
                position: absolute;
                right: 4px
               }
               
               .arrow::after {
                width: 6px;
                height: 6px;
                border-top: 2px solid;
                border-right: 2px solid;
                transform: rotate(45deg);
                bottom: 6px
               }
               
               .arrow::before {
                width: 10px;
                height: 2px;
                bottom: 8px;
                background: currentColor
               } 
   
        </style>`
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
        window.Espii.aggTrade.aggwebsocket.close()
    }
}
customElements.define('es-graph', Graph);