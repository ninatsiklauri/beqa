const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');
    //toggle nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
    //animate link
    navLink.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2 }s`;

    })
}

navSlide()