let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//--------------------Выпадающий список изменения языка--------------------
//Переменые и старновые значения
const langChange_button = document.querySelector('#langChange_button');
const langChange_list = document.querySelector('.langChange_list');

//Открытие и закрытие окна изменения языка
function closeLangChange_list(event) {
    if (!event.target.closest('#langChange_button')) {
        langChange_list.classList.remove('open');
        window.removeEventListener('click', closeLangChange_list);
    }
}
langChange_button.addEventListener('click', function() {
    if (!langChange_list.classList.contains('open')) {
        langChange_list.classList.add('open');
        window.addEventListener('click', closeLangChange_list);
    }
    else {
        langChange_list.classList.remove('open');
        window.removeEventListener('click', closeLangChange_list);
    }
});
//____________________Выпадающий список изменения языка____________________

//--------------------------Модальные окна-----------------------------
const backModal = document.querySelector('#backModal');
//--------------------Модальное окно авторизации-----------------------
// Переменые и старновые значения
const loginModal_button = document.querySelector('header .loginModal_button');
const loginModal = document.querySelector('#loginModal');
const loginModal_textBoxes = document.querySelectorAll('form.loginForm input');
const loginModal_leftLines = document.querySelectorAll('form.loginForm span.leftLine');
const loginModal_rightLines = document.querySelectorAll('form.loginForm span.rightLine');
const loginModal_eyeButton = document.querySelector('form.loginForm .eye');

//Функции
function loginModal_textBoxLight(event) {
    //Подцвечивание поля ввода
    for (let i = 0; i < loginModal_textBoxes.length; i++) {
        if (event.target == loginModal_textBoxes[i]) {
            function textBoxBlur() {
                loginModal_leftLines[i].classList.remove('true');
                loginModal_rightLines[i].classList.remove('true');
                loginModal_textBoxes[i].removeEventListener('blur', textBoxBlur);
            }
            loginModal_leftLines[i].classList.add('true');
            loginModal_rightLines[i].classList.add('true');
            loginModal_textBoxes[i].addEventListener('blur', textBoxBlur);
        }
    }
}
function loginModal_hidShowPassword() {
        //Показ и скрытие поля с паролем
        const exception = document.querySelector('form.loginForm input.exception');
        if (exception.type == 'password') {
            exception.type = 'text';
        }
        else if (exception.type == 'text') {
            exception.type = 'password';
        }
}
function openLoginModal() {
    //Открытие окна авторизации
    if (!loginModal.classList.contains('open')) {
        backModal.classList.add('visible');
        loginModal.classList.add('open');
        loginModal_button.removeEventListener('click', openLoginModal);
        window.addEventListener('click', closeLoginModal);
        document.documentElement.style.overflowY = 'hidden';
        backModal.style.overflowY = 'hidden';
        document.querySelector('.mainConteiner').style.paddingRight = scrollBarWidth + 'px';
        for (let i = 0; i < loginModal_textBoxes.length; i++) {
            loginModal_textBoxes[i].addEventListener('focus', loginModal_textBoxLight);
        }
        loginModal_eyeButton.addEventListener('click', loginModal_hidShowPassword);
    }
}
function closeLoginModal(event) {
    //Закрытие окна авторизации
    function closeLoginModal_Actions() {
        backModal.classList.remove('visible');
        loginModal.classList.remove('open');
        window.removeEventListener('click', closeLoginModal);
        loginModal_button.addEventListener('click', openLoginModal);
        document.documentElement.style.overflowY = 'auto';
        backModal.style.overflowY = 'auto';
        document.querySelector('.mainConteiner').style.paddingRight = 0;
        for (let i = 0; i < loginModal_textBoxes.length; i++) {
            loginModal_textBoxes[i].removeEventListener('focus', loginModal_textBoxLight);
        }
        loginModal_eyeButton.removeEventListener('click', loginModal_hidShowPassword);
    }
    if (loginModal.classList.contains('open')) {
        if (!event.target.closest('#loginModal') && !event.target.closest('header .loginModal_button')) {
            closeLoginModal_Actions();
        }
        if (event.target.closest('#loginModal .cross')) {
            closeLoginModal_Actions();
        }
    }

}
loginModal_button.addEventListener('click', openLoginModal);
//____________________Модальное окно авторизации_______________________

