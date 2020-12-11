import ec from './assets/svg/ec2XL.svg'
function bodyParts() {
    function pOne() {
        var p1 = document.createElement('div')
        p1.classList.add('p1a')
        p1.setAttribute('id', 'p1a')
        document.body.appendChild(p1)
    }
    function pTwo() {
        var p2 = document.createElement('div')
        p2.classList.add('p2a')
        p2.setAttribute('id', 'p2a')
        document.body.appendChild(p2)
    }
    function drawNavbar() {
        var rect = document.createElement('div')
        rect.setAttribute('id', 'navbar')
        document.body.appendChild(rect)
        var ecVg = document.createElement('img')
        ecVg.setAttribute('src', ec)
        document.body.appendChild(ecVg)
    }
    pOne()
    drawNavbar()
    pTwo()
}
export {bodyParts}