// Handle form submission
$('#adminRegisterForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
      fullName: $('#fullName').val(),
      email: $('#email').val(),
      password: $('#password').val(),
      confirmPassword: $('#confirmPassword').val()
    };

    // Client-side validation (you may need more robust validation)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // AJAX request to submit the form data
    $.ajax({
      type: 'POST',
      url: '/admin/register', // Adjust the URL as needed
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function(response) {
        // Handle success response
        alert('Registration successful!');
        // Optionally, redirect to another page
        window.location.href = '/admin/dashboard'; // Adjust the URL as needed
      },
      error: function(xhr, status, error) {
        // Handle error response
        alert('Registration failed. Please try again later.');
        console.error(error);
      }
    });
  });
