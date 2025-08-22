const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const initialDuration = (16 * 3600) + (29 * 60) + 27;
const endTime = Date.now() + initialDuration * 1000;

function updateCountdown() {
  const now = Date.now();
  const remainingTime = Math.max(0, endTime - now);

  if (remainingTime === 0) {
    clearInterval(interval);
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    return;
  }

  const remainingSeconds = Math.floor(remainingTime / 1000);
  const days = Math.floor(remainingSeconds / (3600 * 24));
  const hours = Math.floor((remainingSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);