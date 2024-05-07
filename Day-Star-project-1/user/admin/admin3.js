// JavaScript for handling form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var username = document.getElementById('usrname').value;
    var password = document.getElementById('passwordd').value;

    // Perform validation (You can add more validation logic as needed)
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // If validation passes, you can proceed with form submission or any other action
    // For demonstration purposes, let's just log the input values
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form after submission
    document.getElementById('login-form').reset();
});

//JavaScript function to scroll to the top when next arrow button is clicked -->

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
       