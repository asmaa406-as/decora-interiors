// ================== FAQ Functionality ==================
document.addEventListener('DOMContentLoaded', () => {
    
    const faqButtons = document.querySelectorAll('.fac_question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isActive = button.classList.contains('active');

            // Close all answers first
            document.querySelectorAll('.fac_answer').forEach(ans => {
                ans.style.maxHeight = null;
            });

            // Remove active class from all buttons
            faqButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // If not active, open this one
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                button.classList.add('active');
            }
        });
    });

    console.log('FAQ functionality loaded');
});