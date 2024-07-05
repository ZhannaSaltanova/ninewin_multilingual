
document.getElementById('toggleButton').addEventListener('click', function() {
    let burgerMenu = document.querySelector('.burgermenu');
    let menu = document.querySelector('.menu');

    burgerMenu.classList.toggle('open');

    if (window.innerWidth >= 1280) {
        if (window.getComputedStyle(menu).display === "none") {
            menu.style.display = "flex";
            burgerMenu.classList.remove('open'); 
        } else {
            menu.style.display = "none";
            burgerMenu.classList.add('open'); 
        }
    } else {
        if (window.getComputedStyle(menu).display === "flex") {
            burgerMenu.classList.remove('open');
        }
        menu.style.display = "none";
    }
});

window.addEventListener('resize', function() {
    let menu = document.querySelector('.menu');
    let burgerMenu = document.querySelector('.burgermenu');

    if (window.innerWidth < 1280) {
        menu.style.display = "none";
    } else {
        burgerMenu.classList.remove('open');
        menu.style.display = "flex";
    }
});
