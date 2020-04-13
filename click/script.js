var ison = 0;
var count= 0;
var time = 5000;
var cps = 0;
var type = 5;

function five() {
    type=5;
}


function resetlive() {
    count=0;
    document.getElementById("clicks").innerHTML = "CPS: " + count;
}

function liveclick() {
    count++;
    document.getElementById("clicks").innerHTML = "CPS: " + count;
}


function live() {
    var live = 1;
    document.getElementById("clickme").innerHTML = "Click Me!!!";
    document.getElementById("select").style.display = "none"; 
    document.getElementById("clicks").innerHTML = "CPS: 0";
    setInterval(function(){resetlive();}, 1000);
}


function ten() {
    type=10;
}

function sixty() {
    type=60;
}

function onehundred() {
    type=100;
}

function remain() {
    setTimeout(remain, 10);
    time = time - 1;
    document.getElementById("remain").innerHTML = "Time remaining: " + Math.floor(time / 100);
}
function start() {
    if (live == 1){
        liveclick();
    }
    else {
        if (ison == 1) {
            count++;
            document.getElementById("clicks").innerHTML = "Clicks: " + count;
        }
        else {
            document.getElementById("select").style.display = "none"; 
            time = type * 100;
            remain();
            ison = 1;
            setTimeout(function(){stop();}, type * 1000);
            document.getElementById("clickme").innerHTML = "Click Me!!!";
            document.getElementById("button").style.height = "150px";
            document.getElementById("button").style.width = "150px";
        }

    }
}

function refresh() {
    location.href ="index.html";
}

function stop() {
    document.getElementById("remain").style.display = "none";
    ison = 0;
    document.getElementById("clickme").innerHTML = "Refresh the page to try again";
    document.getElementById("button").onclick = "";
    cps = (count/type);
    document.getElementById("clicks").innerHTML= "Clicks per second: " + cps;
}
