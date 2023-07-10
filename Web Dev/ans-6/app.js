// Get the modal and close button elements
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const openModalBtn = document.getElementById("openModalBtn");
const overlay = document.getElementById("overlay");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling of the background window
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = ""; // Allow scrolling of the background window
}

// Event listeners to open and close the modal
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close the modal when the 'Esc' key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
