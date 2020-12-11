import {story} from './story';
import webdev from './assets/svg/webdev.svg'
import coa from './assets/svg/coa.svg'
import me from './assets/svg/me.svg'
function load(){
    var storyContainer = [
        { a: coa, b: 'LOGO DESIGN', c: '3D' },
        { a: webdev, b: 'DEVELOPMENT', c: 'WEB' },
        { a: me, b: 'DESIGN', c: 'Graphic' },
        { a: '', b: 'DESIGN', c: 'UI/UX' },
    ]
    for (var i = 0; i < storyContainer.length; i++) {
        story.start(storyContainer[i].a, storyContainer[i].c, storyContainer[i].b,i)
    }
    $('.gg-stories')[0].classList.add('active')
    story.load()
}
export {load}