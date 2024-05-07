document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can perform validation here if needed

    // Dummy credentials for demonstration
    var validUsername = "parent";
    var validPassword = "password";

    // Check if username and password are correct
    if (username === validUsername && password === validPassword) {
        // If correct, redirect to dashboard or perform any action
        window.location.href = "dashboard.html";
    } else {
        // If incorrect, display error message
        document.getElementById("error").innerText = "Invalid username or password.";
    }
});
  