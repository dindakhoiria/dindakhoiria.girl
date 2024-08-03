// script.js
// Toggle between dark and light theme
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Toggle the visibility of the menu on mobile
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
});
