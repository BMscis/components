import { show } from '../../../ComponentKontrol/showKontrol';
import { EspiiElement } from '../../../Interfaces/index';
import { AboutUs } from './AboutUs/AboutUs';
import { Graph } from './Graphs/graph.js';
import { Textboard } from './TextBoard/TextBoard';

export class BusinessCard extends EspiiElement {
    text: string;
    constructor(text: string) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.text = text
        this.setup()
        return
    }
    setup(){
        this.getcomponents
        return
    }
    get getcomponents(){
        switch(this.text){
            case "Portfolio":
                this.component = { "Portfolio" :new Textboard()}
                return 
            case "Crypto Meter":
                this.component = {"Crypto Meter" :new Graph()}
                return 
            case "About Us":
                this.component = {"About Us" :new AboutUs()}
                return 
        }
        return
    }
    override render() {
        this.setAttribute("name", this.text)
        this.appendChild(this.component[this.text])
        //show(this)
        return
    }
}
customElements.define('es-businesscard', BusinessCard);