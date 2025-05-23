const formatBtn = document.getElementById("format-btn");
const themeBtn = document.getElementById("theme-btn");

let is24HourFormat = false;

function clock() {
  const now = new Date();
  const options = {
    hour: is24HourFormat ? "2-digit" : "numeric",
    minute: "2-digit",
    hour12: !is24HourFormat,
  };

  const timeString = now.toLocaleTimeString([], options);
  document.querySelector("#clock-time").textContent = timeString;
  return timeString;
}

function updateDate() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  document.querySelector("#clock-date").textContent = dateString;
  return dateString;
}

updateDate();
clock();
setInterval(clock, 1000);

// Button event listeners
formatBtn.addEventListener("click", () => {
   is24HourFormat = !is24HourFormat;
  formatBtn.innerText =
    formatBtn.innerText === "24-hour" ? "12-hour" : "24-hour";
});

themeBtn.addEventListener("click", () => {
  themeBtn.innerText =
    themeBtn.innerText === "color change" ? "changed!" : "color change";
  // TODO: Add theme change functionality
});
