export class expand extends Event{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.event = new Event("resize")
    }
}