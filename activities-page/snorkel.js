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



// credit card number validation
document.addEventListener("DOMContentLoaded", function() {
    const creditNumber = document.getElementById("card-number");

    creditNumber.addEventListener('input', function(event) {
        
        const input = event.target.value.replace(/\D/g, '');

        let maskedValue = '*'.repeat(Math.max(0, input.length));

        if (input.length >= 16) {
            maskedValue += input.substring(input.length);
        } else {
            maskedValue = input;
        }

        creditNumber.value = maskedValue;

    });
});

// security code validation
document.addEventListener("DOMContentLoaded", function() {
    const securityCode = document.getElementById("security-code");

    securityCode.addEventListener('input', function(event) {
        const input = event.target.value.replace(/\D/g, '');

        let maskedValue = '*'.repeat(Math.max(input.length));

        if (input.length >= 3) {
            maskedValue += input.substring(input.length);
        } else {
            maskedValue = input;
        }

        securityCode.value = maskedValue;

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const expDate = document.getElementById("expiration-date");

    expDate.addEventListener('input', function(event) {

        let input = event.target.value;

        input = input.replace(/\D/g, '/');

        if (input.length >= 2) {
            input = input.substring(0, 5);
        }

        event.target.value=input;
    });
});

//price calculation

document.addEventListener("DOMContentLoaded", function() {
    const durationSelect = document.getElementById("duration1");
    const groupSelect = document.getElementById("group-size");
    const priceLabel = document.getElementById("price-label");
    const totalPriceLabel = document.getElementById("total-price-label");

    let durationPrice = 0;

    // Initial hide the price sections
    document.querySelector(".price").style.display = "none";
    document.getElementById("total-price").style.display = "none";

    durationSelect.addEventListener("change", function() {
        const selectedValue = parseInt(durationSelect.value);

        if (selectedValue !== "") {
            document.querySelector(".price").style.display = "block";

            const ratePerHour = 10;
            durationPrice = selectedValue * ratePerHour;

            priceLabel.textContent = `$${durationPrice}.00`;

            if (groupSelect.value !== "") {
                const totalPrice = groupSelect.value * durationPrice;
                totalPriceLabel.textContent = `$${total-price}.00`;
            }
        } else {
            document.querySelector(".price").style.display = "none";
        }
    });

    groupSelect.addEventListener("change", function() {
        const selectedValue = parseInt(groupSelect.value);

        if (selectedValue !== "" && durationPrice !== 0) {
            document.getElementById("total-price").style.display = "block";

            const totalPrice = selectedValue * durationPrice;
            totalPriceLabel.textContent = `$${totalPrice}.00`;
        } else {
            document.getElementById("total-price").style.display = "none";
        }
    
    console.log(`Selected Group Value: ${selectedValue}`);
    console.log(`Duration Price: ${durationPrice}`);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bookingBtn = document.querySelector(".btn-booking button");

    bookingBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action (e.g. following the link)

        const locationValue = document.querySelector("#location1").value;
        const activityValue = document.querySelector("#activity1").value;
        const durationValue = document.querySelector("#duration1").value;
        const groupSizeValue = document.querySelector("#group-size").value;
        const monthValue = document.querySelector("#month").value;
        const startTimeValue = document.querySelector("#time")?.value;
        const fullNameValue = document.querySelector("#name-on-card").value;
        const totalPrice = document.querySelector("#total-price-label").textContent;

        if (locationValue === "" || durationValue === "" || groupSizeValue === "" || monthValue === "" || startTimeValue === "") {
            alert("Please fill in all fields");
        } else {

            let alertMessage = `${fullNameValue} Your booking is confirmed with the following details:\n`;
            alertMessage += `Location: ${locationValue || "Not Specified"}\n`;
            alertMessage += `Activity: ${activityValue || "Not Specified"}\n`;
            alertMessage += `Duration: ${durationValue || "Not Specified"} Hours\n`;
            alertMessage += `Group Size: ${groupSizeValue || "Not Specified"}\n`;
            alertMessage += `Month: ${monthValue || "Not Specified"}\n`;
            alertMessage += `Start Time: ${startTimeValue || "Not Specified"}\n`;
            alertMessage += `Card Charged: ${totalPrice}`;

            alert(alertMessage);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const selectedDay = document.querySelectorAll(".calendar-item");

    selectedDay.forEach(function(element) {
        element.addEventListener('click', function() {
            
            this.style.backgroundColor = "black";
            this.style.color = "white";
        });

    });
});
