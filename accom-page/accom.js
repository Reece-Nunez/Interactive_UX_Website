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

const sortSelect = document.getElementById('sort');
const sortableList = document.getElementById('sortable-list');

sortSelect.addEventListener('change', function () {
    const selectedOption = sortSelect.value;

    const listItems = Array.from(sortableList.children);

    if (selectedOption === 'ascending') {
        listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
    } else if (selectedOption === 'descending') {
        listItems.sort((a, b) => b.textContent.localeCompare(a.textContent));
    }

    // Clear the existing list
    while (sortableList.firstChild) {
        sortableList.removeChild(sortableList.firstChild);
    }

    // Append the sorted items back to the list
    listItems.forEach((item) => {
        sortableList.appendChild(item);
    });
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
    const container = document.querySelector('.image-title');
  
    if (isInViewport(container) && !hasStarted) {
      hasStarted = true; // Set to true so the animation doesn't repeat
  
      let findText = "Find The";
      let perfectText = " Perfect Room";
  
      let textContainer = document.querySelector('.image-title');
  
      textContainer.innerHTML = ""; // Empty the container first
  
      let index1 = 0;
      let index2 = 0;
  
      function typeFind() {
        if (index1 < findText.length) {
          textContainer.innerHTML += findText[index1];
          index1++;
          setTimeout(typeFind, 400); // 400 milliseconds between each letter
        } else {
          setTimeout(typePerfect, 1000); // Wait a second before starting the next text
        }
      }
  
      function typePerfect() {
        if (index2 < perfectText.length) {
          textContainer.innerHTML += perfectText[index2];
          index2++;
          setTimeout(typePerfect, 200); // 200 milliseconds between each letter
        }
      }
  
      textContainer.style.visibility = "visible";
      typeFind(); // Start typing "Find The"
    }
  });
  
