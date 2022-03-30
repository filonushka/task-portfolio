const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active')
    })
}

// if (navMenu) {(burgerMenu.classList.contains('active'), function(e){
//     document.body.classList.remove('lock');
//     burgerMenu.classList.remove('active');
//     navMenu.classList.remove('active')
// }
// )}
