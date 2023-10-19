// Get the navbar element
const navbar = document.querySelector('.nav-bar');

// Function to toggle the "scrolled" class based on scroll position
function toggleNavbar() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add the scroll event listener
window.addEventListener('scroll', toggleNavbar);

//faq function
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.clickable');
    let currentOpen = null; // Variable to keep track of the currently open answer

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            // Close the currently open answer if there is one
            if (currentOpen && currentOpen !== answer) {
                currentOpen.style.display = 'none';
            }

            // Toggle the clicked answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }

            // Update the currently open answer
            currentOpen = (answer.style.display === 'block') ? answer : null;
        });
    });
});

