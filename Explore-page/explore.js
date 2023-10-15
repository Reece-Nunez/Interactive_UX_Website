
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

// Add the scroll event listener
window.addEventListener('scroll', toggleNavbar);
