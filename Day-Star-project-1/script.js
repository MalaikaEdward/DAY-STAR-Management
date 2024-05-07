// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the button by its ID
    var getStartedButton = document.getElementById('getStartedButton');

    // Add a click event listener to the button
    getStartedButton.addEventListener('click', function() {
        // Redirect the user to the next page
        window.location.href = 'next-page.html'; // Change 'next-page.html' to the actual path of your next page
    });
});
