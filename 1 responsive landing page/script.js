// JavaScript to add interactivity

// Change navbar background on scroll

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.5)';
    }
});