//--------------------Модальное окно регистрации-----------------------
//Переменые и стартовые значения
const signupModal_button = document.querySelector('header .signupModal_button');
const signupModal = document.querySelector('#signupModal');
const signupModal_textBoxes = document.querySelectorAll('form.signupForm input');
const signupModal_leftLine = document.querySelectorAll('form.signupForm span.leftLine');
const signupModal_rightLine = document.querySelectorAll('form.signupForm span.rightLine');
const signupModal_eyeButton = document.querySelector('form.signupForm .eye');

//Функции
function signupModal_textBoxLight(event) {
    //Подцвечивание поля ввода
    for (let i = 0; i < signupModal_textBoxes.length; i++) {
        if (event.target == signupModal_textBoxes[i]) {
            function textBoxBlur() {
                signupModal_leftLine[i].classList.remove('true');
                signupModal_rightLine[i].classList.remove('true');
                signupModal_textBoxes[i].removeEventListener('blur', textBoxBlur);
            }
            signupModal_leftLine[i].classList.add('true');
            signupModal_rightLine[i].classList.add('true');
            signupModal_textBoxes[i].addEventListener('blur', textBoxBlur);
        }
    }
}
function signupModal_hidShowPassword() {
    //Показ и скрытие поля с паролем
    const exception = document.querySelector('form.signupForm input.exception');
    if (exception.type == 'password') {
        exception.type = 'text';
    }
    else if (exception.type == 'text') {
        exception.type = 'password';
    }
}
function openSignupModal() {
    //Открытие окна регистрации
    if (!signupModal.classList.contains('open')) {
        backModal.classList.add('visible');
        signupModal.classList.add('open');
        signupModal_button.removeEventListener('click', openSignupModal);
        window.addEventListener('click', closeSignupModal);
        document.documentElement.style.overflowY = 'hidden';
        document.querySelector('.mainConteiner').style.paddingRight = scrollBarWidth + 'px';
        for (let i = 0; i < signupModal_textBoxes.length; i++) {
            signupModal_textBoxes[i].addEventListener('focus', signupModal_textBoxLight);
        }
        signupModal_eyeButton.addEventListener('click', signupModal_hidShowPassword);
    }
}
function closeSignupModal(event) {
    //Закрытие окна регистрации
    function closeSignupModal_Action() {
        backModal.classList.remove('visible');
        signupModal.classList.remove('open');
        signupModal_button.addEventListener('click', openSignupModal);
        window.removeEventListener('click', closeSignupModal);
        document.documentElement.style.overflowY = 'auto';
        document.querySelector('.mainConteiner').style.paddingRight = 0;
        for (let i = 0; i < signupModal_textBoxes.length; i++) {
            signupModal_textBoxes[i].removeEventListener('focus', signupModal_textBoxLight);
        }
        signupModal_eyeButton.removeEventListener('click', signupModal_hidShowPassword);
    }
    if (signupModal.classList.contains('open')) {
        if (!event.target.closest('#signupModal') && !event.target.closest('header .signupModal_button')) {
            closeSignupModal_Action();
        }
        if (event.target.closest('#signupModal .cross')) {
            closeSignupModal_Action();
        }
    }
}
signupModal_button.addEventListener('click', openSignupModal);

//____________________Модальное окно регистрации_______________________
//__________________________Модальные окна_____________________________

//-----------------------------Выпадающие меню-----------------------------
//------------------------------Вся коллекция------------------------------
//Переменые и старновые значения
const dropButton1 = document.querySelector('#head_gorizontalMenu');
const dropMenu1 = document.querySelector('#verticalMenu');

//Функции
function openDropMenu1() {
    if (!dropMenu1.classList.contains('open')) {
        dropMenu1.classList.add('open');
    }
    else {
        dropMenu1.classList.remove('open');
    }
}
dropButton1.addEventListener('click', openDropMenu1);
//______________________________Вся коллекция______________________________
//------------------------------Навигация------------------------------
//Переменые и старновые значения
const dropButton2 = document.querySelector('#gorizontalMenu img.menuButton');
const dropMenu2 = document.querySelector('#gorizontalMenu nav');

//Функции
function openDropMenu2() {
    if (!dropMenu2.classList.contains('open')) {
        dropMenu2.classList.add('open');
    }
    else {
        dropMenu2.classList.remove('open');
    }
}
dropButton2.addEventListener('click', openDropMenu2);
//______________________________Навигация______________________________
//_____________________________Выпадающие меню_____________________________

