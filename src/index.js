import './scss/styles.scss'
import img from './img/work-1.png'
import img2 from './img/work-2.png'
import img3 from './img/work-3.png'
import img4 from './img/work-4.png'
import img5 from './img/work-5.png'
import img6 from './img/work-6.png'
var arr=[img,img2,img3,img4,img5,img6];
console.log(arr)

var nav = document.querySelector('.navbar'); // Identify target
var navLinks = document.querySelectorAll('.nav-link'); // Identify all links


navLinks.forEach(function(elem) {
    elem.addEventListener("click", function() {
       var navf= document.getElementById('navbarNav');
       navf.classList.remove('show');

       

        console.log(navf);
    });
});
window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 300) { // Just an example
        nav.classList.remove('navbar-light');
       nav.classList.remove('sticky-top');
       nav.classList.add("animated");
       nav.classList.add('pt-lg-4');
       nav.classList.add('navbar-dark');
       for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "white";
    }
       

    } else {
        
        nav.classList.remove('bg-transparent');
        nav.classList.remove('navbar-dark');
       nav.classList.add('navbar-light');
       nav.classList.add('sticky-top');
       nav.classList.add("animated");
       nav.classList.remove('pt-lg-4');
       for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "black";
    }

    }
});

var portImg= document.querySelectorAll('.height-portfolio');
for (var i = 0; i < portImg.length; i++) { 
    portImg[i].style.backgroundImage = 'url('+String( arr[i])+')';
    portImg[i].style.backgroundSize = 'contain';
    portImg[i].style.backgroundPosition = 'center';
    portImg[i].style.backgroundRepeat = 'no-repeat';
    


}
