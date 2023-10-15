
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

window.addEventListener('load', function() {
    const headerImage = document.querySelector('.explore-header-image');
    headerImage.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', function() {
    let text = "Explore Taniti";
    let container = document.querySelector('.explore-header-card-content');
    container.innerHTML = ""; // Clear the existing text
    
    let index = 0;
    function type() {
        if (index < text.length) {
            container.innerHTML += text[index];
            index++;
            setTimeout(type, 100); // adjust timing here
        }
    }
    type(); // Start typing
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
    const container = document.querySelector('.local-transportation-container');
    
    if (isInViewport(container) && !hasStarted) {
      hasStarted = true; // Set to true so the animation doesn't repeat
      
      let localText = "Local";
      let transpoText = "Transportation";
      
      let localContainer = document.querySelector('.local');
      let transpoContainer = document.querySelector('.transpo');
      
      localContainer.innerHTML = "";
      transpoContainer.innerHTML = "";
      
      let index1 = 0;
      let index2 = 0;
  
      function typeLocal() {
        if (index1 < localText.length) {
          localContainer.innerHTML += localText[index1];
          index1++;
          setTimeout(typeLocal, 400); // 400 milliseconds between each letter
        }
      }
      
      function typeTranspo() {
        if (index2 < transpoText.length) {
          transpoContainer.innerHTML += transpoText[index2];
          index2++;
          setTimeout(typeTranspo, 200); // 200 milliseconds between each letter
        }
      }

      localContainer.style.visibility = "visible";
      transpoContainer.style.visibility = "visible";

      typeLocal(); // Start typing "Local"
      typeTranspo(typeTranspo, 1000); // Start typing "Transportation"
    }
  });
  
