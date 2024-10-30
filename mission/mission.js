const themeSelector = document.querySelector('#theme-selector');
const bodyElement = document.body;
const logoElement = document.querySelector('.logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        bodyElement.classList.add('dark');
        logoElement.src = "byui-logo_white.png";
    } else {
        bodyElement.classList.remove('dark');
        logoElement.src = "byui-logo_blue.webp";
    }
}

// Add event listener to theme selector dropdown
themeSelector.addEventListener('change', changeTheme);

// Initialize theme to light on page load
if (themeSelector.value === "light") changeTheme();
