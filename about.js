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

//redirect

var card1 = document.getElementById("card");
card1.innerHTML = getCookie("addedCard");

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