//----------------------------Первый Слайдер----------------------------
//Переменые и стартовые значения
const slider = document.querySelector('#sector1 .slider');
const sliderLine = document.querySelector('#sector1 .slider-line');
let slides = document.querySelectorAll('#sector1 .slide');
let spareSlides = document.querySelectorAll('#sector1 .slide');
let slideWidth = slider.clientWidth;
let slideHeight = slider.clientHeight;
let slideActive = 0;
let switchTime = '1s';
sliderLine.style.transition = switchTime;
let delay = 4000;
spareSlides[0].classList.add('Active');
let sliderPosition = 0;
const dotsWrapper = document.querySelector('#sector1 .dotsWrapper');
let dots = document.querySelectorAll('#sector1 .dot');
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('div');
    dot.className = 'dot';
    dotsWrapper.append(dot);
    dots = document.querySelectorAll('#sector1 .dot');
    dotsWrapper.style.width =  1.5 * dots.length + 'rem';
}

function resize_slider1() {
    //Примерение слайдов к слайдеру
    slideWidth = slider.clientWidth;
    slideHeight = slider.clientHeight;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = slideWidth + 'px';
        slides[i].style.height = slideHeight + 'px';
    }
    sliderLine.style.width = (slideWidth * slides.length) + 'px'; //Длина контейнера слайдов
    sliderLine.style.left = sliderPosition + 'px'; //Подстановка активного слайда
}

function dotSynchronization1() {
    //Синхронизация слайдов и точек
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('Active')) {
            dots[i].style.opacity = 1;
        }
        else {
            dots[i].style.opacity = 0.5;
        }
    }
}

function dotClick1(event) {
    //Перемещение на слайд по нажатию точки
    for (let i = 0; i < slides.length; i++) {
        sliderLine.append(slides[i]);
    }
    spareSlides = document.querySelectorAll('#sector1 .slide');
    sliderLine.style.transition = 'none';
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('Active')) {
            slideActive = i;
        }
    }
    sliderPosition = -(slideActive * slideWidth);
    sliderLine.style.left = sliderPosition + 'px';
    for (let i = 0; i < dots.length; i++) {
        if (event.target == dots[i]) {
            slideActive = i;
            slides[i].classList.add('Active');
            if (sliderLine.offsetLeft >= sliderPosition) {
                sliderLine.style.transition = switchTime;
            }
            sliderPosition = -(slideActive * slideWidth);
            sliderLine.style.left = sliderPosition + 'px';
        }
        else if (event.target == dotsWrapper) {}
        else {
            slides[i].classList.remove('Active');
        }
    }
    dotSynchronization1();
}

function slider1Move() {
    //Смещение слайдов
    if (spareSlides[spareSlides.length - 1].classList.contains('Active')) {
        slideActive = 0;
        sliderPosition = 0;
        sliderLine.style.transition = 'none';
        sliderLine.style.left = '0';
        sliderLine.prepend(spareSlides[spareSlides.length - 1]);
        spareSlides = document.querySelectorAll('#sector1 .slide');
        if (sliderLine.offsetLeft >= 0) {
            sliderLine.style.transition = switchTime;
        }
        slideActive++;
        spareSlides[slideActive - 1].classList.remove('Active');
        spareSlides[slideActive].classList.add('Active');
        sliderPosition = -(slideActive * slideWidth);
        sliderLine.style.left = sliderPosition + 'px';
    }
    else {
        slideActive++;
        spareSlides[slideActive - 1].classList.remove('Active');
        spareSlides[slideActive].classList.add('Active');
        sliderPosition = -(slideActive * slideWidth);
        sliderLine.style.left = sliderPosition + 'px';
    }
    dotSynchronization1();
}
dotSynchronization1();
let sliderMoveInterval = setInterval(slider1Move, delay);
dotsWrapper.addEventListener('click', dotClick1);

slider.addEventListener('mouseover', function() {
    clearInterval(sliderMoveInterval);
});
slider.addEventListener('mouseout', function() {
    sliderMoveInterval = setInterval(slider1Move, delay);
});
//____________________________Первый Слайдер____________________________

