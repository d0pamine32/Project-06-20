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
    // Get container dimensions
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    
    // Get button dimensions
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate new random position within the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move the button to the new position
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
