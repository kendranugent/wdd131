// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.querySelector("#nav-links");
    menu.classList.toggle("hide");
}

// Add an event listener to the menu button
document.querySelector("#menu-button").addEventListener("click", toggleMenu);

// Ensure the menu is shown or hidden based on window size on page load and resize
function handleResize() {
    const menu = document.querySelector("#nav-links");
    const viewer = document.querySelector(".viewer");

    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show menu for large screens
        viewer.classList.remove("show"); // Hide modal for large screens
    } else {
        menu.classList.add("hide"); // Hide menu for small screens
    }
}

window.addEventListener("resize", handleResize);

// Function to toggle the visibility of the modal
function toggleModal() {
    const viewer = document.querySelector(".viewer");
    viewer.classList.toggle("show");
}

// Function to handle clicking on an image to open it in a modal
function openModal(event) {
    const viewer = document.querySelector(".viewer");
    const img = viewer.querySelector("img");
    img.src = event.target.src;
    viewer.classList.add("show");
}

// Close the modal when the close button is clicked
document.querySelector(".close-viewer").addEventListener("click", toggleModal);

// Open modal on image click (use event delegation)
document.querySelector(".gallery").addEventListener("click", function(event) {
    if (event.target.tagName === 'IMG') {
        openModal(event);
    }
});

// Initialize the modal state on page load
handleResize();
