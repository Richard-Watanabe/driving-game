var directionData = {
  direction: 'east',
  xCoordinate: 0,
  yCoordinate: 0,
  started: false
};
var $raceCar = document.querySelector('img');
var $body = document.querySelector('body');
var xAxis = 0;
var yAxis = 0;
var start;
var down;
var left;
var up;

$body.addEventListener('keydown', turnCar);

function moveCar() {
  if (directionData.direction === 'east') {
    xAxis = xAxis + 10;
    directionData.xCoordinate = xAxis;
    $raceCar.style.left = xAxis + 'px';
    directionData.started = true;
  } else if (directionData.direction === 'south') {
    yAxis = yAxis + 10;
    directionData.yCoordinate = yAxis;
    $raceCar.style.top = yAxis + 'px';
    directionData.started = true;
  } else if (directionData.direction === 'north') {
    yAxis = yAxis - 10;
    directionData.yCoordinate = yAxis;
    $raceCar.style.top = yAxis + 'px';
    directionData.started = true;
  } else if (directionData.direction === 'west') {
    xAxis = xAxis - 10;
    directionData.xCoordinate = xAxis;
    $raceCar.style.left = xAxis + 'px';
    directionData.started = true;
  }
}

function stopCar() {
  directionData.started = false;
  clearInterval(start);
  clearInterval(down);
  clearInterval(left);
  clearInterval(up);
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
    if (directionData.direction === 'east') {
      start = setInterval(moveCar, 16);
      moveCar();
    } else if (directionData.direction === 'south') {
      down = setInterval(moveCar, 16);
      moveCar();
    } else if (directionData.direction === 'north') {
      up = setInterval(moveCar, 16);
      moveCar();
    } else if (directionData.direction === 'west') {
      left = setInterval(moveCar, 16);
      moveCar();
    }
  } else if (event.keyCode === 32 && directionData.started === true) {
    stopCar();
  }
}
