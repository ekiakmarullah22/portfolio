//MENU TOGGLER
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

//SHOW THE MENU
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

//HIDE THE MENU
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

//REMOVE ACTIVE CLASS BY MENU
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//SCROLL MENU TO ACTIVE LINK
const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset
    
    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop    = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight) {
            document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.add('active');
        }else {
            document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.remove('active');
        }
    })
}

// get year
let year = document.querySelector('#year');
let d = new Date();
year.innerHTML = d.getFullYear();
