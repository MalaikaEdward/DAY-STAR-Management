document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    console.log(data); // You can replace console.log with your desired action, such as sending data to a server
});
