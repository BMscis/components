export class EspiiBinance {
    constructor(tradeType) {
        this.endpoint = "https://api.binance.com"
        this.testConnection = "/api/v3/time"
        this.exchangeInfo = "https://api.binance.com/api/v3/exchangeInfo"
        this.abnormalTrade = "wss://bstream.binance.com:9443/stream?streams=abnormaltradingnotices"
        this.aggTrade = "wss://stream.binance.com:9443/ws/btcusdt@aggTrade"
        this.websocket = this.getWebSocket(tradeType)
        this.responseData
        this.subscription = {
            "method": "SUBSCRIBE",
            "params": [
                "btcusdt@aggTrade"
            ],
            "id": 1
        }
        this.client = {
            key: "oypdix06ukWgnSvyq3ASoj9cDOOKCB8DIgsVoWN0gsmmbvuoEv4xRZ8p7l63E9qW",
            secret: "ty6Qd6qljkOBsP0hEL6BaVYQF7DA7cLPotVZKed0Vk9IKKt035ASurHfMyPCnzBE"
        }
        this.testnet = {
            key: "2KNDEaaJPMdDmyVoiQbVnhZujpgytive4ovOc82lufpkcQvzLM3YUP8iXl4lfba1",
            secret: "2NVv0GMo3KxZ6zKIduD6cmq5EKXpW8suS9tnqNyq51Vrut4q1euTT1Z81ODKwen1"
        }
        return
    }
    getWebSocket(val){
        switch(val){
            case "aggtrade":
                this.aggwebsocket = new WebSocket(this.aggTrade) 
                return 
            case "abnormaltrade":
                this.abwebsocket = new WebSocket(this.abnormalTrade) 
                return 
        }
    }
    test() {
        this.websocket.addEventListener("open", function (event) {
            this.websocket.send("t1")
        })
        this.websocket.addEventListener("message", function (event) {
            var datar = JSON.parse(event.data)
            return window.Espii.aggTrade.responseData = datar
        })
        return
    }

}

