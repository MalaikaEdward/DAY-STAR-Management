document.addEventListener('DOMContentLoaded', function() {
    const childrenForm = document.getElementById('children-form');
    const staffForm = document.getElementById('staff-form');
    const securityForm = document.getElementById('security-form');

    childrenForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm(childrenForm);
    });

    staffForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm(staffForm);
    });

    securityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm(securityForm);
    });

    function submitForm(form) {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data); // You can send this data to your server for further processing
        form.reset();
    }
});
