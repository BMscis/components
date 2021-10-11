
import { EspiiBinance } from '../Classes/Crypto/BinanceEspii'
import { WhaleAlert } from '../Classes/Crypto/WhaleAlert'
import { TopBar } from '../Components/Bars/TopBar/TopBar';
import { Carousel } from '../Components/Carousel/Carousel';
import { Logo } from '../Components/Logo/Logo';
import { News} from '../Components/News/News'

async function getContainer(){
    const logo = new Logo()
    const topbar = new TopBar()
    const carousel = new Carousel()
    const news = new News()
    window.aggTrade = new EspiiBinance("aggtrade")
    window.whalealert = new WhaleAlert()
    window.esgraph = ""
    document.body.appendChild(logo)
    document.body.appendChild(topbar)
    document.body.appendChild(carousel)
    document.body.appendChild(news)
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