//----------------------------Второй Слайдер----------------------------
//Переменые и стартовые значения
const slider2 = document.querySelector('#sector3 .slider');
const sliderLine2 = document.querySelector('#sector3 .slider-line');
let slides2 = document.querySelectorAll('#sector3 .slide');
let spareSlides2 = document.querySelectorAll('#sector3 .slide');
let slide2Width = slider2.clientWidth;
let slide2Height = slider2.clientHeight;
let slide2Active = 0;
spareSlides2[0].classList.add('Active');
let switchTime2 = '0.5s';
sliderLine2.style.transition = switchTime2;
let delay2 = 4000;
let slider2Position = 0;
const dotsWrapper2 = document.querySelector('#sector3 .dotsWrapper');
let dots2 = document.querySelectorAll('#sector3 .dotsWrapper .dot');
for (let i = 0; i < slides2.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    dotsWrapper2.append(dot);
    dots2 = document.querySelectorAll('#sector3 .dotsWrapper .dot');
    dotsWrapper2.style.width = 1.25 * dots2.length + 'rem';
}

function resize_slider2() {
    //Примерение слайдов к слайдеру
    slide2Width = slider2.clientWidth;
    slide2Height = slider2.clientHeight;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.width = slide2Width + 'px';
        slides2[i].style.height = slide2Height + 'px';
    }
    sliderLine2.style.width = (slide2Width * slides2.length) + 'px'; //Длина контейнера слайдов
    sliderLine2.style.left = slider2Position + 'px'; //Подстановка активного слайда
}

function dotSynchronization2() {
    //Синхронизация точек и слайдов
    for (let i = 0; i < dots2.length; i++) {
        if (slides2[i].classList.contains('Active')) {
            dots2[i].style.opacity = 1;
        }
        else {
            dots2[i].style.opacity = 0.5;
        }
    }
}

function dotClick2(event) {
    for (let i = 0; i < slides2.length; i++) {
        sliderLine2.append(slides2[i]);
    }
    spareSlides2 = document.querySelectorAll('#sector3 .slide');
    sliderLine2.style.transition = 'none';
    for (let i = 0; i < slides2.length; i++) {
        if (slides2[i].classList.contains('Active')) {
            slide2Active = i;
        }
    }
    slider2Position = -(slide2Active * slide2Width);
    sliderLine2.style.left = slider2Position + 'px';
    for (let i = 0; i < dots2.length; i++) {
        if (event.target == dots2[i]) {
            slide2Active = i;
            slides2[i].classList.add('Active');
            if (sliderLine2.offsetLeft >= slider2Position) {
                sliderLine2.style.transition = switchTime2;
            }
            slider2Position = -(slide2Active * slide2Width);
            sliderLine2.style.left = slider2Position + 'px';
        }
        else if (event.target == dotsWrapper2) {}
        else {
            slides2[i].classList.remove('Active');
        }
    }
    dotSynchronization2();
    clearInterval(slider2MoveInterval);
    slider2MoveInterval = setInterval(slider2Move, delay2);
}

function slider2Move() {
    //Смещение слайдов
    if (spareSlides2[spareSlides2.length - 1].classList.contains('Active')) {
        slide2Active = 0;
        slider2Position = 0;
        sliderLine2.style.transition = 'none';
        sliderLine2.style.left = '0';
        sliderLine2.prepend(spareSlides2[spareSlides2.length - 1]);
        spareSlides2 = document.querySelectorAll('#sector3 .slide');
        if (sliderLine2.offsetLeft >= 0) {
            sliderLine2.style.transition = switchTime2;
        }
        slide2Active++;
        spareSlides2[slide2Active - 1].classList.remove('Active');
        spareSlides2[slide2Active].classList.add('Active');
        slider2Position = -(slide2Active * slide2Width);
        sliderLine2.style.left = slider2Position + 'px';
    }
    else {
        slide2Active++;
        spareSlides2[slide2Active - 1].classList.remove('Active');
        spareSlides2[slide2Active].classList.add('Active');
        slider2Position = -(slide2Active * slide2Width);
        sliderLine2.style.left = slider2Position + 'px';
    }
    dotSynchronization2();
}
dotSynchronization2();
let slider2MoveInterval = setInterval(slider2Move, delay2);
dotsWrapper2.addEventListener('click', dotClick2);

slider2.addEventListener('mouseover', function() {
    clearInterval(slider2MoveInterval);
})
slider2.addEventListener('mouseout', function() {
    slider2MoveInterval = setInterval(slider2Move, delay2);
});
//____________________________Второй Слайдер____________________________

