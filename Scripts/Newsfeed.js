 // Highlight Active Navigation Item
 let navItems = document.querySelectorAll(".nav-item a");
 let currentPage = window.location.pathname.split("/").pop();

 navItems.forEach(item => {
     if (item.getAttribute("href") === currentPage) {
         item.style.fontWeight = "bold";
         item.style.color = "blue";
         item.querySelector("i").style.transform = "scale(1.5)";
     }
 });