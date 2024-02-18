let x_position = document.querySelector(".x_position");
let y_position = document.querySelector(".y_position");
window.addEventListener("mousemove", e => {
  let x = e.clientX;
  let y = e.clientY;
  x_position.innerText = x;
  y_position.innerText = y;
});
