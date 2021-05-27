export class CallAscend {
    constructor() {
        this.Http = new XMLHttpRequest();
        this.url = "https://ascendex.com/api/pro/v1/ticker"
    }
    get Data() {
        return this.fetch(this.url).then(response => response.json())
            .then(data => {
                var jsObject = data
                this.postMessage(jsObject['data'])
            })
    }
}