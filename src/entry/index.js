
import { EspiiContainer } from '../Classes/DOM/EspiiContainer';
const docu = new EspiiContainer(document,window)
window.Espii = docu

var comps = window.Espii.EspiiNodeList
comps.forEach(element => {
    document.body.append(element)
});
//const polygon2 = draw.polygon("100 0 100 12.5 100 25 100 37.5 100 50 200 75 200 62.5 200 50 200 37.5 200 25 100 0").fill("#ceff1a75").stroke({width: 1})
//const polygon3 = draw.polygon("0 25 0 37.5 0 50 0 62.5 0 75 100 50 100 37.5 100 25 100 12.5 100 0 0 25").fill("#7c07268a").stroke({width: 1})
//Event listenters
window.addEventListener('load', e => {
    document.body.setAttribute('id', 'body')
    //document.querySelector("html").classList.add('darkmode')
    
    //appDimensions()
    // toggleHtml()
    // addComponents()
})
// document.body.addEventListener('resize', e => {
//     appDimensions()
// })


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
