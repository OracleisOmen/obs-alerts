const followerText = document.getElementById('follower-text');
const newFollowerName = "NewFollower123"; // Replace with dynamic data from your service

// Generate a random string of characters
function randomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to scramble and unscramble text
function scrambleText(element, originalText, scrambleDuration, visibleDuration) {
    let scrambleInterval = setInterval(() => {
        element.textContent = randomString(originalText.length);
    }, 100);

    // After initial scramble duration, show original text
    setTimeout(() => {
        clearInterval(scrambleInterval);
        element.textContent = originalText;
    }, scrambleDuration);

    // After visible duration, scramble text again before flying out
    setTimeout(() => {
        scrambleInterval = setInterval(() => {
            element.textContent = randomString(originalText.length);
        }, 100);
    }, scrambleDuration + visibleDuration);

    // Stop scrambling and start fly-out animation
    setTimeout(() => {
        clearInterval(scrambleInterval);
        element.style.animation = `flyOut 3s forwards`;
    }, scrambleDuration + visibleDuration + scrambleDuration); // Adjust as needed for re-scramble duration
}

// Start the process
window.addEventListener('DOMContentLoaded', (event) => {
    followerText.style.opacity = 1; // Make text visible
    scrambleText(followerText, `New Follower: ${newFollowerName}`, 3000, 3000);
});