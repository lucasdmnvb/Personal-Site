document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Check for saved user preference, else use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
});