// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var menuIcon = document.querySelector(".mobile-nav a.menu-icon");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.textContent = "☰"; // Restore hamburger icon
    } else {
        menu.style.display = "block";
        menuIcon.textContent = "✕"; // Show close icon
    }
}

// Add window resize listener to ensure responsive layout works properly
window.addEventListener("resize", function() {
    var menu = document.getElementById("menu-links");
    var menuIcon = document.querySelector(".mobile-nav a.menu-icon");
    
    if (window.innerWidth >= 630) {
        // Hide mobile menu in tablet and desktop viewports
        menu.style.display = "none";
        menuIcon.textContent = "☰";
    }
});

// Initialize after page load completes
document.addEventListener("DOMContentLoaded", function() {
    // Ensure mobile menu initial state is correct
    var menu = document.getElementById("menu-links");
    if (menu) {
        menu.style.display = "none";
    }
});
