const h1 = document.querySelector('h1');
let seconds = 0;
let running = false;
let intervalId = null;

function startStopwatch() {
  running = true;
  intervalId = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    h1.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopStopwatch() {
  running = false;
  clearInterval(intervalId);
}

function resetStopwatch() {
  running = false;
  seconds = 0;
  h1.textContent = '00:00:00';
  clearInterval(intervalId);
}

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
