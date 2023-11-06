/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageArea = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;

        if (email !== '') {
            const emailMessage = `Thank you! Your email address '${email}' has been added to our mailing list!`;
            messageArea.textContent = emailMessage;
        } else {
            const errorMessage = 'Please enter a valid email address.';
            messageArea.textContent = errorMessage;
        }
    });
});
