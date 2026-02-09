// Navbar Transition on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.style.padding = '20px 0';
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
    }
});

// Smooth Scrolling for all internal links (Backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const toggler = document.querySelector('.navbar-toggler');
            const collapse = document.querySelector('.navbar-collapse');
            if (window.getComputedStyle(toggler).display !== 'none' && collapse.classList.contains('show')) {
                toggler.click();
            }
        }
    });
});
