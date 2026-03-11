const cards = document.querySelectorAll(".card")

function mostrarCards(){

const trigger = window.innerHeight * 0.85

cards.forEach(card => {

const top = card.getBoundingClientRect().top

if(top < trigger){

card.style.opacity = "1"
card.style.transform = "translateY(0)"

}

})

}

cards.forEach(card=>{
card.style.opacity="0"
card.style.transform="translateY(40px)"
card.style.transition="0.6s"
})

window.addEventListener("scroll",mostrarCards)



// Menu hamburguesa

const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

burger.onclick = () => {

menu.classList.toggle("active")

}