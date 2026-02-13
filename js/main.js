/**
 * Main Interactive Features
 * Handles button interactions, confetti, and success message
 */

(function() {
    // DOM Elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const successMessage = document.getElementById('successMessage');
    const confettiContainer = document.getElementById('confetti-container');

    /**
     * Generates confetti explosion
     */
    function createConfetti() {
        const colors = ['#e63946', '#ff006e', '#ffb3c6', '#ffc8dd', '#cdb4db', '#a2d2ff'];
        const confettiCount = 150;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');

                // Random color
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                // Random horizontal position
                confetti.style.left = Math.random() * 100 + '%';

                // Random size
                const size = 5 + Math.random() * 10;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';

                // Random animation duration
                const duration = 2 + Math.random() * 2;
                confetti.style.animationDuration = duration + 's';

                // Random delay
                const delay = Math.random() * 0.5;
                confetti.style.animationDelay = delay + 's';

                // Add to container
                confettiContainer.appendChild(confetti);

                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, (duration + delay) * 1000);
            }, i * 10);
        }
    }

    /**
     * Handles "Yes" button click
     */
    function handleYesClick() {
        // Hide buttons
        buttonsContainer.style.display = 'none';

        // Show success message
        successMessage.classList.remove('hidden');

        // Trigger confetti
        createConfetti();

        // Optional: Add multiple confetti bursts
        setTimeout(() => createConfetti(), 500);
        setTimeout(() => createConfetti(), 1000);
    }

    /**
     * Handles "No" button hover/touch - makes it run away
     */
    function handleNoButtonEscape() {
        const container = buttonsContainer.getBoundingClientRect();
        const button = noBtn.getBoundingClientRect();

        // Calculate available space
        const maxX = window.innerWidth - button.width - 40;
        const maxY = window.innerHeight - button.height - 40;

        // Generate random position
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        // Ensure it's not too close to current position
        const currentX = button.left;
        const currentY = button.top;
        const minDistance = 100;

        while (Math.abs(newX - currentX) < minDistance && Math.abs(newY - currentY) < minDistance) {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;
        }

        // Apply new position
        noBtn.style.position = 'fixed';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    }

    /**
     * Initialize event listeners
     */
    function init() {
        // Yes button click
        yesBtn.addEventListener('click', handleYesClick);

        // No button escape behavior
        noBtn.addEventListener('mouseenter', handleNoButtonEscape);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleNoButtonEscape();
        });

        // Keyboard accessibility for Yes button
        yesBtn.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleYesClick();
            }
        });

        // Focus management
        yesBtn.focus();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
