$(document).ready(function () {

    /*** Mute all ***/
    $('#mute_all').on('click', function () {

        /*** Mute all video and audio on page ***/
        $('body video, body audio').each(function () {
            /*** Do it here globally ***/
            $(this).prop('muted', true);
        });

    });

    /*** UnMute all ***/
    $('#unmute_all').on('click', function () {

        /*** Un Mute all video and audio on page ***/
        $('body video, body audio').each(function () {
            /*** Do it here globally ***/
            $(this).prop('muted', false);
        });

    });
});

function mute() {
    var mute_all = document.getElementById("mute_all");
    mute_all.style.backgroundColor = "#D87474";
    mute_all.style.color = "#E3DFD8";

    unmute_all.style.backgroundColor = "#E3DFD8";
    unmute_all.style.color = "gray";
}

function unmute() {
    var unmute_all = document.getElementById("unmute_all");
    unmute_all.style.backgroundColor = "#56D98E";
    unmute_all.style.color = "#E3DFD8";

    mute_all.style.backgroundColor = "#E3DFD8";
    mute_all.style.color = "gray";
}

function showgame() {
    var x = document.getElementById("splash");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    playstartup();
}
function hidesplash() {
    var x = document.getElementById("splashscreen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showgame2() {
    var x = document.getElementById("splash2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    playstartup();
}
function hidesplash2() {
    var x = document.getElementById("splashscreen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function playaudio() {
    var audiotrack = document.getElementById("audiotrack");
    audiotrack.play();
    audiotrack2.pause();
    audiotrack3.pause();
    audiotrack4.pause();
}

function playaudio2() {
    var audiotrack2 = document.getElementById("audiotrack2");
    audiotrack.pause();
    audiotrack2.play();
    audiotrack3.pause();
    audiotrack4.pause();
}

function playaudio3() {
    var audiotrack3 = document.getElementById("audiotrack3");
    audiotrack.pause();
    audiotrack2.pause();
    audiotrack3.play();
    audiotrack4.pause();
}

function playaudio4() {
    var audiotrack4 = document.getElementById("audiotrack4");
    audiotrack.pause();
    audiotrack2.pause();
    audiotrack3.pause();
    audiotrack4.play();
}

var audiotrack = document.getElementById("audiotrack");
var audiotrack2 = document.getElementById("audiotrack2");
var audiotrack3 = document.getElementById("audiotrack3");
var audiotrack4 = document.getElementById("audiotrack4");
//var buttonmute = document.getElementById("buttonmute")
var isPlaying = false;

function mutesound() {
    if (isPlaying) {
        audiotrack.pause()
        buttonmute.innerHTML = "unmute the sound";
    } else {
        audiotrack.play();
        buttonmute.innerHTML = "mute the sound";
    }
};
audiotrack.onplaying = function () {
    isPlaying = true;
};
audiotrack.onpause = function () {
    isPlaying = false;
};

function mutesound2() {
    if (isPlaying) {
        audiotrack2.pause()
        buttonmute.innerHTML = "unmute the sound";
    } else {
        audiotrack2.play();
        buttonmute.innerHTML = "mute the sound";
    }
};
audiotrack2.onplaying = function () {
    isPlaying = true;
};
audiotrack2.onpause = function () {
    isPlaying = false;
};


function playstartup() {
    var startup = document.getElementById("startup");
    startup.play();
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function stopplaying1(){
    audiotrack.pause();
}

var buttons = document.getElementsByTagName('button');