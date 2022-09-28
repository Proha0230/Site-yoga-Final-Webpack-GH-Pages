/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calculator.js":
/*!**************************!*\
  !*** ./js/calculator.js ***!
  \**************************/
/***/ ((module) => {

function calculator() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum=0,
        daysSum=0,
        total=0;

        totalValue.innerHTML=0;

        persons.addEventListener('change', function () {
            personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        });

        restDays.addEventListener('change', function () {
            daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        });

        place.addEventListener ('change', function () {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options [this.selectedIndex].value; 
            }
        });
};

module.exports = calculator;

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((module) => {

function modal() {

    let more = document.querySelectorAll('.description-btn, .more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function(btn) {
        btn.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';   
        })
    });
    
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        more.forEach(function(btn) {
            btn.classList.remove('more-splash');
        })
    });
};

module.exports = modal;


/***/ }),

/***/ "./js/postPhp.js":
/*!***********************!*\
  !*** ./js/postPhp.js ***!
  \***********************/
/***/ ((module) => {

function postPhp() {
    let message ={
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    // Отправка данных на сервер В блоке Узнать Больше и Узнать Подробнее

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
        statusMessage.classList.add ('status');
        form.addEventListener('submit', function (event){
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);
    
    function postData (data) {
    return new Promise (function(resolve,reject){
        let request = new XMLHttpRequest();
        request.open ('POST', 'server.php');
        request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                resolve()
            } else if (request.readyState === 4 && request.status == 200) {
                resolve()
            } else {
                reject()
            }
        }
        request.send (data);
    })
    }
    
    function clearInput(){
        for( let i=0; i<input.length; i++) {
            input [i].value = '';
        }
    }
    
    postData(formData)
    .then ( () => statusMessage.innerHTML = message.loading)
    .then ( () => statusMessage.innerHTML = message.success)
    .catch ( () => statusMessage.innerHTML = message.failure)
    .then (clearInput)
    
    });

    // Отправка данных на сервер В блоке контактов

    let formContact = document.querySelector("#form"),
    inputContact = formContact.getElementsByTagName('input'),
    messageContact = document.createElement('div');
    messageContact.classList.add('status');
    messageContact.style.color = "white";
    messageContact.style.marginTop = "15px";

    formContact.addEventListener('submit', function(event){
    event.preventDefault();
    formContact.appendChild(messageContact);
    let formData = new FormData(formContact);

    function postData (data) {
        return new Promise (function(resolve,reject){
            let request = new XMLHttpRequest();
            request.open ('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            }
            request.send (data);
        })
        }

        function clearInput(){
            for( let i=0; i<inputContact.length; i++) {
                inputContact [i].value = '';
            }
        }

        postData(formData)
        .then ( () => messageContact.innerHTML = message.loading)
        .then ( () => messageContact.innerHTML = message.success)
        .catch ( () => messageContact.innerHTML = message.failure)
        .then (clearInput)

});

};

module.exports = postPhp;


/***/ }),

/***/ "./js/sliderPhoto.js":
/*!***************************!*\
  !*** ./js/sliderPhoto.js ***!
  \***************************/
/***/ ((module) => {

function sliderPhoto() {
    
// Слайдер фото (по стрелкам и точкам)

let slideIndex = 1,
slides = document.querySelectorAll ('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');



// навигация по стрелкам побокам фото
showSlides(slideIndex);

function showSlides(n){

    if(n>slides.length){
        slideIndex =1;
    }

    if(n<1){
        slideIndex = slides.length;
    }

    slides.forEach( (item) => item.style.display='none');
    dots.forEach( (item) => item.classList.remove ('dot-active'));
    slides [slideIndex -1].style.display = 'block';
    dots [slideIndex -1].classList.add ('dot-active');
    
    }

    function plusSlides (n) {
        showSlides(slideIndex +=n);
    }

    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides (-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    // навигация по точкам

    dotsWrap.addEventListener('click', function (event){
        for (let i=0; i<dots.length+1; i++){
            if (event.target.classList.contains ('dot') && event.target == dots [i-1]) {
                currentSlide(i);
            }
        }
    });
};

module.exports = sliderPhoto;

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/***/ ((module) => {

function tabs () {

    let tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab');


    function hideTabContent (a) 
    {
        for( let i = a; i<tabContent.length; i++)
        {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    function showTabContent(b)
    {
        if ( tabContent[b].classList.contains('hide'))
        {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        }
    };


        info.addEventListener('click', function(event)
        {
        let target = event.target;

        if ( target && target.classList.contains ('info-header-tab'))
        {
            for ( let i=0; i<tab.length; i++)
            {
                if (target == tab[i])
                    {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
            }
        }
});
};

module.exports = tabs;

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((module) => {

function timer () {
    let deadline = '2022-07-05';

    function getTimeRemaining(endtime)
{
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
    
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

function setClock(id, endtime)
{
let timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);

function updateClock()
{
    let t = getTimeRemaining(endtime);

    function addZero(num)
    {
    if( num<=9 )
    {
        return '0' + num;
    }
    else return num;
    };

    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);

    if (t.total <= 0)
    {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
    };

};
};

setClock('timer', deadline);
};

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', function () {

'use strict';

let infoAll = document.querySelector('.info'),
    timerAll = document.querySelector('.timer'),
    contentAll = document.querySelector('.content'),
    photoSlider = document.querySelector('#photo'),
    priceCounter = document.querySelector('#price'),
    contacts = document.querySelector('#contacts'),
    photoBTN = document.querySelector('.photo-btn'),
    aboutBTN = document.querySelector('.about-btn'),
    priceBTN = document.querySelector('.price-btn'),
    morebtn = document.querySelector('.more'),
    contactsBTN = document.querySelector('.contacts-btn');


    let tabs = __webpack_require__ (/*! ../../js/tabs.js */ "./js/tabs.js");
    let timer = __webpack_require__ (/*! ../../js/timer.js */ "./js/timer.js");
    let modal = __webpack_require__ (/*! ../../js/modal.js */ "./js/modal.js");
    let postPhp = __webpack_require__ (/*! ../../js/postPhp.js */ "./js/postPhp.js");
    let sliderPhoto = __webpack_require__ (/*! ../../js/sliderPhoto.js */ "./js/sliderPhoto.js");
    let calculator = __webpack_require__ (/*! ../../js/calculator.js */ "./js/calculator.js");


    function hideAllContent()
    {
        photoSlider.style.display = 'none';
        priceCounter.style.display = 'none';
        contacts.style.display = 'none';
        contentAll.style.minHeight = '1000px';
        window.scrollTo(0,110);
    };

    hideAllContent();


    photoBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'block';
            photoSlider.style.marginTop = '0px';
            priceCounter.style.display = 'none';
            contacts.style.display = 'none';
            infoAll.style.display = 'none';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            window.scrollTo(0,550);
        }
    });

    aboutBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'none';
            contacts.style.display = 'none';
            infoAll.style.display = 'block';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            window.scrollTo(0,110);

        }
    });

    priceBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'block';
            contacts.style.display = 'none';
            infoAll.style.display = 'none';
            timerAll.style.display = 'block';
            morebtn.style.display = 'block';
            contentAll.style.minHeight = '1000px';
            timerAll.style.marginTop = '0px';
            window.scrollTo(0,550);

        }
    });

    contactsBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'none';
            contacts.style.display = 'block';
            infoAll.style.display = 'none';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            contacts.style.width = '100%';
            contacts.style.marginTop = '0px';
            window.scrollTo(0,700);

        }
    });


    tabs();
    timer();
    modal();
    postPhp();
    sliderPhoto();
    calculator();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map