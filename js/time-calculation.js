const targetDate = new Date("2025-02-01T00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const currentDate = new Date().getTime(); // Get the current date and time
  const remainingTime = targetDate - currentDate; // Calculate remaining time

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the HTML with the remaining time
  document.querySelector(".day span").textContent = days;
  document.querySelector(".hour span").textContent = hours;
  document.querySelector(".minute span").textContent = minutes;
  document.querySelector(".second span").textContent = seconds;

  // If the countdown is finished, display a message
  if (remainingTime <= 0) {
    clearInterval(countdownInterval); // Stop the countdown
    document.querySelector(".counter").innerHTML = "The wait is over!";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call updateCountdown() immediately to avoid delay
updateCountdown();
