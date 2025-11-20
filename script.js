let body = document.querySelector("body");
let box = document.querySelector(".box");

body.addEventListener("mousemove", function (mouse) {
  console.log(mouse.x);
  console.log(mouse.y);

  box.style.top = `${mouse.y -20}px`;
  box.style.left = `${mouse.x}px`;
});
