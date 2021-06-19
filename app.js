const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');

  let scrollPos = window.scrollY;
 //console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 200) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 750) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    return;
  } 

  if ((elem && window.innerWIdth < 960 && scrollPos < 200) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//slider 

var slide = document.getElementById("slider");
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');

     btn1.onclick = function () {
      slide.style.transform = "translateX(0px)";
      btn1.classList.add('actv');
      btn2.classList.remove('actv');
      btn3.classList.remove('actv');
      btn4.classList.remove('actv');
      btn5.classList.remove('actv');
    };
     btn2.onclick = function () {
      slide.style.transform = "translateX(-100%)";
      btn1.classList.remove('actv');
      btn2.classList.add('actv');
      btn3.classList.remove('actv');
      btn4.classList.remove('actv');
      btn5.classList.remove('actv');
    };
     btn3.onclick = function () {
      slide.style.transform = "translateX(-200%)";
      btn1.classList.remove('actv');
      btn2.classList.remove('actv');
      btn3.classList.add('actv');
      btn4.classList.remove('actv');
      btn5.classList.remove('actv');
    };
     btn4.onclick = function () {
      slide.style.transform = "translateX(-300%)";
      btn1.classList.remove('actv');
      btn2.classList.remove('actv');
      btn3.classList.remove('actv');
      btn4.classList.add('actv');
      btn5.classList.remove('actv');
    };
     btn5.onclick = function () {
      slide.style.transform = "translateX(-400%)";
      btn1.classList.remove('actv');
      btn2.classList.remove('actv');
      btn3.classList.remove('actv');
      btn4.classList.remove('actv');
      btn5.classList.add('actv');
    };
    

//Cookie consent pop-up
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);