document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.project-card');
    const extraCards = document.querySelectorAll('.project-card.extra');
    const noResults = document.getElementById('noResults');
    const seeMoreBtn = document.getElementById('seeMoreBtn');

    let allVisible = false;

    // Search
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase().trim();
        let hasMatch = false;

        cards.forEach(card => {
            const text = card.getAttribute('data-search') || '';
            if (text.toLowerCase().includes(term)) {
                card.style.display = 'block';
                hasMatch = true;
            } else {
                card.style.display = 'none';
            }
        });

        noResults.style.display = hasMatch ? 'none' : 'block';
    });

    // See More Button
    seeMoreBtn.addEventListener('click', () => {
        if (!allVisible) {
            extraCards.forEach(card => card.style.display = 'block');
            seeMoreBtn.textContent = 'Show Less';
            allVisible = true;
        } else {
            extraCards.forEach(card => card.style.display = 'none');
            seeMoreBtn.textContent = 'See More Projects';
            allVisible = false;
        }
    });
});