document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Additional validation such as email format check can be added here

    // If all validation passes, you can submit the form or perform further actions
    alert('Registration successful');
    // You can submit the form using AJAX or redirect the user to another page
});
