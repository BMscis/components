
import { EspiiContainer } from '../Classes/DOM/espiicontainer';
const animescript = document.createElement('script');
animescript.setAttribute('src', 'anime.min.js')

const docu = new EspiiContainer(document,window)
window.Espii = docu

var comps = window.Espii.EspiiNodeList
comps.forEach(element => {
    window.Espii.body.append(element)
});

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


Electron
  window.addEventListener('DOMContentLoaded', () => {
      const replaceText = (selector, text) => {
          const element = document.getElementById(selector)
          if (element) element.innerText = text
      }
      for (const type of ['chrome', 'node', 'electron']) {
          replaceText(`${type}-version`, process.versions[type])
      }
  })
