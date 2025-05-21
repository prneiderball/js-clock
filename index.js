const currentTime = clock();
setInterval(clock, 1000);

function clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector("#clock").innerHTML = timeString;
  return now;
}