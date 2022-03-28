const burgerMenu = document.querySelector('.burger');
if (burgerMenu) {
    const navMenu = document.querySelector('.nav');
    burgerMenu.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active')
    })
}