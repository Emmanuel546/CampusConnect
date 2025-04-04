document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        let name = document.getElementById("name").value.trim();
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validation checks
        if (!name || !username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Simulate successful signup (Replace this with actual backend logic)
        alert("Signup successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    });
});
