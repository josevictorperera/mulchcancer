// Auto-update copyright year in the footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});

// Function to dynamically load header and footer content
function loadIncludes() {
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);

    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
}

// Call function to load includes
loadIncludes();

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Social Share Buttons Enhancement (Opens in New Tab)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.parentElement.setAttribute("target", "_blank");
    icon.parentElement.setAttribute("rel", "noopener noreferrer");
});

// Toggle Visibility for "Get Involved" Section (Example)
document.getElementById("toggle-info")?.addEventListener("click", function () {
    const infoSection = document.getElementById("info-section");
    infoSection.style.display = (infoSection.style.display === "none") ? "block" : "none";
});

