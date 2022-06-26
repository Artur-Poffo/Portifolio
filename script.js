const nav = document.querySelector(".navbar");
let menu = document.getElementById("menu");

// NAVBAR ANIMAÇÃO:

window.addEventListener("scroll", () => {
  if (window.scrollY >= 3) {
    nav.classList.add("scrolled");
    menu.style.background = "#272727";
  } else {
    nav.classList.remove("scrolled");
    menu.style.background = "transparent";
  }
});

// FIM NAVBAR ANIMAÇÃO

//MENU-MOBILE

menu.addEventListener("click", () => {
  //OPEN MENU
  document.getElementsByClassName("mobile-list")[0].classList.toggle("open");

  //MUDAR .BAR
  menu.classList.toggle("change");
});

//FIM MENU MOBILE

//CARDS PROJECT

let cards = document.getElementsByClassName("cards-project")[0];
let cardinfo = document.getElementsByClassName("infocardscont")[0];

cards.onmouseenter = () => {
    cardinfo.classList.add('hideinfo')
}

cards.onmouseleave = () => {
    cardinfo.classList.remove('hideinfo')
}
