'user strict'

// SCRIPT FOR MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}
}
//SCRIPT FOR SLIDING BANNER AREA

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        const offset = button.dataset.bannerBtn === "next" ? 1 : -1
        const slides = button.closest("[data-banner]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true 
        delete activeSlide.dataset.active
    })
})