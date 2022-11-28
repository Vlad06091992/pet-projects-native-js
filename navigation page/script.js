let burgerMenu = document.querySelector(".burgerMenu")
let overlayMenu = document.querySelector(".overlayMenu")
let overlayMenuItems = overlayMenu.querySelectorAll("li")
let links = overlayMenu.querySelectorAll('li')

var flag = true

links.forEach(el => {
    el.addEventListener('click', () => {
        burgerMenu.classList.remove("active")
        hideMenu()
        showOverlayMenu()

    })
})

burgerMenu.addEventListener("click", () => {
    if (flag) {
        if (!burgerMenu.classList.contains("active")) {
            showMenu()
        } else {
            hideMenu()
        }
        showOverlayMenu()
    }

})

function showMenu() {
    burgerMenu.classList.add("active")
    for (let i = 0; i < overlayMenuItems.length; i++) {
        overlayMenuItems[i].classList.replace(`slide-out-${i}`, `slide-in-${i}`)
    }

}

function hideMenu() {
    burgerMenu.classList.remove("active")
    for (let i = 0; i < overlayMenuItems.length; i++) {
        overlayMenuItems[i].classList.replace(`slide-in-${i}`, `slide-out-${i}`)
    }

}

function showOverlayMenu() {
    burgerMenu.classList.contains("active") ? 
        overlayMenu.classList.add("showedOverlayMenu")
        : overlayMenu.classList.remove("showedOverlayMenu")
}


