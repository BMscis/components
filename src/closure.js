import { SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
function cloz() {
    var closureImposition = document.createElement('div')
    closureImposition.setAttribute('id', 'closureimposition')
    var storyWidth = document.querySelector("#b2").offsetHeight / 2

    $('#b2').append(closureImposition)

    var closureContainer = document.createElement('div')
    closureContainer.setAttribute('id', 'closurecontainer')
    $('#b2').append(closureContainer)

    var clos = document.createElement('div')
    clos.setAttribute('id', 'closure')
    $('#closurecontainer').append(clos)

    var closr = document.createElement('div')
    closr.setAttribute('id', 'closurer')
    $('#closurecontainer').append(closr)

    var posture = document.createElement('div')
    posture.setAttribute('id', 'posture')
    posture.setAttribute('style', 'width:' + storyWidth + 'px')
    $('#closureimposition').append(posture)

    var nextArrow = document.createElement('div')
    nextArrow.classList.add('gg-chevron-right-o')
    $('#closurer').append(nextArrow)

function goToNextStory(){
    var story = document.querySelector("#closureimposition > div.gg-stories.active")
    var storyWidth = document.querySelector("#closureimposition").offsetHeight / 2
    var scrollBy = story.position
    var next = story.nextPosition
    var prev = story.previousPosition
    console.log('storyPosition: '+ scrollBy) 
    console.log('storynextPosition: '+ next) 
    console.log('storypreviousPosition: '+ prev) 

    if (story != document.querySelector("#closureimposition").lastChild) {
        story.classList.remove('active')
        story.nextElementSibling.classList.add('active')
        anime({
            targets: '#closureimposition',
        })
        anime({
            targets: '.gg-stories',
            left: next + 'px',
            easing: 'easeInOutQuad',
            duration: 200

        })
        anime({
            targets: '.gg-stories.active',
            left: next + 'px',
            easing: 'easeInOutQuad',
            duration: 200

        })
        var storyActive = document.querySelector("#closureimposition > div.gg-stories.active")
        storyActive.position = story.nextPosition
        storyActive.nextPosition = story.nextPosition - storyWidth
        storyActive.previousPosition = story.previousPosition - storyWidth
    }
    else {
        console.log('next - @ activeElement scroll-position: ' +scrollBy)
        return
    }
    console.log('story-load: story current scroll-positon: '+ story.position)
    console.log('story nextposition: ' + story.nextPosition)
    console.log('story prevposition: ' + story.previousPosition)
}

    nextArrow.addEventListener('click', e => {
        
        goToNextStory()

    })
    var prevButtonClicks = 0
    var prevArrow = document.createElement('div')
    prevArrow.classList.add('gg-chevron-left-o')
    $('#closure').append(prevArrow)

function goToPreviousStory(){  
    var story = document.querySelector("#closureimposition > div.gg-stories.active")
    var storyWidth = document.querySelector("#closureimposition").offsetHeight / 2
    var scrollBy = story.position
    var next = story.nextPosition
    var prev = story.previousPosition
    console.log('storyPosition: '+ scrollBy) 
    console.log('storynextPosition: '+ next) 
    console.log('storypreviousPosition: '+ prev) 

    if (story != document.querySelector("#closureimposition").firstChild.nextSibling) {
        story.classList.remove('active')
        story.previousElementSibling.classList.add('active')
        anime({
            targets: '.gg-stories',
            left: prev + 'px',
            easing: 'easeInOutQuad',
            duration: 200

        })
        anime({
            targets: '.gg-stories.active',
            left: prev + 'px',
            easing: 'easeInOutQuad',
            duration: 200

        })

        if (story.classList.contains('visited')) {
            story.classList.remove('visited')
            story.previousElementSibling.classList.add('visited')
        }
        var storyActive = document.querySelector("#closureimposition > div.gg-stories.active")
        storyActive.position = story.previousPosition
        storyActive.nextPosition = story.nextPosition + storyWidth
        storyActive.previousPosition = story.previousPosition + storyWidth

    }
    else {
        console.log('prev: - @ activeElement scroll-position: ' + scrollBy)
        return
    }
}
    prevArrow.addEventListener('click', e => {
       prevButtonClicks = prevButtonClicks + 1
        goToPreviousStory()
    })

}

export { cloz }