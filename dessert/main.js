var x = 0;
var y = 0;
var time = 200;
var gameon = false;
var score = -1;
var aim = 20;
var background = 1;
var dessert = 1;
var isenemy = false;
var timeshould = 235;
var points = 1; 
var music = new Audio('music.ogg');
var failSound = new Audio('fail.mp3');;
var highscore1 = 0;
document.getElementsByTagName("body")[0].style.cursor = "url('cursor.cur'), auto";
if (localStorage.highscore) {
	highscore1 = localStorage.getItem('highscore');
	document.getElementById("highscore").innerHTML = "Highscore: " + highscore1;
}
if (localStorage.prefbg) {
	var prefbg = localStorage.getItem('prefbg');
	var body = document.getElementsByTagName('body')[0];
	if (prefbg == 'images/bg4.jpeg') {
		body.style.color = "white";
	}
	body.style.backgroundImage = 'url(' + prefbg + ')';
	document.getElementById("settingbg").src = prefbg;
}
if (localStorage.prefdessert) {
	var prefdessert = localStorage.getItem('prefdessert');
	document.getElementById("popup").src = prefdessert;
	document.getElementById("dessertimg").src = prefdessert;
}

function startinsane() {
	document.getElementById("popup").style.width = "70px";
	document.getElementById("enemy").style.width = "70px";
	document.getElementById("popup").style.opacity = "0.3";
	document.getElementById("enemy").style.opacity = "0.3";
	points = 5;
	score = -5;
	start();
}


function highscore2() {
	if (score > highscore1) {
		localStorage.setItem('highscore', score);
		highscore1 = localStorage.getItem('highscore');
		alert("You got a new highscore!")
		document.getElementById("highscore").innerHTML = "Highscore: " + highscore1;
	}
}

function gameover() {
	if (gameon) {
		failSound.play();
		gameon = false;
		document.getElementById("enemy").style.display = "none";
		document.getElementById("title").innerHTML = "Game Over!";
		document.getElementById("thing").style.display = "block";
		document.getElementById("icecream").style.display = "block";
		document.getElementById("popup").style.display = "none";
  	document.getElementById("time").style.display = "none";
		document.getElementById("aim").style.display = "none";
		highscore2();
	}
}

function changebg() {
    if (background == 1) {
    	background = 2;
    	document.getElementById("settingbg").src = "images/bg2.jpeg";
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(images/bg2.jpeg)';
			localStorage.setItem('prefbg', 'images/bg2.jpeg');

		}
		else if (background == 2) {
    	background = 3;
    	document.getElementById("settingbg").src = "images/bg3.jpeg";
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(images/bg3.jpeg)';
			localStorage.setItem('prefbg', 'images/bg3.jpeg');

    }
		else if (background == 3) {
    	background = 4;
    	document.getElementById("settingbg").src = "images/bg4.jpeg";
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(images/bg4.jpeg)';
			body.style.color = "white";
			localStorage.setItem('prefbg', 'images/bg4.jpeg');
    }
		else if (background == 4) {
    	background = 1;
    	document.getElementById("settingbg").src = "images/bg.jpeg";
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(images/bg.jpeg)';
			body.style.color = "black";
			localStorage.setItem('prefbg', 'images/bg.jpeg');
    }
}

function changedessert() {
    if (dessert == 1) {
    	dessert = 2;
    	document.getElementById("dessertimg").src = "images/chocolate.png";
			document.getElementById("popup").src = "images/chocolate.png";
			localStorage.setItem('prefdessert', 'images/chocolate.png');
		}
		else if (dessert == 2) {
			dessert = 3;
    	document.getElementById("dessertimg").src = "images/biscuit.png";
			document.getElementById("popup").src = "images/biscuit.png"
			localStorage.setItem('prefdessert', 'images/biscuit.png');
    }
		else if (dessert == 3) {
			dessert = 4;
    	document.getElementById("dessertimg").src = "images/brownie.png";
			document.getElementById("popup").src = "images/brownie.png"
			localStorage.setItem('prefdessert', 'images/brownie.png');
    }
		else if (dessert == 4) {
			dessert = 1;
    	document.getElementById("dessertimg").src = "images/icecream.png";
			document.getElementById("popup").src = "images/icecream.png"
			localStorage.setItem('prefdessert', 'images/icecream.png');
    }
}



function checkscore() {
  if (score > (aim -1)) {
    document.getElementById("title").innerHTML = "You got " + aim + "!";
    aim = aim + 20;
    document.getElementById("aim").innerHTML = "Aim: Get " + aim;
  }
}

function enemy() {
	var random = Math.random();
	if (random < 0.25) {
		isenemy = true;
		document.getElementById("popup").style.display = "none";
		document.getElementById("enemy").style.display = "block";
		x = Math.random();  x = (x * 80);  y = Math.random();  y = (y * 70);  document.getElementById("enemy").style.left = x + "%";  document.getElementById("enemy").style.top = y + "%";
	}
}

function popup() {
	isenemy = false;
  score = score + points;
	checkscore();
	document.getElementById("enemy").style.display = "none";
  document.getElementById("score").innerHTML = "Score: " + score;
  time = timeshould;
  x = Math.random();
  x = (x * 80);
  y = Math.random();
  y = (y * 70);
  document.getElementById("popup").style.left = x + "%";
  document.getElementById("popup").style.top = y + "%";
  document.getElementById("popup").style.display = "block";
	enemy();
}



function timer() {
  if (gameon) {
    time = time - 1;
    document.getElementById("time").innerHTML = "Time: " + time;
  }
  if (time < 1) {
		if (isenemy) {
			popup();
		}
		else {
			gameover()
		}
  }
}


function start() {
	music.play();
	x = 0;
	y = 0;
	time = timeshould;
	aim = 20;
	gameon = true;
	document.getElementById("start").style.display = "none";
	document.getElementById("startinsane").style.display = "none";
	document.getElementById("settings").style.display = "none";
	popup();
	setInterval(timer, 1);
}


function thing() {
  location.href ="index.html"
}