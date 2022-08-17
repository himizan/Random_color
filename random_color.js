function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r,g,b];
}

function changeColor(event) {
  console.log(event)
  let [r,g,b] =randomRgbColor();
  let color =`rgb(${r},${g},${b})`
  document.getElementById('context').style.background = color;
  document.getElementById('text').innerHTML = color;
  document.getElementById('text').style.color = color;
  document.getElementById('coordinate').innerHTML = event.offsetX + ', ' + event.offsetY;
}

function clickHandler(event) {

  event.preventDefault();
  changeColor(event);

}

document.getElementById('context').addEventListener('click', (event)=>clickHandler(event));

changeColor();