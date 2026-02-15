// 1. Select the toggle input
const toggle = document.querySelector('#theme-toggle');

// 2. Function to switch theme
toggle.addEventListener('change', () => {
    // This line adds or removes 'dark-theme' from the <body>
    document.body.classList.toggle('dark-theme');
    
    // 3. Save choice to LocalStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        localStorage.setItem('portfolio-theme', 'light');
    }
});

// 4. On Page Load: Check for saved preference
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.checked = true; // Make sure the switch looks "On"
}
// script.js ফাইলে এটি লিখুন
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log("Menu clicked!"); 
        });
    } else {
        console.error("Error: .menu-icon বা .nav-links খুঁজে পাওয়া যায়নি।");
    }
});