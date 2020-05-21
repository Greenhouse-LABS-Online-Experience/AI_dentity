var modal = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var modal3 = document.getElementById("Modal3");
var modal4 = document.getElementById("Modal4");
var modal5 = document.getElementById("Modal5");
var modal6 = document.getElementById("Modal6");
var modal7 = document.getElementById("Modal7");
var modal8 = document.getElementById("Modal8");

var btn = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");
var btn3 = document.getElementById("Btn3");
var btn4 = document.getElementById("Btn4");
var btn5 = document.getElementById("Btn5");
var btn6 = document.getElementById("Btn6");
var btn7 = document.getElementById("Btn7");
var btn8 = document.getElementById("Btn8");

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];

var sharvid = document.getElementById("sharifyvideo");
var quantvid = document.getElementById("quantifyvideo");
var schmeckvid = document.getElementById("schmeckvideo");
var autovid = document.getElementById("autovideo");
var bwvid = document.getElementById("bwvideo");
var stvid = document.getElementById("stvideo");

btn.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}

span1.onclick = function () {
    modal.style.display = "none";
    sharvid.pause();
}

span2.onclick = function () {
    modal2.style.display = "none";
    quantvid.pause();
}

span3.onclick = function () {
    modal3.style.display = "none";
    schmeckvid.pause();
}

span4.onclick = function () {
    modal4.style.display = "none";
}

span5.onclick = function () {
    modal5.style.display = "none";
    autovid.pause();
}

span6.onclick = function () {
    modal6.style.display = "none";
}

span7.onclick = function () {
    modal7.style.display = "none";
    bwvid.pause();
}
span8.onclick = function () {
    modal8.style.display = "none";
    stvid.pause();
}



window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sharvid.pause();
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        quantvid.pause();
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
        schmeckvid.pause();
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
        autovid.pause();
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
        bwvid.pause();
    }
    if (event.target == modal8) {
        modal8.style.display = "none";
        stvid.pause();
    }
}

function openmodal() {
    modal4.style.display = "block";
}


function toAbout() {
    $('html,body').animate({
        scrollTop: $(".about-slide").offset().top
    },
        'slow');
}

function toWork() {
    $('html,body').animate({
        scrollTop: $(".work-slide").offset().top
    },
        'slow');
}

function toContact() {
    $('html,body').animate({
        scrollTop: $(".contact-slide").offset().top
    },
        'slow');
}

function hideshow() {
    var x = document.getElementById("hidden");
    if (x.style.display === "block") {
        $('html,body').animate({
            scrollTop: $(".work-slide").offset().top
        },
            'slow');
        x.style.display = "none";
        document.getElementById("buttonmoreprojects").innerHTML = "<a>See all my projects<a>"
    } else {
        x.style.display = "block";
        document.getElementById("buttonmoreprojects").innerHTML = "<a>Show Less Projects<a>"
    }
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