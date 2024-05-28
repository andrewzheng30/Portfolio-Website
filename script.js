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
