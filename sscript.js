// --- Local Storage ---
const colorPicker = document.getElementById('colorPicker');
const saveColorButton = document.getElementById('saveColorButton');
const savedColorDisplay = document.getElementById('savedColor');

// Function to store color preference in localStorage
function storeColorPreference(color) {
    localStorage.setItem('preferredColor', color);
}

// Function to retrieve color preference from localStorage
function getStoredColorPreference() {
    return localStorage.getItem('preferredColor');
}

// Load any saved color preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedColor = getStoredColorPreference();
    if (storedColor) {
        savedColorDisplay.style.backgroundColor = storedColor;
        savedColorDisplay.textContent = storedColor;
        colorPicker.value = storedColor; // Set the color picker to the saved color
    }
});

// Save the color when the button is clicked
saveColorButton.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    storeColorPreference(selectedColor);
    savedColorDisplay.style.backgroundColor = selectedColor;
    savedColorDisplay.textContent = selectedColor;
});

// --- Triggering Animation ---
const animatedBox = document.getElementById('animatedBox');
const startAnimationButton = document.getElementById('startAnimationButton');

// Function to add the animation class
function startPulseAnimation() {
    animatedBox.classList.add('animate');
}

// Event listener to trigger the animation on button click
startAnimationButton.addEventListener('click', startPulseAnimation);