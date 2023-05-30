function showDescription(exerciseNumber) {
    var description = document.getElementById('description' + exerciseNumber);
    var displayValue = window.getComputedStyle(description).getPropertyValue('display');
  
    if (displayValue === 'none') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  }
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");
  var millisecondsElement = document.getElementById("milliseconds");
  
  var startButton = document.getElementById("startButton");
  var stopButton = document.getElementById("stopButton");
  var resetButton = document.getElementById("resetButton");
  
  var timerInterval;
  
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var milliseconds = 0;
  
  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 10); // Mettre à jour toutes les 10 millisecondes
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimerDisplay();
  }
  
  function updateTimer() {
    milliseconds += 10;
  
    if (milliseconds === 1000) {
      seconds++;
      milliseconds = 0;
    }
  
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  
    updateTimerDisplay();
  }
  
  function updateTimerDisplay() {
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  