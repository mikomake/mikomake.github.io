var counter = 0;
var cookiesper = 1;
var cookiescost = 50;
var clickercost = 50;
var clickerfast = 3000;
var cookiewidth = 100;
var bonuscost = 50;
var bonusvalue = 2;
var bonustime = 180;
var sized = 0;
var animatedis = false;
var clickbackup = 1;
var bonusis = false;
var cookie = document.getElementById("cookie")
var cookiesperclick = document.getElementById("cookiesperclick");
function save() {
  cookiesper = clickbackup;
  localStorage.setItem('counter', counter);
  localStorage.setItem('cookiesper', cookiesper);
  localStorage.setItem('cookiescost', cookiescost);
  localStorage.setItem('clickercost', clickercost);
  localStorage.setItem('clickerfast', clickerfast);
  localStorage.setItem('bonuscost', bonuscost);
}

function load() {
  counter = parseInt(localStorage.getItem('counter'));
  cookiesper = parseInt(localStorage.getItem('cookiesper'));
  cookiescost = parseInt(localStorage.getItem('cookiescost'));
  clickercost = parseInt(localStorage.getItem('clickercost'));
  clickerfast = parseInt(localStorage.getItem('clickerfast'));
  bonuscost = parseInt(localStorage.getItem('bonuscost'));
  document.getElementById("thing").innerHTML = counter;
  document.getElementById("cookiesperclick").innerHTML = "Cookies per click: " + cookiesper;
  if (clickercost > 50) {
    clicker();
  }
  if (animatedis) {
    document.getElementById("cookie").src="download.gif";
    document.getElementById("animatecookietext").style.display = "none";
  }
  colourcheck();
}
function colourcheck() {
  if (counter > (cookiescost-1)) {
    document.getElementById("increaseshop").style.backgroundColor = "green";
  }
  else {
    document.getElementById("increaseshop").style.backgroundColor = "black";
  }
  if (counter > 9999) {
    document.getElementById("animatecookietext").style.backgroundColor = "green";
  }
  else {
    document.getElementById("animatecookietext").style.backgroundColor = "black";
  }
  if (counter > (clickercost - 1)) {
    document.getElementById("autoclickertext").style.backgroundColor = "green";
  }
  else {
    document.getElementById("autoclickertext").style.backgroundColor = "black";
  }
  if (counter > (bonuscost - 1)) {
    document.getElementById("bonustext").style.backgroundColor = "green";
  }
  else {
    document.getElementById("bonustext").style.backgroundColor = "black";
  }
}

function bonusthing() {
  if (bonustimeout < 1) {
    bonusis = false;
    document.getElementById("bonustimetext").innerHTML = "";
    cookiesper = clickbackup;
    document.getElementById("bonustext").onclick = "buybonus();";
    document.getElementById("bonustext").value = "Buy 2x bonus for 3 mins";
  }
  if (bonusis) {
    setTimeout(bonusthing, 1000);
    bonustimeout = bonustimeout - 1;
    document.getElementById("bonustimetext").innerHTML = "Bonus time remaining: " + bonustimeout;
  }
}

function buybonus() {
    permission();
  if (counter > bonuscost-1) {
      counter = counter - bonuscost;
      bonuscost = bonuscost * 3;
      clickbackup = cookiesper;
      document.getElementById("thing").innerHTML = counter;
      cookiesper = cookiesper * bonusvalue;
      bonusis = true;
      document.getElementById("bonustimetext").innerHTML = "Bonus time remaining: 180";
      bonustimeout = bonustime;
      document.getElementById("bonustext").onclick = "";
      document.getElementById("bonustext").value = "In use";
      bonusthing();
      colourcheck();
  }
  else {
    var alertthing = "Not enough cookies, need " + -(counter - bonuscost) + " more.";
    var notification = new Notification(alertthing)
  }
}

var slider = document.getElementById("myRange");
slider.oninput = function() {
  cookie.style.width = this.value + "px";
}

function moreclick() {
    permission();
  if (counter > cookiescost-1) {
      counter = counter - cookiescost;
      cookiesper = cookiesper + 5;
      clickbackup = cookiesper;
      cookiescost = cookiescost + cookiesper * 4;
      document.getElementById("thing").innerHTML = counter;
      cookiesperclick.innerHTML = "Cookies per click: " + cookiesper;
      colourcheck();
  }
  else {
    var alertthing = "Not enough cookies, need " + -(counter - cookiescost) + " more.";
    var notification = new Notification(alertthing)
  }
}


function autoclick() {
  if (counter > clickercost-1) {
    counter = counter - clickercost;
    clickerfast = clickerfast / 1.1;
    clickercost = clickercost * 2;
    clicker();
    colourcheck();
  }
  else {
    var alertthing = "Not enough cookies, need " + -(counter - clickercost) + " more.";
    var notification = new Notification(alertthing)
  }
}

function clicker() {
  setTimeout(clicker, clickerfast);
  counter = counter + cookiesper;
  document.getElementById("thing").innerHTML = counter;
  colourcheck();
}

function animatecookie() {
  if (counter > 9999) {
    counter = counter - 10000;
    document.getElementById("thing").innerHTML = counter;
    document.getElementById("cookie").src="download.gif";
    document.getElementById("animatecookietext").style.display = "none";
    animatedis = true;
    colourcheck();
  }
  else {
    var alertthing = "Not enough cookies, need " + -(counter - 10000) + " more.";
    var notification = new Notification(alertthing)
  }
}

function thing() {
  counter = counter + cookiesper;
  document.getElementById("thing").innerHTML = counter;
  colourcheck();
}

function permission() {
      if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
      }
    });
  }
}

