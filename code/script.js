// Close menu when a link is clicked
const menuLinks = document.querySelectorAll('.menu-link');
const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false; // Uncheck the menu toggle, which closes the menu
    });
});
