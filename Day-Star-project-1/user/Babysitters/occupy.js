document.getElementById("sittersForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can handle form submission with JavaScript here
    // For example, you can collect form data and send it to a server using AJAX
    // Or perform any other necessary actions
    // For this example, I'll just log the form data to the console
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
    // Clear the form after submission (optional)
    this.reset();
});