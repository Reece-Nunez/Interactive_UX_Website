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
