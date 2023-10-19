window.onload = function() {
    document.getElementById("messageForm").addEventListener("submit", function(event){
        event.preventDefault();
        alert("Thank you for contacting us.");
    });
};
