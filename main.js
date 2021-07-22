var directionData = {
  direction: 'east',
  xCoordinate: 0,
  yCoordinate: 0,
  started: false
};

var $raceCar = document.querySelector('img');
var $body = document.querySelector('body');
var xAxis = 0;
var start;

$body.addEventListener('keydown', turnCar);

function startCar() {
  xAxis = xAxis + 10;
  directionData.xCoordinate = xAxis;
  $raceCar.style.left = xAxis + 'px';
  directionData.started = true;
}

function stopCar() {
  directionData.started = false;
  clearInterval(start);
}

function turnCar(event) {
  if (event.keyCode === 40) {
    $raceCar.setAttribute('class', 'turn-down');
    directionData.direction = 'south';
  } else if (event.keyCode === 38) {
    $raceCar.setAttribute('class', 'turn-up');
    directionData.direction = 'north';
  } else if (event.keyCode === 37) {
    $raceCar.setAttribute('class', 'turn-left');
    directionData.direction = 'west';
  } else if (event.keyCode === 39) {
    $raceCar.setAttribute('class', 'turn-right');
    directionData.direction = 'east';
  } else if (event.keyCode === 32 && directionData.started === false) {
    start = setInterval(startCar, 16);
    startCar();
  } else if (event.keyCode === 32 && directionData.started === true) {
    stopCar();
  }
}
