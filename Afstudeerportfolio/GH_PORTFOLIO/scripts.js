function toIntro() {
    $('html,body').animate({
        scrollTop: $(".inleiding-slide").offset().top
    },
        'slow');
}

function toProces() {
    $('html,body').animate({
        scrollTop: $(".proces-section").offset().top
    },
        'slow');
}

function toContact() {
    $('html,body').animate({
        scrollTop: $(".contact-slide").offset().top
    },
        'slow');
}

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n == undefined) { n = ++slideIndex }
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 3000);
}

var slideIndex = 1;
showSlidesm(slideIndex);

function plusSlidesm(n) {
    showSlidesm(slideIndex += n);
}

function currentSlidem(n) {
    showSlidesm(slideIndex = n);
}

function showSlidesm(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-modal");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndexpro = 1;
var timerpro = null;
showSlidespro(slideIndexpro);

function plusSlidespro(n) {
    clearTimeout(timerpro);
    showSlidespro(slideIndexpro += n);
}

function currentSlidepro(n) {
    clearTimeout(timerpro);
    showSlidespro(slideIndexpro = n);
}

function showSlidespro(n) {
    var i;
    var slidespro = document.getElementsByClassName("myPro");
    if (n == undefined) { n = ++slideIndexpro }
    if (n > slidespro.length) { slideIndexpro = 1 }
    if (n < 1) { slideIndexpro = slidespro.length }
    for (i = 0; i < slidespro.length; i++) {
        slidespro[i].style.display = "none";
    }
    slidespro[slideIndexpro - 1].style.display = "block";
    timerpro = setTimeout(showSlidespro, 3000);
}

var aboutnav = document.getElementsByClassName('float-menu-item about')[0];
var worknav = document.getElementsByClassName('float-menu-item work')[0];
var contactnav = document.getElementsByClassName('float-menu-item contact')[0];
var aboutslide = document.getElementById('about');
var workslide = document.getElementById('work');
var contactslide = document.getElementById('contact');

window.onscroll = function () {
    var positionsecond = aboutslide.getBoundingClientRect();
    var positionthird = workslide.getBoundingClientRect();
    var positionfourth = contactslide.getBoundingClientRect();

    if (positionsecond.bottom > 50 && positionsecond.top < 20) {
        aboutnav.style.color = 'gray';
    } else {
        aboutnav.style.color = '';
    }
    if (positionthird.bottom > 50 && positionthird.top < 20) {
        worknav.style.color = 'gray';
    } else {
        worknav.style.color = '';
    }
    if (positionfourth.bottom > 50 && positionfourth.top < 20) {
        contactnav.style.color = 'gray';
    } else {
        contactnav.style.color = '';
    }
}

AOS.init();
AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
