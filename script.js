let button = document.querySelector("button");
let main = document.querySelector("main");
let h1
button.addEventListener("click", function () {
  h1 = document.createElement("h1");
  h1.innerHTML= "we are grow bro"
let top = Math.random() * 100;
let left = Math.random() * 100;
let rotate = Math.random() * 360;
  h1.style.fontSize = '80px';
  h1.style.position = 'absolute';
  h1.style.top = `calc(${top}%)`
  h1.style.left = `${left}%`
  h1.style.transform = `rotate(${rotate}deg)`
  h1.style.zIndex = `-1`
  main.appendChild(h1);
  console.log("hello");
  
});
