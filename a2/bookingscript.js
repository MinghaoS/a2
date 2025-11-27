// Form Validation Functions
function validateForm() {
    const form = document.getElementById('bookingForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (value === '') {
        showError(field, 'This field is required');
        return false;
    }

    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field, 'Please enter a valid email address');
            return false;
        }
    }

    // Phone validation
    if (field.name === 'phone') {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(value)) {
            showError(field, 'Please enter a valid phone number');
            return false;
        }
    }

    clearError(field);
    return true;
}

function showError(field, message) {
    field.classList.add('error');
    const errorSpan = field.parentNode.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.remove('hidden');
    }
}

function clearError(field) {
    field.classList.remove('error');
    const errorSpan = field.parentNode.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.classList.add('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Submit form or show success message
                alert('Appointment booked successfully!');
                bookingForm.reset();
            }
        });
    }
});
