function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validate input fields (optional)
    if (!firstName || !lastName || !email || !phoneNumber) {
        alert('Please fill in all fields.');
        return;
    }

    // Determine user type based on email
    const userType = email.includes('seller') ? 'seller' : 'buyer';

    // Save user data to localStorage
    const userData = { firstName, lastName, email, phoneNumber, userType };
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to home page
    window.location.href = 'home1 .html';
}
