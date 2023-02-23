import './scss/styles.scss'
var nav = document.querySelector('.navbar'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 300) { // Just an example
        nav.classList.add('bg-dark');
        nav.classList.add('navbar-dark');
       nav.classList.remove('sticky-top');
       nav.classList.add("animated");
       nav.classList.add('pt-lg-4');
       

    } else {
        nav.classList.remove('bg-dark');
        nav.classList.remove('navbar-dark');
       nav.classList.add('navbar-light');
       nav.classList.add('sticky-top');
       nav.classList.add("animated");
       nav.classList.remove('pt-lg-4');

    }
});