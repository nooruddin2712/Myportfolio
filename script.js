// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Smooth scroll for navigation links
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        }
    });
}

// Day/Night theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
function setTheme(night) {
    if (night) {
        body.classList.add('night');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('night');
        themeToggle.textContent = '🌙';
    }
}
// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'night');
themeToggle.addEventListener('click', () => {
    const isNight = !body.classList.contains('night');
    setTheme(isNight);
    localStorage.setItem('theme', isNight ? 'night' : 'day');
});
