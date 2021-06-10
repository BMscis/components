import btc from "../../../../assets/img/btc.svg"
import whalealert from "../../../../assets/img/whalealert.svg"
import { Dimensions } from "../../../../Classes/spacemaps/dimensions"
export class Graph extends HTMLElement {
    constructor() {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        //this =this.attachShadow({ mode: 'open' })
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

                var price = document.querySelector('#price')
                var quantity = document.querySelector("#quantity")
                var highT = document.querySelector("#hightrades")
                if (parseFloat(datar.q).toFixed(4).toLocaleString() < 1) {
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
                            var spn = document.createElement('label')
                            var qtt = document.createElement('span')
                            var cont = document.createElement('div')
                            cont.id = "hightradecontainer"
                            spn.classList.add('sell')
                            spn.innerHTML = "SELL"
                            li.innerHTML = parseFloat(datar.p).toFixed(2).toLocaleString()
                            qtt.innerHTML = parseFloat(datar.q).toFixed(4).toLocaleString()
                            price.innerHTML = parseFloat(datar.p).toFixed(2).toLocaleString()
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4).toLocaleString()
                            cont.appendChild(spn)
                            cont.appendChild(li)
                            cont.appendChild(qtt)
                            highT.appendChild(cont)
                            return
                        case false:
                            var li = document.createElement('li')
                            var spn = document.createElement('label')
                            var qtt = document.createElement('span')
                            var cont = document.createElement('div')
                            cont.id = "hightradecontainer"
                            spn.classList.add('buy')
                            spn.innerHTML = "BUY"
                            li.innerHTML = parseFloat(datar.p).toFixed(2).toLocaleString()
                            qtt.innerHTML = parseFloat(datar.q).toFixed(4).toLocaleString()
                            price.innerHTML = parseFloat(datar.p).toFixed(2).toLocaleString()
                            quantity.innerHTML = parseFloat(datar.q).toFixed(4).toLocaleString()
                            cont.appendChild(spn)
                            cont.appendChild(li)
                            cont.appendChild(qtt)
                            highT.appendChild(cont)
                            return
                    }
                    var li = document.createElement('li')
                    li.innerHTML = "BTC @ " + parseFloat(datar.p).toFixed(2).toLocaleString() + " qty " + parseFloat(datar.q).toFixed(4).toLocaleString()
                    price.innerHTML = parseFloat(datar.p).toFixed(2).toLocaleString()
                    quantity.innerHTML = parseFloat(datar.q).toFixed(4).toLocaleString()
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
        //     var asset = window.Espii.esgraph.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.as.children.symbol
        //     var evt = window.Espii.esgraph.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.ev.children.event
        //     var vlm = window.Espii.esgraph.children.table.children.tbody.children.abnormaltrade.children.bg.children.data.children.ev.children.volume
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
        // var rx = document.createElement("style")
        // rx.innerHTML = this.styledTemplate
        // this.appendChild(rx)
        this.innerHTML = this.htmlTemplate
            return
    }
    get htmlTemplate(){
        return `
        <table id="table">
            <tbody id="tbody">
                <tr id="aggtrade">
                    <td id="bg">
                        <h1>BTC/USDT</h1>
                        <hr>
                        <h2>CLOSED TRADES</h2>
                        <ul id="data">
                            <div class='btcusd' id="pr">
                                <label id="sellarea">
                                    <text class="sell">SELL</text>
                                </label>
                                <label id="price"></label>
                            </div>
                            <div class='btcusd' id="qt">
                                <label id="buyarea">
                                    <text class="buy">BUY</text>
                                </label>
                                <label id="quantity"></label>
                            </div>
                        </ul>
                        <h2>TRADES GREATER THAN 1 BTC</h2>
                        <ul id="hightrades">
                            <div id="hightradeshead">
                            <label>Order</label>
                            <label>Price</label>
                            <label>Amount</label>
                            </div>
                        </ul>
                    </td>
                    <th>
                        <img src=${btc}>
                    </th>
                </tr>
                <tr id="whalealert">
                    <td id="bg">
                        <h1>WHALE ALERT!</h1>
                        <hr>
                        <ul id="whaledata">
                        </ul>
                    </td>
                    <th>
                        <img src=${whalealert}>
                    </th>
                </tr>
            </tbody>
        </table>
        `
    }
    get styledTemplate() {
        return `

        `
    }
    disconnectedCallback(){
            for(let i = 0; i < this.childElementCount + 1; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
        window.Espii.aggTrade.aggwebsocket.close()
    }
}
customElements.define('es-graph', Graph);