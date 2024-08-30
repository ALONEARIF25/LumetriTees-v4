// File: loadjs.js
// Tips array
const tips = [
  "wait... things are getting ready",
  "newest in town",
  "look over discounts"
  // Add more tips as needed
];

const tipText = document.getElementById('tipText');
const tipBox = document.getElementById('tipBox');
let tipIndex = 0;

function changeTip() {
  tipBox.style.opacity = 0;
  setTimeout(() => {
    tipText.textContent = tips[tipIndex];
    tipBox.style.opacity = 1;
    tipIndex = (tipIndex + 1) % tips.length;
    setTimeout(changeTip, 4000); // Change the tip after 4 seconds
  }, 500); // Delay for the fade effect
}

// Start the tip cycling
changeTip();

// Function to hide the loading screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';
}

// Attach the hideLoadingScreen function to the window.onload event
window.onload = hideLoadingScreen;
