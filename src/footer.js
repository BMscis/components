import gth from './assets/svg/githublogo.svg'
function footer(){
    var ftr =  document.createElement('div')
    ftr.setAttribute('id','footer')

    var gthLogo = document.createElement('object')
    gthLogo.setAttribute('data',gth)
    gthLogo.setAttribute('id','gth')
    ftr.appendChild(gthLogo)
    document.getElementById('b3').appendChild(ftr)

}
export {footer}