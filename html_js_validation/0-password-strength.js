// password-validation.js

// Function to validate the password based on the criteria
function validatePassword() {
    // Get the password input element
    const passwordInput = document.getElementById("password");
    
    // Get the error message element
    const errorElement = document.getElementById("error");
    
    // Regular expressions for validation
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;
    
    // Get the entered password value
    const password = passwordInput.value;
    
    // Initialize an array to store error messages
    const errors = [];
    
    // Check if the password is at least 8 characters long
    if (password.length < minLength) {
        errors.push("Password must be at least 8 characters long.");
    }
    
    // Check for uppercase letter
    if (!uppercaseRegex.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    
    // Check for lowercase letter
    if (!lowercaseRegex.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    
    // Check for numeric digit
    if (!digitRegex.test(password)) {
        errors.push("Password must contain at least one numeric digit.");
    }
    
    // Check for special character
    if (!specialCharRegex.test(password)) {
        errors.push("Password must contain at least one special character (e.g., !@#$%^&*).");
    }
    
    // Display the error messages, or allow form submission
    if (errors.length > 0) {
        errorElement.textContent = errors.join(" ");
        return false; // Prevent form submission
    } else {
        errorElement.textContent = ""; // Clear error message
        return true; // Allow form submission
    }
}

// Add event listener to the form to trigger validation on submit
const passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
