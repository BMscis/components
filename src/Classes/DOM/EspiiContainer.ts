import { TopBar } from '../../Components/Bars/TopBar/TopBar'
import { Carousel } from '../../Components/Carousel/Carousel'
import { Logo } from '../../Components/Logo/Logo'
import { EspiiBinance } from '../Crypto/BinanceEspii'
import { WhaleAlert } from '../Crypto/WhaleAlert'

export class EspiiContainer{
    html: HTMLElement
    body: HTMLElement
    aggTrade: EspiiBinance
    whalealert: WhaleAlert
    EspiiNodeList: (Logo | TopBar | Carousel)[]
    constructor(){
        this.aggTrade = new EspiiBinance("aggtrade")
        //this.abnormalTrade = new EspiiBinance("abnormaltrade")
        this.whalealert = new WhaleAlert()
        this.EspiiNodeList = this.components
    }
    get sidebar(){
        return new TopBar()
    }
    get carousel(){
        return new Carousel()
    }
    get logo(){
        return new Logo()
    }
    get componentList(){
        return [document.querySelector("es-logo"), document.querySelector("es-sidebar"), document.querySelector("es-carousel")]
    }
    get components(){
        return [this.logo, this.sidebar, this.carousel]
    }
    get mobile(){
        return  this.detectMobile()
    }
    detectMobile() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
    
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
}