document.addEventListener("DOMContentLoaded", function() {
    const bookingBtn = document.querySelector(".btn-booking button");

    bookingBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action (e.g. following the link)

        const locationValue = document.querySelector("#location1").value;
        const durationValue = document.querySelector("#duration1").value;
        const groupSizeValue = document.querySelector("#group-size").value;
        const monthValue = document.querySelector("#month").value;
        const startTimeValue = document.querySelector("#time").value;

        let alertMessage = "Your booking is confirmed with the following details:\n";
        alertMessage += `Location: ${locationValue || "Not Specified"}\n`;
        alertMessage += `Duration: ${durationValue || "Not Specified"} Hours\n`;
        alertMessage += `Group Size: ${groupSizeValue || "Not Specified"}\n`;
        alertMessage += `Month: ${monthValue || "Not Specified"}\n`;
        alertMessage += `Start Time: ${startTimeValue || "Not Specified"}\n`;

        alert(alertMessage);
    });
});
