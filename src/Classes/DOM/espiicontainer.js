//components
import {Carousel} from '../../components/carousel/carousel'
import {Sidebar} from  '../../components/bars/sidebar/sidebar'
import {Navbar} from   '../../components/bars/navbar/navbar'
import {Logo} from     '../../components/logo/logo'
import { Dimensions } from '../spacemaps/dimensions'
import { EspiiBinance } from '../crypto/binanceEspii'
import { WhaleAlert } from '../crypto/whaleAlert'

export class EspiiContainer{
    constructor(document,window){
        this.window = window
        this.document = document
        this.html = document.querySelector("html")
        this.body = document.body
        this.components = 0
        this.aggTrade = new EspiiBinance("aggtrade")
        //this.abnormalTrade = new EspiiBinance("abnormaltrade")
        this.whalealert = new WhaleAlert()
        this.dimension = new Dimensions()
        this.resize

    }
    get resize(){
        this.html.style.height = this.dimension.windowInnerHeight + "px"
        this.html.style.width = this.dimension.fullWidth + "px"
        this.html.style.padding = this.dimension.verticalPadding + "px" + " " + "0px"
        this.window.addEventListener("resize",e=>{
            this.html.style.height = this.dimension.windowInnerHeight + "px"
            this.html.style.width = this.dimension.fullWidth + "px"
            this.html.style.padding = this.dimension.verticalPadding + "px" + " " + "0px"
        })
    }
    get navbar(){
        return new Navbar()
    }
    set navbar(val){return val}
    get sidebar(){
        return new Sidebar()
    }
    set sidebar(val){return val}
    get carousel(){
        return new Carousel(false)
    }
    set carousel(val){return val}
    get logo(){
        return new Logo()
    }
    set logo(val){return val}
    get componentList(){
        return [document.querySelector("es-logo"), document.querySelector("es-navbar"), document.querySelector("es-sidebar"), document.querySelector("es-carousel")]
    }
    get components(){
        return [this.logo, this.navbar, this.sidebar, this.carousel]
    }
    set components(val){
        return this.EspiiNodeList = this.components
    }
    get mobile(){
        return  this.detectMobile()
    }
    set mobile(val){
        return val
    }
    set height(val){
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