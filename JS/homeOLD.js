var i = 0;
var txt = 'hello, i\'m eric maccoux.';
var speed = 100;
var startSpeed = 1000;

function pageStart() {
    setTimeout(typeWriter, startSpeed);
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("nameTitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}