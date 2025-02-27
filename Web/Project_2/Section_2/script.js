// Get all open dialog buttons
const openButtons = document.querySelectorAll(".open-dialog");
// Get all close dialog buttons
const closeButtons = document.querySelectorAll(".close-dialog");

// Add click event listeners to open buttons
openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const dialog = document.getElementById(targetId);
        if (dialog) {
            dialog.showModal();
        }
    });
});

// Add click event listeners to close buttons
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const dialog = document.getElementById(targetId);
        if (dialog) {
            dialog.close();
        }
    });
});