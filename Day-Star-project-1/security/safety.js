document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('security-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        const formData = new FormData(form);

        // Convert form data to JSON
        const formDataJSON = {};
        formData.forEach((value, key) => {
            formDataJSON[key] = value;
        });

        // Store form data in local storage
        const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
        submissions.push(formDataJSON);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));

        // Optionally, you can clear the form after submission
        form.reset();

        // Optionally, display a success message to the user
        alert('Form submitted successfully!');
    });
});