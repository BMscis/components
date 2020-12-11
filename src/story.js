import { SVG } from '@svgdotjs/svg.js';
import {cloz} from './closure'
import bg from './assets/img/ws18.png'

import anime from '../node_modules/animejs/lib/anime.es.js';
function story(){
    console.log('getting stories')
}
function getStory(image, heading1, heading2,num) {
    var ggStories = document.createElement('div')
    ggStories.classList.add('gg-stories')
    ggStories.classList.add(num)
    $('#closureimposition').append(ggStories)

    var expandIcon = SVG().attr({
        id: 'expand'
    })
    expandIcon.circle(6).attr({
        cx: '50%',
        cy: '30%'
    })
    expandIcon.circle(6).attr({
        cx: '50%',
        cy: '33%'
    })
    expandIcon.circle(6).attr({
        cx: '50%',
        cy: '36%'
    })
    expandIcon.addTo(ggStories)
    var gImage = document.createElement('img')
    gImage.classList.add('storyimage')
    gImage.setAttribute('src', image)
    ggStories.appendChild(gImage)

    var gTxt = document.createElement('div')
    gTxt.classList.add('storytextcover')
    ggStories.appendChild(gTxt)
    var gTxtT = document.createElement('text')
    gTxtT.setAttribute('id', 'storyheading')
    gTxtT.innerHTML = heading1
    gTxt.appendChild(gTxtT)
    var gTxtT2 = document.createElement('text')
    gTxtT2.setAttribute('id', 'storyheading2')
    gTxtT2.innerHTML = heading2
    gTxt.appendChild(gTxtT2)

    var gDes = document.createElement('div')
    gDes.classList.add('storyparagraph')
    gDes.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore '
    ggStories.appendChild(gDes)

    var gBut = document.createElement('div')
    gBut.setAttribute('id', 'storybuttoncover')
    ggStories.appendChild(gBut)
    var gButton = document.createElement('a')
    gButton.setAttribute('id', 'storybutton')
    gButton.innerHTML = 'Expand'
    gBut.appendChild(gButton)

    gButton.addEventListener('click', e => {
        // document.querySelectorAll("#closureimposition .gg-stories:not(:nth-child(1))")
        var close = document.createElement('i')
        close.classList.add('gg-close')
        document.querySelector("#closureimposition .gg-stories.active").appendChild(close)
        close.addEventListener('click', e => {

            anime({
                targets: document.querySelectorAll("#closureimposition .gg-stories:not(.active)"),
                left: [document.querySelector('#closureimposition').offsetWidth, document.querySelectorAll("#closureimposition .gg-stories:not(.active)")[0].offsetLeft],
                duration: 200
            })
            anime({
                targets: document.querySelector("#closureimposition .gg-stories.active"),
                left: [0, gButton.parentElement.parentElement.offsetLeft],
                duration: 200,
            })

            anime({
                targets: '#nxt',
                opacity: 1,
                duration: 200
            })

            gButton.parentElement.parentElement.parentElement.appendChild(gButton.parentElement.parentElement)
        })
        anime({
            targets: document.querySelectorAll("#closureimposition .gg-stories:not(.active)"),
            left: [document.querySelectorAll("#closureimposition .gg-stories:not(.active)")[0].offsetLeft, document.querySelector('#closureimposition').offsetWidth],
            opacity: 0,
            duration: 200
        })
        anime({
            targets: document.querySelector("#closureimposition .gg-stories.active"),
            left: [gButton.parentElement.parentElement.offsetLeft, 0],
            duration: 200,
        })

        anime({
            targets: '#nxt',
            opacity: 0,
            duration: 200
        })
        console.log(document.getElementsByTagName('body')[0])
        document.getElementsByTagName('html')[0].setAttribute('style','background-image: url('+ bg +')')
        // anime({
        //     targets:'#body',
        //     backgroundColor:bg
        // })
        document.querySelector('#sidebar').appendChild(gButton.parentElement.parentElement)
    })
}
function loadStory() {
    console.log('story-loader:loading....')
    var storyWidth = document.querySelector("#closureimposition").offsetHeight / 2
    var parentAlignCenter = document.querySelector("#closureimposition").offsetWidth / 2
    var storyAlignCenter = storyWidth / 2
    var storyInitialPosition = parentAlignCenter - storyAlignCenter
    var stories = document.querySelectorAll('.gg-stories')
    var story = document.querySelector('.gg-stories.active')
    stories.forEach(element => {
        element.setAttribute('style', 'width:' + storyWidth + 'px')
    });
    anime({
        targets: '.gg-stories',
        left: storyInitialPosition + 'px'
    })
    anime({
        targets: '.gg-stories.active',
        left: storyInitialPosition + 'px'
    })
    story.position = storyInitialPosition
    story.nextPosition = storyInitialPosition - storyWidth
    story.previousPosition = storyInitialPosition + storyWidth
    console.log('story-load: story current scroll-positon: '+ story.position)
    console.log('story nextposition: ' + story.nextPosition)
    console.log('story prevposition: ' + story.previousPosition)
}
function resizeStory() {
    console.log('story-resize: resizing story board....')
    var story = document.querySelector("#closureimposition .gg-stories.active")
    var storyIndex = parseInt(document.querySelector("#closureimposition > div.gg-stories.active").classList[1])
    var parentAlignCenter = document.querySelector("#closureimposition").offsetWidth / 2
    var storyAlignCenter = story.offsetWidth / 2
    var storyScrollWidth = story.offsetWidth
    var storyInitialPosition = parentAlignCenter - storyAlignCenter
    if (storyIndex == 0){

        var scrollBy = storyInitialPosition
        console.log('story-resize: current scroll-position for activeElement: ' + scrollBy)
    }
    else{
        var scrollBy = storyInitialPosition - (storyScrollWidth * storyIndex)
        console.log('story-resize: current scroll-position for activeElement: ' + scrollBy)
    }
    var storyWidth = document.querySelector("#b2").offsetHeight / 2
    var stories = document.querySelectorAll('.gg-stories')
    stories.forEach(element => {
        element.setAttribute('style', 'width:' + storyWidth + 'px')
    });
    anime({
        targets: '.gg-stories',
        left: scrollBy + 'px'
    })
    anime({
        targets: '.gg-stories.active',
        left: scrollBy + 'px'
    })
    story.position = storyInitialPosition
    story.nextPosition = storyInitialPosition - storyWidth
    story.previousPosition = storyInitialPosition + storyWidth
    console.log('story-load: story current scroll-positon: '+ story.position)
    console.log('story nextposition: ' + story.nextPosition)
    console.log('story prevposition: ' + story.previousPosition)
}

story.start = getStory
story.load = loadStory
story.resize = resizeStory



export { story }