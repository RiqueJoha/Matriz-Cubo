
setInterval(() => {
    document.querySelectorAll(".casilla").forEach(casilla => {
    casilla.style.backgroundColor=`rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
});
}, 1000);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function alerta() {
    alert ("hola")
  }