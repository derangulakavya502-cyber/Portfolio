
// Welcome message in browser console
console.log("Welcome to Kavya's Portfolio!");

// Smooth navigation for menu links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        console.log("Navigating to: " + this.textContent);
    });
});

// Project card animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = "0.3s ease";
    });
});

// Current year in footer
const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Kavya Derangula. All Rights Reserved.`;
}
