let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let cardContainer = document.querySelector(".card-container");

form.addEventListener("submit", function (el) {
  el.preventDefault();
  let arr = [];
  inputs.forEach((inp) => {
    if (inp.type !== "submit") {
      arr.push([inp.value]);
    }
  });

  let card = document.createElement("div");
  card.classList.add("card");

  let picture = document.createElement("div");
  picture.classList.add("picture");

  card.appendChild(picture);
  console.log(card);

  let img = document.createElement("img")
  img.setAttribute("src", arr[0]);
  picture.appendChild(img);

  let Uname = document.createElement("h2");
  Uname.innerHTML = arr[1];
  card.appendChild(Uname);

  let h4 = document.createElement("h4");
  h4.innerHTML = arr[2];
  card.appendChild(h4);

  let h5 = document.createElement("h5");
  h5.innerHTML = arr[3];
  card.appendChild(h5);

  cardContainer.appendChild(card);
});
