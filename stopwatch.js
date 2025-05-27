/* Final JS for Stopwatch functionality */
let stopwatchInterval;
let elapsedSeconds = 0;

function formatStopwatchTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateStopwatchDisplay() {
  const display = document.getElementById("stopwatch");
  if (display) {
    display.textContent = formatStopwatchTime(elapsedSeconds);
  }
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      elapsedSeconds++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  elapsedSeconds = 0;
  updateStopwatchDisplay();
}

// Initialize display
updateStopwatchDisplay();
