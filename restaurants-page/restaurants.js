// Get the navbar element
const navbar = document.querySelector('.nav-bar');

// Function to toggle the "scrolled" class based on scroll position
function toggleNavbar() {
    if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleNavbar);

// gallery JS
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = document.querySelectorAll('.carousel-images div');

let currentIndex = 2;  // starts with the main/large image

function adjustImageSizes() {
    images.forEach((img, index) => {
        img.classList.remove('img-large', 'img-medium', 'img-small');
        if (index === currentIndex) {
            img.classList.add('img-large');
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            img.classList.add('img-medium');
        } else {
            img.classList.add('img-small');
        }
    });
}

leftArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        adjustImageSizes();
    }
});

rightArrow.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        adjustImageSizes();
    }
});

// Initial adjustment
adjustImageSizes();

