const nav = document.querySelector('.navbar')

window.addEventListener("scroll", () => {
    if(window.scrollY >=3) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})
