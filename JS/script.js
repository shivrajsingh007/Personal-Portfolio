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