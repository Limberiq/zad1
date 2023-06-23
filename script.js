let variable = 1;

let myDiv = document.getElementById("myDiv");

console.log(typeof variable);

if(variable === "text"){
  myDiv.textContent = "text";
}else{
  myDiv.textContent = "not text";
}