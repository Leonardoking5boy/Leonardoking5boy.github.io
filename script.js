document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would typically make an API call to validate the credentials
        // For this example, we'll just check if both fields are filled
        if (email && password) {
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';

            // Simulate redirecting to a dashboard page
            setTimeout(() => {
                alert('Redirecting to dashboard...');
                // In a real application, you would redirect to another page here
                // window.location.href = 'dashboard.html';
            }, 2000);
        } else {
            messageDiv.textContent = 'Please enter both email and password.';
            messageDiv.style.color = 'red';
        }
    });
});
