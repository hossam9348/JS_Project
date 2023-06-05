//redirect
function home() {
  window.location.href = "home.html";
}
function about() {
  window.location.href = "about.html";
}

function contact() {
  window.location.href = "contact.html";
}

//slider

var img = document.getElementsByTagName("img");
var arr = [
  "./images/antique-book-book-bindings-1005324.jpg",
  "./images/th (5).jpeg",
  "./images/58a2e91411e7c85ebc35923b825b12aa.jpg",
  "./images/th (6).jpeg",
  "./images/th (7).jpeg",
];

var index = 1;

var myInterval;
myInterval = setInterval(function () {
  if (index == 4) {
    img[0].src = arr[index];
    index = 0;
  } else {
    img[0].src = arr[index];
    index++;
  }
}, 2000);

function sl() {
  if (index == 0) {
    img[0].src = arr[index];
    index = 4;
  } else {
    img[0].src = arr[index];
    index--;
  }
}

function sr() {
  if (index == 4) {
    img[0].src = arr[index];
    index = 0;
  } else {
    img[0].src = arr[index];
    index++;
  }
}

//filter

function all1() {
  var all = document.getElementsByClassName("product");
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "inline-block";
  }
}
function islamic() {
  var travel = document.getElementsByClassName("travel");
  var novels = document.getElementsByClassName("novels");
  var history = document.getElementsByClassName("history");
  var islamic = document.getElementsByClassName("islamic");

  for (var i = 0; i < travel.length; i++) {
    travel[i].style.display = "none";
  }

  for (var i = 0; i < history.length; i++) {
    history[i].style.display = "none";
  }
  for (var i = 0; i < novels.length; i++) {
    novels[i].style.display = "none";
  }
  for (var i = 0; i < islamic.length; i++) {
    islamic[i].style.display = "inline-block";
  }
}

function history() {
  var travel = document.getElementsByClassName("travel");
  var novels = document.getElementsByClassName("novels");
  var islamic = document.getElementsByClassName("islamic");
  var history = document.getElementsByClassName("history");

  for (var i = 0; i < travel.length; i++) {
    travel[i].style.display = "none";
  }
  for (var i = 0; i < novels.length; i++) {
    novels[i].style.display = "none";
  }
  for (var i = 0; i < islamic.length; i++) {
    islamic[i].style.display = "none";
  }
  for (var i = 0; i < history.length; i++) {
    history[i].style.display = "inline-block";
  }
}

function travel() {
  var history = document.getElementsByClassName("history");
  var novels = document.getElementsByClassName("novels");
  var islamic = document.getElementsByClassName("islamic");
  var travel = document.getElementsByClassName("travel");

  for (var i = 0; i < novels.length; i++) {
    novels[i].style.display = "none";
  }
  for (var i = 0; i < islamic.length; i++) {
    islamic[i].style.display = "none";
  }
  for (var i = 0; i < history.length; i++) {
    history[i].style.display = "none";
  }
  for (var i = 0; i < travel.length; i++) {
    travel[i].style.display = "inline-block";
  }
}

function novels() {
  var history = document.getElementsByClassName("history");
  var islamic = document.getElementsByClassName("islamic");
  var travel = document.getElementsByClassName("travel");
  var novels = document.getElementsByClassName("novels");

  for (var i = 0; i < islamic.length; i++) {
    islamic[i].style.display = "none";
  }
  for (var i = 0; i < history.length; i++) {
    history[i].style.display = "none";
  }

  for (var i = 0; i < travel.length; i++) {
    travel[i].style.display = "none";
  }

  for (var i = 0; i < novels.length; i++) {
    novels[i].style.display = "inline-block";
  }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
function getCookie(key) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] == key) {
      return cookie[1];
    }
  }
  return false;
}

function setCookie(key, value) {
  document.cookie = `${key}=${value}`;
}

if (getCookie("addedCard") == false) setCookie("addedCard", "0");

var card1 = document.getElementById("card");
card1.innerHTML = getCookie("addedCard");

function add() {
  var counter = parseInt(getCookie("addedCard"));
  setCookie("addedCard", counter + 1);
  var card = document.getElementById("card");
  card.innerHTML = getCookie("addedCard");
}
