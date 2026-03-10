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

/* LEETCODE COUNTER */

let count = 0;
let target = 400;

function updateCounter(){

if(count <= target){

document.getElementById("leetcode-count").innerText = count;
count++;

setTimeout(updateCounter,5);

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