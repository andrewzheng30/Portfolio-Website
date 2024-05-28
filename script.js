document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to My Portfolio! Enjoy your visit.');

    // Example function to toggle dark mode
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }
});

// Add a button in HTML to make use of this, for example:
// <button id="theme-toggle">Toggle Dark Theme</button>

// Style for Dark Theme
// .dark-theme {
//     background-color: #333;
//     color: #fff;
// }