//----------------------------Третий Слайдер----------------------------
//Переменные и стартовые значения
const slider3 = document.querySelector('#sector5 .slider');
const sliderLine3 = document.querySelector('#sector5 .slider-line');
let slides3 = document.querySelectorAll('#sector5 .slide');
let slide3Width = slider3.clientWidth;
let slide3Height = slider3.clientHeight;
let slide3Active = 0;
slides3[0].classList.add('Active');
let slider3Position = 0;
const manipulationForm = document.forms.manipulation;
const nextPageButton = document.querySelector('#sector5 .oneStep .next');
const backPageButton = document.querySelector('#sector5 .oneStep .back');
const addPageButton = document.querySelector('#sector5 .specificPage .next');
const reducePageButton = document.querySelector('#sector5 .specificPage .back');
const inputPage = document.forms.manipulation.inputPage;
const numberPages = document.querySelector('#sector5 .manipulation .numberPages');
numberPages.innerHTML = slides3.length;

function resize_slider3() {
    //Примерение слайдов к слайдеру
    slide3Width = slider3.clientWidth;
    slide3Height = slider3.clientHeight;
    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.width = slide3Width + 'px';
        slides3[i].style.height = slide3Height + 'px';
    }
    sliderLine3.style.width = slide3Width * slides3.length + 'px'; //Длина контейнера слайдов
    sliderLine3.style.left = slider3Position + 'px'; //Подстановка активного слайда
}

nextPageButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!slides3[slides3.length - 1].classList.contains('Active')) {
        slides3[slide3Active].classList.remove('Active');
        slide3Active++;
        slides3[slide3Active].classList.add('Active');
        slider3Position = -(slide3Width * slide3Active);
        sliderLine3.style.left = slider3Position + 'px';
        inputPage.value = slide3Active + 1;
        if (slides3[1].classList.contains('Active')) {
            backPageButton.classList.remove('hidden');
        }
        if (slides3[slides3.length - 1].classList.contains('Active')) {
            nextPageButton.classList.add('hidden');
        }
    }
    else {}
});
backPageButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!slides3[0].classList.contains('Active')) {
        slides3[slide3Active].classList.remove('Active');
        slide3Active--;
        slides3[slide3Active].classList.add('Active');
        slider3Position = -(slide3Width * slide3Active);
        sliderLine3.style.left = slider3Position + 'px';
        inputPage.value = slide3Active + 1;
        if (slides3[slides3.length - 2].classList.contains('Active')) {
            nextPageButton.classList.remove('hidden');
        }
        if (slides3[0].classList.contains('Active')) {
            backPageButton.classList.add('hidden');
        }
    }
    else {}
});
addPageButton.addEventListener('click', function(event) {
    event.preventDefault();
    inputPage.focus();
    if (inputPage.value < slides3.length) {
        inputPage.value++;
    }
    else {}
});
reducePageButton.addEventListener('click', function(event) {
    event.preventDefault();
    inputPage.focus();
    if (inputPage.value > 1) {
        inputPage.value--;
    }
    else {}
});
inputPage.addEventListener('input', function() {
    if (inputPage.value >= 1 && inputPage.value <= slides3.length) {
        inputPage.style.color = '#000000';
    }
    else {
        inputPage.style.color = '#dc0000';
    }
});
inputPage.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        if (slides3.length > 1) {
            if (inputPage.value >= 1 && inputPage.value <= slides3.length) {
                backPageButton.classList.remove('hidden');
                nextPageButton.classList.remove('hidden');
                for (let i = 0; i < slides3.length; i++) {
                    if (slides3[i].classList.contains('Active')) {
                        slides3[i].classList.remove('Active');
                    }
                }
                slide3Active = inputPage.value - 1;
                slides3[slide3Active].classList.add('Active');
                slider3Position = -(slide3Width * slide3Active);
                sliderLine3.style.left = slider3Position + 'px';
                if (slides3[0].classList.contains('Active')) {
                    backPageButton.classList.add('hidden');
                }
                if (slides3[slides3.length - 1].classList.contains('Active')) {
                    nextPageButton.classList.add('hidden');
                }
            }
        }
        else {}
    }
    else {}
});
//____________________________Третий Слайдер____________________________

