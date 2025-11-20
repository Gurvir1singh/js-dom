let grid = document.querySelector(".grid");
let i = 0;
while (i < 5000) {
  let box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);
  i++;
}

let box = document.querySelectorAll(".box");
box.forEach(function (elem) {
  let c1 = Math.random() * 256;
  let c2 = Math.random() * 256;
  let c3 = Math.random() * 256;
  elem.addEventListener("mouseenter", function (val) {
    elem.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    console.log("hello");
  });
});
console.log(box);
