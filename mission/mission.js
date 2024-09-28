const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    
    const bodyElement = document.body;
    const logoElement = document.querySelector('.logo');

    if (selectedTheme === "dark") {
        bodyElement.classList.add('dark');
        logoElement.src = "byui-logo_white.png";
    } else {
        bodyElement.classList.remove('dark');
        logoElement.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);