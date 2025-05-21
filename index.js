const formatBtn = document.getElementById("format-btn");
const themeBtn = document.getElementById("theme-btn");

function clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector("#clock-time").textContent = timeString;
  return timeString;
}

function updateDate() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  document.querySelector("#clock-date").textContent = dateString;
  return dateString;
}

// Initialize date and time
updateDate();
clock();
setInterval(clock, 1000);

// Button event listeners
formatBtn.addEventListener("click", () => {
  formatBtn.innerText = (formatBtn.innerText === "12/24") ? "Clicked!" : "12/24";
  // TODO: Toggle the time between 12 hour and 24 hour format
});

themeBtn.addEventListener("click", () => {
  themeBtn.innerText = (themeBtn.innerText === "color change") ? "changed!" : "color change";
  // TODO: Add theme change functionality
});
