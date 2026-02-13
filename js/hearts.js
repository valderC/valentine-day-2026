/**
 * Floating Hearts Background
 * Generates continuous floating heart emojis in the background
 */

(function() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    /**
     * Creates a single floating heart element
     */
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');

        // Random heart emoji
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';

        // Random size variation
        const size = 20 + Math.random() * 30; // 20px to 50px
        heart.style.fontSize = size + 'px';

        // Random animation duration (4s to 8s)
        const duration = 4 + Math.random() * 4;
        heart.style.animationDuration = duration + 's';

        // Random delay
        const delay = Math.random() * 2;
        heart.style.animationDelay = delay + 's';

        // Add to container
        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }

    /**
     * Initialize continuous heart generation
     */
    function startHeartAnimation() {
        // Create initial batch of hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 500);
        }

        // Continue creating hearts at intervals
        setInterval(() => {
            createHeart();
        }, 300);
    }

    // Start when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHeartAnimation);
    } else {
        startHeartAnimation();
    }
})();
