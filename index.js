const formatBtn = document.getElementById("format-btn");
const themeBtn = document.getElementById("theme-btn");

function clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector("#clock-time").textContent = timeString;
}

clock();

setInterval(clock, 1000);

formatBtn.addEventListener("click", () => {
  formatBtn.innerText = (formatBtn.innerText === "12/24") ? "Clicked!" : "12/24";
  // TODO: Toggle the time between 12 hour and 24 hour format
});

themeBtn.addEventListener("click", () => {
  themeBtn.innerText = (themeBtn.innerText === "color change") ? "changed!" : "color change";
  // TODO: Toggle the time between 12 hour and 24 hour format
});
