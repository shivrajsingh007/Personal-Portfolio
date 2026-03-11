const words = [
"Web Developer",
"Frontend Developer",
"JavaScript Developer",
"Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

document.getElementById("typing").textContent =
currentWord.substring(0,j);

if(!isDeleting){
j++;

if(j > currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

}else{
j--;

if(j === 0){
isDeleting = false;
i++;

if(i === words.length){
i = 0;
}
}

}

setTimeout(type,100);
}

type();


/* INTRO TYPING */

/* INTRO TYPING */

/* INTRO TYPING + LOADER */

const introText = "Welcome to Shivraj's Portfolio";

let introIndex = 0;

function typeIntro(){

if(introIndex < introText.length){

document.getElementById("intro-text").innerHTML += introText.charAt(introIndex);

introIndex++;

setTimeout(typeIntro,50);

}

}

typeIntro();


/* hide intro */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("intro").classList.add("hide");

}, 3200);

});


/* LEETCODE COUNTER */

/* LEETCODE COUNTER */

let counter = document.getElementById("leetcode-counter");

let count = 0;

function updateCounter(){

if(count <= 400){

counter.innerText = count;

count++;

setTimeout(updateCounter,10);

}

}

updateCounter();

/* SCROLL TO TOP BUTTON */

let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {

if (document.documentElement.scrollTop > 300) {
scrollBtn.style.display = "block";
} else {
scrollBtn.style.display = "none";
}

};

scrollBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

/* MOBILE MENU */

let toggle = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

toggle.onclick = function(){

navLinks.classList.toggle("show");

};


/* ACTIVE SECTION HIGHLIGHT */

let sections = document.querySelectorAll("section");
let navLinksAll = document.querySelectorAll("nav ul li a");

window.onscroll = () => {

let top = window.scrollY;

sections.forEach(sec => {

let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute("id");

if(top >= offset && top < offset + height){

navLinksAll.forEach(link=>{
link.classList.remove("active");
document.querySelector("nav a[href*="+id+"]").classList.add("active");
});

}

});

};

/* INFINITE CAROUSEL  MEMORIES SECTION */

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let scrollAmount = 0;
const scrollStep = 370;

/* duplicate images for infinite effect */
track.innerHTML += track.innerHTML;

function moveNext(){
scrollAmount += scrollStep;
track.style.transition = "transform 0.5s ease";
track.style.transform = `translateX(-${scrollAmount}px)`;

if(scrollAmount >= track.scrollWidth/2){
setTimeout(()=>{
track.style.transition="none";
scrollAmount = 0;
track.style.transform = `translateX(0px)`;
},500);
}
}

function movePrev(){

scrollAmount -= scrollStep;

if(scrollAmount < 0){
scrollAmount = track.scrollWidth/2;
track.style.transition="none";
track.style.transform = `translateX(-${scrollAmount}px)`;
}

}

/* CUSTOM CURSOR */

/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

ring.style.left = e.clientX + "px";
ring.style.top = e.clientY + "px";

});

/* OPEN IMAGE FULLSCREEN FROM GALLERY */

/* ================= TERMINAL MEMORIES IMAGE VIEW ================= */
/* OPEN IMAGE FULLSCREEN FROM GALLERY */

/* OPEN IMAGE FULLSCREEN FROM GALLERY */

document.addEventListener("click", function(e){

if(e.target.tagName === "IMG" && e.target.closest(".memory-gallery")){

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.95)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "99999";

const bigImg = document.createElement("img");

bigImg.src = e.target.src;
bigImg.style.maxWidth = "90%";
bigImg.style.maxHeight = "90%";
bigImg.style.borderRadius = "10px";
bigImg.style.boxShadow = "0 0 30px #00ff9f";

overlay.appendChild(bigImg);

overlay.onclick = () => document.body.removeChild(overlay);

document.body.appendChild(overlay);

}

});