const button = document.querySelector("#button");

function clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector("#clock-time").textContent = timeString;
}

clock();

setInterval(clock, 1000);

button.addEventListener("click", () => {
  button.innerText = (button.innerText === "Click me!") ? "Clicked!" : "Click me!";
});
