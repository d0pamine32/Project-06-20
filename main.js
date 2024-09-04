function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('customPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('customPopup').style.display = 'none';
    document.getElementById('confirmationPopup').style.display = 'none';
}

function showConfirmation() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('confirmationPopup').style.display = 'block';
}

function showCustomPopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
    document.getElementById('customPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'none';
}

function moveButton(button) {
      // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get button dimensions
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate new random position within the viewport
    const maxX = viewportWidth - buttonRect.width;
    const maxY = viewportHeight - buttonRect.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the button to the new position
    button.style.position = 'absolute'; // Ensure the button's position is set to absolute
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Add event listeners to both buttons
document.getElementById('noButton').addEventListener('mousedown', function(e) {
    e.preventDefault(); // Prevent default action
    moveButton(this);
});

document.getElementById('yesButton').addEventListener('mousedown', function(e) {
    e.preventDefault(); // Prevent default action
    moveButton(this);
});
