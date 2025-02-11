// Countdown Timer
function countdown() {
    const eventDate = new Date("March 28, 2025 09:00:00").getTime();
    const timer = setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Event Started!";
        }
    }, 1000);
}
countdown();
