document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) { // Check if the target element exists
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ensures the element scrolls to the top
            });
        }
    });
});
