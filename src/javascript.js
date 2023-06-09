// ------ Stopwatch ----- //
let stopwatchMins = 0;
let stopwatchSecs = 0;
let stopwatchTens = 0;
let stopwatchInterval;

const stopwatchTimer = document.querySelector(".stopwatch-timer");
const stopwatchStartBtn = document.querySelector(".stopwatch-container .btn-start");
const stopwatchStopBtn = document.querySelector(".stopwatch-container .btn-stop");
const stopwatchResetBtn = document.querySelector(".stopwatch-container .btn-reset");

function startStopwatch() {
	clearInterval(stopwatchInterval);
	stopwatchInterval = setInterval(() => {
		stopwatchTens++;
		if (stopwatchTens === 100) {
			stopwatchSecs++;
			stopwatchTens = 0;
		}
		if (stopwatchSecs === 60) {
			stopwatchMins++;
			stopwatchSecs = 0;
		}
		stopwatchTimer.innerHTML = `${stopwatchMins
			.toString()
			.padStart(2, "0")}:${stopwatchSecs
			.toString()
			.padStart(2, "0")}:${stopwatchTens.toString().padStart(2, "0")}`;
	}, 10);
}

stopwatchStartBtn.addEventListener("click", () => { startStopwatch(); });

stopwatchStopBtn.addEventListener("click", () => { clearInterval(stopwatchInterval); });

stopwatchResetBtn.addEventListener("click", () => {
	clearInterval(stopwatchInterval);
	stopwatchMins = 0;
	stopwatchSecs = 0;
	stopwatchTens = 0;
	stopwatchTimer.innerHTML = `00:00:00`;
});


// ----- Timer ----- //
let timerMins = 0;
let timerSecs = 0;
let timerTens = 0;
let timerInterval;

const timerTimer = document.querySelector(".timer-timer");
const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");
const timerStartBtn = document.querySelector(".timer-container .btn-start");
const timerStopBtn = document.querySelector(".timer-container .btn-stop");
const timerResetBtn = document.querySelector(".timer-container .btn-reset");

function startTimer() {
	clearInterval(timerInterval);
	timerMins = parseInt(timerMinutes.value);
	timerSecs = parseInt(timerSeconds.value);
	timerInterval = setInterval(() => {
		timerTens--;
		if (timerTens < 0) {
			timerSecs--;
			timerTens = 99;
		}
		if (timerSecs < 0) {
			timerMins--;
			timerSecs = 59;
		}
		if (timerMins < 0) {
			clearInterval(timerInterval);
			timerTimer.innerHTML = `00:00:00`;
			return;
		}
		timerTimer.innerHTML = `${timerMins.toString().padStart(2, "0")}:${timerSecs
			.toString()
			.padStart(2, "0")}:${timerTens.toString().padStart(2, "0")}`;
	}, 10);
}

timerStartBtn.addEventListener("click", () => { startTimer(); });

timerStopBtn.addEventListener("click", () => { clearInterval(timerInterval); });

timerResetBtn.addEventListener("click", () => {
	clearInterval(timerInterval);
	timerMinutes.value = "";
	timerSeconds.value = "";
	timerTimer.innerHTML = `00:00:00`;
});
