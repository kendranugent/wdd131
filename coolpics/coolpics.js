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

// Open modal on image click
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", openModal);
});

// Hide the modal when the window is resized beyond 1000px
function handleResize() {
    const viewer = document.querySelector(".viewer");
    if (window.innerWidth > 1000) {
        viewer.classList.remove("show");
    }
}

window.addEventListener("resize", handleResize);

// Initialize the modal state on page load
handleResize();
