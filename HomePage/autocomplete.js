document.addEventListener('DOMContentLoaded', function() {
    // Scroll buttons functionality
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const scrollAmount = 300; // Adjust as needed

    leftBtn.addEventListener('click', function() {
        cardsWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        cardsWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Show/hide description on hover
    const cards = document.querySelectorAll('.card'); // Assuming card class
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            showDescription(card);
        });
        card.addEventListener('mouseleave', function() {
            hideDescription(card);
        });
    });

    function showDescription(card) {
        const description = card.querySelector('.card-description');
        const image = card.querySelector('img');
        image.style.display = 'none';
        description.style.display = 'block';
    }

    function hideDescription(card) {
        const description = card.querySelector('.card-description');
        const image = card.querySelector('img');
        image.style.display = 'block';
        description.style.display = 'none';
    }

    // Navbar toggle functionality
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbg = document.querySelector('.nav-bg');
    
    menuIcon?.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        navbg.classList.toggle('active');
    });
});
