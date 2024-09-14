// Set the wedding date (replace with your date)
const weddingDate = new Date('Aug 20, 2025').getTime();

// Function to calculate remaining days
function calculateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Calculate remaining days
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    // Update the HTML
    document.querySelector('.delivery-date').textContent = `Estimated Delivery Date: ${daysLeft} Days Left`;
}

// Run the countdown immediately
calculateCountdown();

// Optionally, update the countdown every day
setInterval(calculateCountdown, 1000 * 60 * 60 * 24); // Every 24 hours
