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

function openModal(text) {
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function searchFlights() {
    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;
    const departureDate = document.getElementById("departureDate").value;
    const returnDate = document.getElementById("returnDate").value;

    if(!departure || !arrival || !departureDate || !returnDate) {
        alert("All fields are required.");
        return;
    }

    // Further logic for flight search
    openModal(`Searching flights from ${departure} to ${arrival} from ${departureDate} to ${returnDate}`);
}