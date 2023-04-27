"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
/////////////////////////////////////////////
const header = document.querySelector(".header");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'we use cookie to improve user experience. <button class="btn btn-close-cookie">Got it!</button>';
header.prepend(message);
header.append(message);
// header.before(message)

const deleteCookie = document.querySelector(".btn-close-cookie");
deleteCookie.addEventListener("click", function () {
  message.remove();
});
// styles
message.style.backgroundColor = "#37383d";
message.style.width = "104%";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('Link');
    const id = this.getAttribute('href')
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  })
})*/

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tab component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  //guard clause
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((tabs) =>
    tabs.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");

  // active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
/*
const h1 = document.querySelector('h1')
const alert1 = function(e) {
  alert('addEventListener: Great! You have just actived the event')
}
h1.addEventListener('mouseenter', alert1);
setTimeout(() => h1.removeEventListener('mouseenter', alert1), 5000);

const randomInt = (min, max) => Math.floor(Math.random() * (max-min + 1) + min);
const randomColor  = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();

  e.stopPropagation()
})
document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
})
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
})*/
