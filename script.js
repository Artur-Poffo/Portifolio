const nav = document.querySelector('.navbar')
let contador = 1

// CARROSEL DE IMAGENS - SECTION PROJETOS

setInterval(function() {
    document.querySelector('#radio' + contador).checked = true
    contador ++
    
    if(contador > 4) {
        contador = 1
    }

}, 3000)

// FIM CARROSEL

// NAVBAR ANIMAÇÃO:

window.addEventListener("scroll", () => {
    if(window.scrollY >=3) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

// FIM NAVBAR ANIMAÇÃO

//MENU-MOBILE

let menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    //OPEN MENU
    document.getElementsByClassName('mobile-list')[0].classList.toggle('open')

    //MUDAR .BAR    
    menu.classList.toggle('change')

})

