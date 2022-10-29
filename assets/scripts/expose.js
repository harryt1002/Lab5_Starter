// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const airHorn = document.querySelector('air-horn');
  airHorn.addEventListener('click', (event) => {
    const imgAH = new Image();
    imgAH.src = 'Lab5_Starter/assets/images/air-horn.svg'
    // imgAH.addEventListener('load', () => {

    // }, false);
  });
}