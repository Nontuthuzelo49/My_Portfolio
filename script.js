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
"configurations": [{
        "name": "Launch Edge",
        "request": "launch",
        "type": "msedge",
        "url": "http://localhost:5501",
        "webRoot": "${workspaceFolder}"
    },

    {
        "type": "msedge",
        "request": "launch",
        "name": "Open index.html",
        "file": "c:\\Users\\User\\portfolio\\My_Portfolio\\index.html"
        "file": "c:\\Users\\User\\portfolio\\My_Portfolio\\index.html"