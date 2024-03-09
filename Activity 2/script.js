const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        // Here you can do something with the form data like sending it to a server
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    }
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // Name validation
    if (!name.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Phone validation
    if (!phone.value.trim()) {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhoneNumber(phone.value.trim())) {
        phoneError.textContent = 'Phone number must be 11 digits';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    // Message validation
    if (!message.value.trim()) {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
}
