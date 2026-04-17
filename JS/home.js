document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page loaded');

});
// FAQ Functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fac_question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isActive = button.classList.contains('active');

            // Close all
            document.querySelectorAll('.fac_answer').forEach(a => a.style.maxHeight = null);
            document.querySelectorAll('.fac_question').forEach(q => q.classList.remove('active'));

            // Open current
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                button.classList.add('active');
            }
        });
    });
});