//--------------------------Четвёртый слайдер---------------------------
//Переменные и стартовые значения
const slider4 = document.querySelector('#sector6 .slider');
const sliderLine4 = document.querySelector('#sector6 .slider-line');
let slides4 = document.querySelectorAll('#sector6 .slider .slide');
let spareSlides4 = document.querySelectorAll('#sector6 .slider .slide');
let slide4Width = slider4.clientWidth;
let slide4Height = sliderLine.clientHeight;
let slide4Active = 0;
spareSlides4[slide4Active].classList.add('Active');
let switchTime4 = '1s';
sliderLine4.style.transition = switchTime4;
let delay4 = 4000;
let slider4Position = 0;
const backSlide_button = document.querySelector('#sector6 .slider .button.backSlide');
const nextSlide_button = document.querySelector('#sector6 .slider .button.nextSlide');

function resize_slider4() {
    //Примерение слайдов к слайдеру
    slide4Width = slider4.clientWidth;
    slide4Height = sliderLine4.clientHeight;
    for (let i = 0; i < slides4.length; i++) {
        slides4[i].style.width = slide4Width + 'px';
        slides4[i].style.height = slide4Height + 'px';
    }
    sliderLine4.style.width = (slide4Width * slides4.length) + 'px'; //Длина контейнера слайдов
    sliderLine4.style.left = slider4Position + 'px'; //Подстановка активного слайда
}

function slider4MoveForward() {
    //Смещение слайдов вперёд
    if (spareSlides4[spareSlides4.length - 1].classList.contains('Active')) {
        slide4Active = 0;
        slider4Position = 0;
        sliderLine4.style.transition = 'none';
        sliderLine4.style.left = '0';
        sliderLine4.prepend(spareSlides4[spareSlides4.length - 1]);
        spareSlides4 = document.querySelectorAll('#sector6 .slider .slide');
        if (sliderLine4.offsetLeft >= 0) {
            sliderLine4.style.transition = switchTime4;
        }
        slide4Active++;
        spareSlides4[slide4Active - 1].classList.remove('Active');
        spareSlides4[slide4Active].classList.add('Active');
        slider4Position = -(slide4Active * slide4Width);
        sliderLine4.style.left = slider4Position + 'px';
    }
    else {
        slide4Active++;
        spareSlides4[slide4Active - 1].classList.remove('Active');
        spareSlides4[slide4Active].classList.add('Active');
        slider4Position = -(slide4Active * slide4Width);
        sliderLine4.style.left = slider4Position + 'px';
    }
}
function slider4MoveBack() {
    //Смещение слайдов назад
    if (spareSlides4[0].classList.contains('Active')) {
        slide4Active = spareSlides4.length - 1;
        slider4Position = -(slide4Width * slide4Active);
        sliderLine4.style.transition = 'none';
        sliderLine4.style.left = slider4Position + 'px';
        sliderLine4.append(spareSlides4[0]);
        spareSlides4 = document.querySelectorAll('#sector6 .slider .slide');
        if (sliderLine4.offsetLeft <= slider4Position) {
            sliderLine4.style.transition = switchTime4;
        }
        slide4Active--;
        spareSlides4[slide4Active + 1].classList.remove('Active');
        spareSlides4[slide4Active].classList.add('Active');
        slider4Position = -(slide4Active * slide4Width);
        sliderLine4.style.left = slider4Position + 'px';
    }
    else {
        slide4Active--;
        spareSlides4[slide4Active + 1].classList.remove('Active');
        spareSlides4[slide4Active].classList.add('Active');
        slider4Position = -(slide4Active * slide4Width);
        sliderLine4.style.left = slider4Position + 'px';
    }
}
let slider4MoveInterval = setInterval(slider4MoveForward, delay4);
nextSlide_button.addEventListener('click', slider4MoveForward);
backSlide_button.addEventListener('click', slider4MoveBack);
slider4.addEventListener('mouseover', function() {
    clearInterval(slider4MoveInterval);
});
slider4.addEventListener('mouseout', function() {
    slider4MoveInterval = setInterval(slider4MoveForward, delay4);
});

//__________________________Четвёртый слайдер___________________________

resize_slider1();
resize_slider2();
resize_slider3();
resize_slider4();
window.addEventListener('resize', function() {
    resize_slider1();
    resize_slider2();
    resize_slider3();
    resize_slider4();
});