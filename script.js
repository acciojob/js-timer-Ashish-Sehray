// write js code here if required
function updateTimer() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the timer string
    const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    // Update the HTML
    document.getElementById('timer').innerHTML = timerString;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);