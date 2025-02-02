let hours = new Date().getHours();
let greeting = document.getElementById('greetings');

if (hours >= 6 && hours < 12) {
    greeting.innerHTML = "Good morning!";
} else if (hours >= 12 && hours < 16) {
    greeting.innerHTML = "Good afternoon!";
} else if (hours >= 16 && hours < 20) {
    greeting.innerHTML = "Good evening!";
} else {
    greeting.innerHTML = "Hey There!";
}

let menuIcon = document.getElementById('menu__icon');
let navbar = document.querySelector('.header__nav');
let navItems = document.querySelectorAll('.header__nav-links a');

navItems.forEach(e=>{e.addEventListener('click',()=>{
    menuReset();
})})

const menuReset = ()=>{
    navbar.style.left = "-100%"
}


menuIcon.addEventListener('click',()=>{
    if(navbar.style.left== "0%"){
        navbar.style.left="-100%"
    }else{
        navbar.style.left="0%" 
    }
})

