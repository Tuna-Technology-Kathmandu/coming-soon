document.addEventListener("DOMContentLoaded", () => {
  const notifyButton = document.querySelector(".btn");
  const modal = document.getElementById("notifyModal");
  const closeModal = document.querySelector(".close");

  // Open modal
  notifyButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form submission
  const notifyForm = document.getElementById("notifyForm");
  notifyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Thank you for subscribing! Email: ${email}`);
    modal.style.display = "none";
    notifyForm.reset();
  });
});
