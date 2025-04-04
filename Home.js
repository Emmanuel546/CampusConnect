document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Highlight Active Navigation Item
    let navItems = document.querySelectorAll(".nav-item a");
    let currentPage = window.location.pathname.split("/").pop();

    navItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.style.fontWeight = "bold";
            item.style.color = "blue";
            item.querySelector("i").style.transform = "scale(1.3)";
        }
    });

    // 2️⃣ Enable Horizontal Scrolling for Stories
    let storyContainer = document.querySelector(".containerstory");
    if (storyContainer) {
        storyContainer.style.overflowX = "auto";
        storyContainer.style.display = "flex";
        storyContainer.style.gap = "10px";
        storyContainer.style.padding = "10px";
    }

    // 3️⃣ Like Button Animation
    document.querySelectorAll(".fa-heart").forEach(heart => {
        heart.addEventListener("click", function () {
            this.classList.toggle("liked");
        });
    });

    // 4️⃣ Show/Hide Caption Toggle
    document.querySelectorAll(".Caption").forEach(caption => {
        let toggleBtn = document.createElement("button");
        toggleBtn.innerText = "Hide Caption";
        toggleBtn.style.display = "block";
        toggleBtn.style.margin = "10px 0";

        caption.before(toggleBtn);

        toggleBtn.addEventListener("click", function () {
            caption.style.display = (caption.style.display === "none") ? "block" : "none";
        });
    });

    // Add CSS for animations
    let style = document.createElement('style');
    style.innerHTML = `
        .liked {
            color: red;
            transform: scale(1.3);
            transition: all 0.2s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});
