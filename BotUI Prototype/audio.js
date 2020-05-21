function showgame() {
    var x = document.getElementById("splash");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    playaudio();
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

function playaudio() {
    var audiotrack = document.getElementById("audiotrack");
    audiotrack.play();
}

function playaudio2() {
    var audiotrack2 = document.getElementById("audiotrack2");
    audiotrack2.play();
}

var audiotrack = document.getElementById("audiotrack");
var audiotrack2 = document.getElementById("audiotrack2");
var buttonmute = document.getElementById("buttonmute")
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