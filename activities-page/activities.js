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

document.addEventListener('DOMContentLoaded', function() {
    const titleContainer = document.querySelector('.activities-title');
    const titleText = "Activities";
    let index = 0;

    function typeTitle() {
        if (index < titleText.length) {
            const letter = titleText[index];
            const letterElement = document.createElement('span');
            letterElement.textContent = letter;
            titleContainer.appendChild(letterElement);
            index++;
            setTimeout(typeTitle, 150); // Adjust timing as needed
        }
    }

    typeTitle(); // Start typing animation when the page loads
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let hasStarted = false; // Variable to ensure the animation runs only once

window.addEventListener('scroll', function() {
    const container = document.querySelector('.natural-adventures-title');

    if (isInViewport(container) && !hasStarted) {
        hasStarted = true; // Set to true so the animation doesn't repeat

        let naturalText = "Natural";
        let adventuresText = "Adventures";

        let naturalContainer = document.querySelector('.natural');
        let adventuresContainer = document.querySelector('.adventures');

        naturalContainer.textContent = ""; // Clear existing text
        adventuresContainer.textContent = ""; // Clear existing text

        let index1 = 0;
        let index2 = 0;

        function typeNatural() {
            if (index1 < naturalText.length) {
                naturalContainer.textContent += naturalText[index1];
                index1++;
                setTimeout(typeNatural, 400); // 400 milliseconds between each letter
            }
        }

        function typeAdventure() {
            if (index2 < adventuresText.length) {
                adventuresContainer.textContent += adventuresText[index2];
                index2++;
                setTimeout(typeAdventure, 200); // 200 milliseconds between each letter
            }
        }

        naturalContainer.style.visibility = "visible";
        adventuresContainer.style.visibility = "visible";

        typeNatural(); // Start typing "Natural"
        setTimeout(typeAdventure, 1000); // Start typing "Adventures" after a delay
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    const title = document.querySelector('.city-life-title');
    const discover = document.querySelector('.discover');
    const cityLife = document.querySelector('.city-life');

    if (isInViewport(title)) {
        discover.style.opacity = '1';
        discover.style.transform = 'translateY(0)';
        cityLife.style.opacity = '1';
        cityLife.style.transform = 'translateY(0)';
    }
});


