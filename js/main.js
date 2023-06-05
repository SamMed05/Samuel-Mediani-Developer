/* ========= MENU SHOW ========= */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* ========= ACTIVE AND REMOVE MENU ========= */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

/* ========= STICKY NAVBAR ========= */
window.onscroll = function () {
  scrollFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

navbar.classList.add("sticky");

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* ========= SCROLL INDICATOR ========= */
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // SMOOTHER TRANSITION
  document.getElementById("myBar").style.WebkitTransition = "ease .1s";
  document.getElementById("myBar").style.MozTransition = "ease .1s";
}

/* ========= SCROLL TO TOP BUTTON ========= */
/* ========= from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp ========= */
topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollTopFunction()}; // This line make the scroll indicator not working :-(

function scrollTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* ========= KEEP SCROLL POSITION ========= */
function refreshPage() {
  let page_y = document.getElementsByTagName("body")[0].scrollTop;
  window.location.href =
    window.location.href.split("?")[0] + "?page_y=" + page_y;
}
window.onload = function () {
  if (window.location.href.indexOf("page_y") != -1) {
    let match = window.location.href.split("?")[1].split("&")[0].split("=");
    document.getElementsByTagName("body")[0].scrollTop = match[1];
  }
};

/* ========= TYPEWRITER EFFECT ========= */
let typewriterElement = document.querySelector(".typewrite");
let typewriterData = typewriterElement.getAttribute("data-type");
let typewriterWords = JSON.parse(typewriterData);

let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    this.updateToRotate(); // update toRotate array
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

TxtType.prototype.updateToRotate = function() {
  let newToRotate = this.el.getAttribute("data-type");
  if (newToRotate) {
    this.toRotate = JSON.parse(newToRotate);
  }
};

window.onload = function () {
  let elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-type");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

/* ========= LIGHT / DARK THEME ========= */
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};
lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

/* ========= APPLY THE CACHED THEME ON RELOAD ========= */
const theme = localStorage.getItem("theme");
const page_y = localStorage.getItem("page_y");

if (theme) {
  body.classList.add(theme);
}

/* ========= LOADER ========= */
window.addEventListener("load", () =>
  setTimeout(function () {
    let load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
  }, 1000)
);

/* ========= SCROLL TO TOP BUTTON ========= */
/* ========= from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp =========
topButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollTopFunction()};

function scrollTopFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/
