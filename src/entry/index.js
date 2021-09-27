
import { EspiiBinance } from '../Classes/Crypto/BinanceEspii'
import { WhaleAlert } from '../Classes/Crypto/WhaleAlert'
import { SideBar } from '../Components/Bars/Sidebar/SideBar';
import { Carousel } from '../Components/Carousel/Carousel';
import { Logo } from '../Components/Logo/Logo';
import { Footer} from '../Components/Footer/Footer'

async function getContainer(){
    const logo = new Logo()
    const sidebar = new SideBar()
    const carousel = new Carousel()
    window.aggTrade = new EspiiBinance("aggtrade")
    window.whalealert = new WhaleAlert()
    window.esgraph = ""
    document.body.appendChild(logo)
    document.body.appendChild(sidebar)
    document.body.appendChild(carousel)
}

getContainer()
// Electron
//    window.addEventListener('DOMContentLoaded', () => {
//        const replaceText = (selector, text) => {
//            const element = document.getElementById(selector)
//            if (element) element.innerText = text
//        }
//        for (const type of ['chrome', 'node', 'electron']) {
//            replaceText(`${type}-version`, process.versions[type])
//        }
//    })
