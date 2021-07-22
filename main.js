var directionData = {
  direction: 'east'
};

var $raceCar = document.querySelector('img');
var $body = document.querySelector('body');

$body.addEventListener('keydown', turnCar);

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
  }
}
