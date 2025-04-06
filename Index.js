function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close sidebar when clicked outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('hamburger');
    
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// close the sidebar when a menu item is clicked
const menuLinks = document.querySelectorAll('.sidebar ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
    });
});
