document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Hide preloader and show main content after 3 seconds
        const preloader = document.getElementById('preloader');
        const mainContent = document.querySelector('.home');

        preloader.style.display = 'none'; // Hide preloader
        mainContent.style.visibility = 'visible'; // Show main content
    }, 1000);
});
