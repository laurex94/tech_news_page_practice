document.querySelector('.menu-btn').addEventListener('click', function () {

        document.querySelector('.nav-menu').classList.toggle('show');

    });

    ScrollReveal().reveal('.showcase');
    ScrollReveal().reveal('.news-cards', {delay: 400});
    ScrollReveal().reveal('.card-banner-one', {delay: 400});
    ScrollReveal().reveal('.card-banner-two', {delay: 400});