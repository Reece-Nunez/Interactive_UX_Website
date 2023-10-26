document.getElementById("activityReviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const packageName = document.getElementById("packageName").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("reviewText").value;

    //alert the review
    alert(`Thank you for reviewing the "${packageName}" package! You rated it ${rating} stars and said: "${reviewText}"`);

    // After review submission, you can clear the form or redirect the user to another page.
    event.target.reset();
});
