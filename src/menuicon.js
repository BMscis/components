import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
import {drawer} from './SVGZ'
function logo(){
    var logos = document.createElement('div')
    logos.classList.add('logo')
    $('#b1').append(logos)
}
function links(lnk,linkid,parent){
    var href = document.createElement('a')
    href.innerHTML = lnk
    href.setAttribute('href', linkid)
    parent.appendChild(href)
}
function menu(){
    var menus = document.createElement('div')
    menus.classList.add('menu-icon')

    var menulinks = [
        'Graphic Design',
        'Web Development',
        'UI & UX Design',
        'Contact Us'
    ]
    menulinks.forEach(element => {
        links(element, ' ',menus)
    });
    menus.addEventListener('click',e=>{
        menus.classList.toggle('active')
    })
    $('#sidebar').append(menus)
}
function mail(){
    var mailIcon = document.createElement('div')
    mailIcon.classList.add('mail-icon')
    $('#sidebar').append(mailIcon)
}
function logoIcon() {
    menu()
    logo()
    mail()
    drawer()
}
export{logoIcon}