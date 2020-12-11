import anime from '../node_modules/animejs/lib/anime.es.js';
// import Swiper JS
import Swiper , { Navigation, Pagination,EffectFade, Lazy }  from 'swiper';
import webdev from './assets/svg/webdev.svg'
import coa from './assets/svg/coa.svg'
import me from './assets/svg/me.svg'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination,EffectFade,Lazy]);
function carousel() {
    var swipperContainer = document.createElement('div')
    swipperContainer.setAttribute('id', 'swipercontainer')
    swipperContainer.classList.add('swiper-container')

    var swipperWrapper = document.createElement('div')
    swipperWrapper.setAttribute('id', 'swiperwrapper')
    swipperWrapper.classList.add('swiper-wrapper')


    var btNxt = document.createElement('button')
    btNxt.classList.add('swiper-button-next')

    var btNxt2 = document.createElement('button')
    btNxt2.classList.add('swiper-button-prev')

    var swipperPagination = document.createElement('div')
    swipperPagination.classList.add('swiper-pagination')



    function carousels(img) {
        var swipperSlider = document.createElement('div')
        swipperSlider.setAttribute('id', 'swiperslide')
        swipperSlider.classList.add('swiper-slide')

        var btnCover = document.createElement('div')
        btnCover.setAttribute('id', 'btncover')

        var txtCover = document.createElement('div')
        txtCover.classList.add('txtcover')

        var description = document.createElement('div')
        description.classList.add('description')
        description.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore '

        var swiperLazy = document.createElement('img')
        swiperLazy.classList.add('swiper-lazy')
        swiperLazy.setAttribute('src',img)

        var swiperlazyPre = document.createElement('div')
        swiperlazyPre.classList.add('swiper-lazy-preloader')

        var carButton = document.createElement('a')
        carButton.setAttribute('id', 'carbutton')
        carButton.innerHTML = 'Expand'

        swipperSlider.appendChild(swiperLazy)
        swipperSlider.appendChild(swiperlazyPre)
        swipperSlider.appendChild(txtCover)
        swipperSlider.appendChild(description)
        swipperSlider.appendChild(btnCover)
        swipperWrapper.appendChild(swipperSlider)
        btnCover.appendChild(carButton)
    }
    function txt(x,y,z){
        var txt1 = document.createElement('text')
        txt1.innerHTML = x
        txt1.setAttribute('id', 'cardtext')

        var txtBefore = document.createElement('text')
        txtBefore.setAttribute('id','beforecardtext')
        txtBefore.innerHTML = y
        txt1.before(txtBefore)

        document.getElementsByClassName('txtcover')[z].appendChild(txtBefore)
        document.getElementsByClassName('txtcover')[z].appendChild(txt1)
    }


    var imageContainer = [coa,webdev,me,'']
    var txtContainer = [
        {a:'LOGO DESIGN',b: '3D'},
        {a:'DEVELOPMENT',b: 'WEB'},
        {a:'DESIGN',b: 'Graphic'},
        {a:'DESIGN',b: 'UI/UX'},
    ]
    for (var i = 0; i < 4; i++) {
        carousels(imageContainer[i])
    }

    $('#b2').append(swipperContainer)
    swipperContainer.appendChild(swipperWrapper)
    swipperContainer.appendChild(swipperPagination)
    $('#b2').append(btNxt)
    $('#b2').append(btNxt2)

    for (var i = 0; i < 4; i++) {
        txt(txtContainer[i].a,txtContainer[i].b,i)
    }
    




    const swiper = new Swiper('#swipercontainer',{
        init:true,
        initialSlide:0,
        direction:'horizontal',
        loop:true,
        pagination:{
            el: '.swiper-pagination',
            dynamicBullets:true
        },
        autoplay:true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides:true,
        centerInsufficientSlides:true,
        watchSlidesProgress:true,
        watchSlidesVisibility:true,
        lazy:true,
        preloadImages:false
        
    })
}
export { carousel }