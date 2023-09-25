import images from '../images/goblin.png';

document.addEventListener('DOMContentLoaded', () => game());

function game() {
  const holes = document.querySelectorAll('.hole');
  const img = document.createElement('img');
  img.src = images;
  getHole();
  setInterval(getHole, 3000);

  function getHole() {
    const index = Math.floor(Math.random() * holes.length);
    if (holes[index].childElementCount) {
      getHole();
    }
    img.remove();
    holes[index].appendChild(img);
  }
}
