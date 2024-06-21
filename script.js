var charactorId = 0;

var score = 0;
var scoreCounter = 5;

var charactorSpeed = 320;

var text = "";

var runCaller = 0;
var createCaller = 0;

var x;

var fireAnimationCounter = 0;

var d3 = document.getElementById("d3");
var d22 = document.getElementById("d22");

var jk1 = false;
var jk2 = false;
var jk3 = false;
var jk4 = false;
var jk5 = false;

function charactorCreate() {
    if (true) {
        mainSound();
    }

    var x = Math.floor(Math.random() * 80) + 35;
    var y = Math.floor(Math.random() * 63) + 10;
    if (y >= 67) {
        y = Math.floor(Math.random() * 20) + 30;
    }
    // var d10 = document.getElementById("d10");
    var charactor = document.createElement("div");
    if (score >= 0) {
        charactor.className = "charactor1";
        if (score > 400) {
            if (jk1 == false) {
                levelUpSound();
                jk1 = true;
            }
            d3.className = "background2";
            d22.className = "castle2";
            charactorSpeed = 300;
            charactor.className = "charactor2";
            if (score > 700) {
                if (jk2 == false) {
                    levelUpSound();
                    jk2 = true;
                }
                d3.className = "background3";
                d22.className = "castle3";
                charactorSpeed = 110;
                charactor.className = "charactor3";
                if (score > 2000) {
                    if (jk3 == false) {
                        levelUpSound();
                        jk3 = true;
                    }
                    d3.className = "background4";
                    d22.className = "castle4";
                    charactorSpeed = 100;
                    charactor.className = "charactor4";
                    if (score > 5000) {
                        if (jk4 == false) {
                            levelUpSound();
                            jk4 = true;
                        }
                        d3.className = "background5";
                        d22.className = "castle5";
                        charactorSpeed = 60;
                        charactor.className = "charactor5";
                    }
                }
            }
        }
    }
    charactor.style.marginLeft = x + "vw";
    charactor.style.marginTop = y + "vh";
    charactor.id = "c" + charactorId;
    var charactorFlow = document.getElementById("d10");
    charactorFlow.appendChild(charactor);
    charactorSpeed = charactorSpeed - 1;
    runCaller = setInterval(charactorAnimation, charactorSpeed, "c" + charactorId);
    charactorId = charactorId + 1;
}

function charactorCreateStart() {
    createCaller = setInterval(charactorCreate, 400);

}

function charactorAnimation(i) {
    var charactor = document.getElementById(i);
    var c = window.getComputedStyle(charactor).marginLeft;
    var runSpeed = Math.floor(Math.random() * 9) + 4;
    var x = parseInt(c) - runSpeed;
    charactor.style.marginLeft = x + "px";

    charactor.onclick = function() {
        if (jk5 == false) {
            dieSound();
            jk5 = true;
        }
        jk5 = false;
        charactor.style.visibility = "hidden";
        var d4 = document.getElementById("d4");
        var d6 = document.getElementById("d6");
        var d8 = document.getElementById("d8");
        var d9 = document.getElementById("d9");
        if (score >= 0) {
            scoreCounter = 5;
            text = "1";
            if (score >= 800) {
                scoreCounter = 10;
                text = "2";
                if (score >= 3500) {
                    scoreCounter = 15;
                    text = "3";
                    if (score >= 10500) {
                        scoreCounter = 20;
                        text = "4";
                        if (score >= 15000) {
                            scoreCounter = 25;
                            text = "5";
                        }
                    }
                }
            }
        }
        score = score + scoreCounter;

        d8.innerHTML = score;
        d4.appendChild(d8);

        d9.innerHTML = text;
        d6.appendChild(d9);
    };
    var d10 = document.getElementById("d10");
    if (score > 40000) {
        clearInterval(runCaller);
        clearInterval(createCaller);
        d3.className = "win";
        d10.style.display = "none";
        d22.style.display = "none";
        var d14 = document.getElementById("d14");
        d14.style.visibility = "visible";
    }

    if (x < 75) {
        if (charactor.style.visibility != "hidden") {
            if (true) {
                dangerSounds();
            }
            if (d22.className == "d22") {
                d22.className = "danger1";
            }
            if (d22.className == "castle2") {
                d22.className = "danger2";
            }
            if (d22.className == "castle3") {
                d22.className = "danger3";
            }
            if (d22.className == "castle4") {
                d22.className = "danger4";
            }
            if (d22.className == "castle5") {
                d22.className = "danger5";
            }
        }
    }

    if (x < -100) {
        if (charactor.style.visibility != "hidden") {
            clearInterval(runCaller);
            clearInterval(createCaller);
            d10.style.display = "none";
            d22.style.display = "none";
            var cancle = document.getElementById("d11");
            d3.className = "gameover";
            cancle.style.visibility = "visible";
        }
    }

}

function playBtn() {
    window.location = "home.html";
}

function menuBtn() {
    window.location = "home.html";
}

function closeBtn() {
    window.location = "index.html";
}

var levelUp = new Audio("sounds/levelup.mp3");
var die = new Audio("sounds/die.mp3");
var main = new Audio("sounds/mainsound.mp3");
var dangersound = new Audio("sounds/danger.wav");

function levelUpSound() {
    levelUp.play();
    levelUp.volume = 0.8;
}

function dieSound() {
    die.play();
}

function mainSound() {
    main.play();
    main.volume = 0.4;
    main.loop = true;
}

function dangerSounds() {
    dangersound.play();
}