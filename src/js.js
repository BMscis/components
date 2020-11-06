import { Animator, SVG } from '@svgdotjs/svg.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
//header 5vmin
//paragraph 3vmin
//navbar 3.5vmin
//menubar 3.2vmin
function drawNavbar(){
    var draw = SVG().addTo('#body').size('100%', '10vmin')
    draw.attr({
        fill:'#f5f5f5',
        id:'navbar'
    })

    var graphictext = draw.text('Graphic Design').attr({
        fill:'#DF7B74',
        x:0,
        y:0
    })
    graphictext.font({
        anchor:'start',
        size:'3.5vmin',
        family:'ACBoldSemiCn'
    })
    graphictext.addClass('drawmenutext')
    graphictext.addClass('graphicdesign')
    graphictext.click(function(){
        anime({
            targets: '.graphicdesign',
            scale:2,
            direction:'alternate',
            duration:800
        })
    })
}

function drawmenuicon(){
    var draw = SVG().addTo('#navbar').size('10%', '10vmin')
    var line = draw.line('20%','35%','80%','35%').stroke({
        color:'#F44336',
        width:2.5,
        linecap: 'round',
        x:0,
        y:0
    })
    line.addClass('menubutton')
    var line2 = draw.line('20%','50%','80%','50%').stroke({
        color:'#F44336',
        width:2.5,
        linecap: 'round'
    })
    line2.addClass('menubutton')
    var line3 = draw.line('20%','65%','80%','65%').stroke({
        color:'#F44336',
        width:2.5,
        linecap: 'round'
    })
    line3.addClass('menubutton')
    draw.addClass('menu')
    draw.click(function(){
        anime({
            targets: '.header1',
            opacity:0,
            direction:'normal',
            duration:500
        })
        anime({
            targets: '.menubar',
            translateY:'112vmin',
            direction:'normal',
            duration:800
        })
    })
}

function drawGraphicmenu(){
    var draw = SVG().addTo('#navbar')
    draw.attr({
        width:'0%',
        height:'50%',
        x:'10%',
    })
    draw.css('margin','10px')

}

function drawAnimationmenu(){
    var draw = SVG().addTo('#navbar').size('30vw', '10vmin')
    draw.attr({
        x:'30%'
    })
    var graphictext = draw.text('3D Textures').attr({
        fill:'#DF7B74',
        x:'50%',
        y:'10%'
    })
    graphictext.font({
        anchor:'middle',
        size:'3.5vmin',
        family:'ACBoldSemiCn'
    })
    graphictext.addClass('drawmenutext')
}

function drawWebmenu(){
    var draw = SVG().addTo('#navbar').size('30vw', '10vmin')
    draw.attr({
        x:'60%'
    })
    var graphictext = draw.text('Web Design').attr({
        fill:'#DF7B74',
        x:'50%',
        y:'10%'
    })
    graphictext.font({
        anchor:'middle',
        size:'3.5vmin',
        family:'ACBoldSemiCn'
    })
    graphictext.addClass('drawmenutext')
}

function drawboard(){
    var draw = SVG().addTo('#body').size('70%', '60%')
    var rect = draw.rect('100%', '100%').attr({
        fill:'#1A78D9'
    })
    rect.x(0)
    rect.y(0)
    rect.rx('10')
    rect.ry('10')


    draw.addClass('svgb')
    var rect2 = draw.circle('25%', '25%').attr({
        fill:'#30D975',
    })
    rect2.cx('67.5%')
    rect2.cy('-10%')
    rect2.addClass('rect2')
    anime({
        targets: '.rect2',
        translateY:'50%',
        duration: 3000
      });
    
    var rect3 = draw.circle('35%', '35%').attr({
        fill:'#F44336',
        opacity:'80%'
    })
    rect3.cx('50%')
    rect3.cy('50%')
    rect3.addClass('rect3')
    rect3.mouseover(function(){
        anime({
            targets: '.rect3',
            translateX: '-36%',
            direction:'alternate',
            duration:800
        })
    })
}



function drawMenubar(){
    var draw = SVG().addTo('#body').size('30vmin', '50vmin')
    var menubar = draw.rect('30vmin','50vmin').attr({
        fill:'green',
        opacity:0.8,
        rx:'10',
        ry:'10'
    })
    draw.addClass('menubar')
    var draw2 = SVG().addTo('.menubar').size('30%', '70%').attr({
        x:0,
        y:0,
    })
    var closeline1 = draw2.line('30%','10%','55%','5%').stroke({
        color:'whitesmoke',
        width:3,
        linecap: 'round',
    })
    var closeline2 = draw2.line('30%','5%','55%','10%').stroke({
        color:'whitesmoke',
        width:3,
        linecap: 'round',
    })
    draw2.addClass('closeline')
    draw2.mouseover(function(){
        anime({
            targets:'.closeline',
            opacity:1,
            duration:400
        })
        draw2.css('cursor', 'pointer')
    })
    draw2.mouseout(function(){
        anime({
            targets:'.closeline',
            opacity:'0.5',
            duration:400
        })
    })
    draw2.click(function(){
        anime({
            targets: '.menubar',
            translateY:'-112vmin',
            direction:'normal',
            duration:800
        })
        anime({
            targets: '.header1',
            opacity:1,
            direction:'normal',
            duration:500
        })
    })
}

function drawheading(){
    var draw = SVG().addTo('#body').size('100%', '8vmin')
    draw.css('margin','10px')
    var text = draw.text('Hello').attr({
        fill:'#F44336',
        x:-1000,
        y:0

    })
    text.addClass('header1')
    text.css('margin','10px')
    window.sv
    text.font({
        anchor:'start',
        size:'5vmin',
        family:'ACBlack'
    })
    anime({
        targets: '.header1',
        translateX:1050,
        scaleX:1,
        duration: 3000
      });
}

function drawtext(){
    var draw = SVG().addTo('#body').size('100%', '5vmin')
    var text = draw.text('Welcome to espii club.').attr({
        fill:'#1A78D9',
        x:'30%',
        y:0,
        opacity:0
    })
    text.font({
        family:'AcBoldCond',
        size:'3vmin',
        anchor:'middle'
    })
    text.animate({
        duration: 2000,
        delay: 1000,
        when: 'now',
        swing: true,
        times: 1,
        wait: 20
    }).attr({
        opacity:1
    })
    text.animate({
        duration: 2000,
        delay: 1000,
        when: 'after',
        swing: true,
        times: 1,
        wait: 20
    }).attr({
        opacity:1
    })
}






export {drawNavbar}
export {drawtext}
export {drawheading}
export {drawGraphicmenu}
export {drawMenubar}
export {drawWebmenu}
export {drawmenuicon}
export {drawboard}
export {drawAnimationmenu}
