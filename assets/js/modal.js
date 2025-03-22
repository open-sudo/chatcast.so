// Get modal trigger buttons and close buttons
const openModalButtons = document.querySelectorAll(".openModalButton");
const closeModalButtons = document.querySelectorAll(".closeModalButton");
let lastFocusedButton = null;

// Function to open the modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable background scrolling
  modal.querySelector(".modal__content").focus(); // Set focus to modal content
}

function moveFocus() {
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
  console.log(lastFocusedButton);
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background scrolling
  moveFocus();
}

// Open modal event delegation
openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    lastFocusedButton = e.target;
    const modalId = e.target.getAttribute("data-modal");
    openModal(modalId);
  });
});

// Close modal event delegation
closeModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });
});

// Close modal when clicking on backdrop
document.querySelectorAll(".modal__backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });
});

// Close modal on pressing ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const visibleModal = document.querySelector('.modal[aria-hidden="false"]');
    if (visibleModal) {
      closeModal(visibleModal);
    }
  }
});
