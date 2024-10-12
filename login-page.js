document.getElementById('toggle-password').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        // Show password
        passwordField.type = 'text';
    } else {
        // Hide password
        passwordField.type = 'password';
    }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect or perform other actions upon successful login
        window.location.href = 'flashcard.html';

    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
