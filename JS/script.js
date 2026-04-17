document.addEventListener('DOMContentLoaded', () => {
    console.log('%cDecora Interiors loaded successfully', 'color:#C47C5B; font-weight:bold');

    // Smooth scroll for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});