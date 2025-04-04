window.onload = function() {
    // Get the current page name
    const currentPage = window.location.pathname.split("/").pop();
    
    // Check if the current page is the user profile page
    if (currentPage === "Userprofile.html") {
        const userProfileNavItem = document.getElementById("user-profile");
        userProfileNavItem.classList.add("active"); // Highlight this nav item
    }
};

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