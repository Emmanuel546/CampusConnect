document.addEventListener("DOMContentLoaded", function() {
    // Back Button Navigation
    document.querySelector(".back-button a").addEventListener("click", function(event) {
        event.preventDefault();
        window.history.back(); // Navigate back to the previous page
    });

    // Click Event for Notification Items
    document.querySelectorAll(".notification-item").forEach(item => {
        item.addEventListener("click", function() {
            alert("Opening post liked by Kareenne..."); // Simulate opening the post
        });
    });

    // Simulate New Notifications (For Future Dynamic Updates)
    setTimeout(() => {
        let newNotification = document.createElement("div");
        newNotification.classList.add("notification-item");
        newNotification.innerHTML = `
            <img src="ethan-hoover.jpg" alt="Profile Picture">
            <p><b>John Doe</b> commented on your post . 5m</p>
        `;
        document.querySelector(".notification-half").appendChild(newNotification);
    }, 5000); // Simulates receiving a new notification after 5 seconds
});
