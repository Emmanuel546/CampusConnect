document.addEventListener("DOMContentLoaded", function() {
    // Back Button Navigation
    document.querySelector(".back-buttton a").addEventListener("click", function(event) {
        event.preventDefault();
        window.history.back(); // Go back to the previous page
    });

    // Logout Confirmation
    document.querySelector(".Settings-content-items a").addEventListener("click", function(event) {
        event.preventDefault();
        let confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            alert("You have logged out.");
            window.location.href = "login.html"; // Redirect to login page
        }
    });

    // Click Event for Future Settings Options
    document.querySelectorAll(".Settings-content-item a").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            alert("This feature is coming soon!");
        });
    });
});

// 1️⃣ Highlight Active Navigation Item
let navItems = document.querySelectorAll(".nav-item a");                        
let currentPage = window.location.pathname.split("/").pop();
navItems.forEach(item => {
    if (item.getAttribute("href") === currentPage) {
        item.style.fontWeight = "bold";
        item.style.color = "blue";
        item.querySelector("i").style.transform = "scale(1.1)";
    }
});
