let dec = document.querySelector("#decrease")
let inc = document.querySelector("#increase")
let value = document.querySelector(".value")

let rval = Number(value.textContent)

inc.addEventListener('click', function(){

  rval++
  console.log(rval);
    
  value.innerHTML = rval;
})
dec.addEventListener('click', function(){
 rval--
  console.log(rval);
  value.innerHTML = rval;
})


