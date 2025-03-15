const video = document.getElementById("webcam");
const resultText = document.getElementById("result");
const darkModeToggle = document.getElementById("darkModeToggle");

// Start webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => console.error("Error accessing webcam:", err));

// Capture Frame (For Now, Just Displays "Captured!")
function captureFrame() {
    resultText.innerText = "Captured! (Prediction not implemented yet)";
}

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
