// const contenedor = document.getElementById("contenedor");
// console.log(typeof contenedor.innerHTML);

// const titulo = document.getElementById("titulo");
// console.log(titulo);

// const toppings = document.getElementsByClassName("topping");
// console.log(toppings[1]);

// const misToppings = document.getElementsByTagName("li");
// console.log(misToppings);

// const toppingFondoMarron = document.getElementsByClassName("fondoMarron");
// console.log(toppingFondoMarron);

// const aceitunas = document.querySelector(".topping.fondoNaranja");
// console.log(typeof aceitunas);

// const aceitunas = document.querySelector(".topping.fondoNaranja");
// console.log(typeof aceitunas);

// const primerTopping = document.querySelector(".topping");
// console.log(primerTopping);

// const primerTopping = document.querySelector(".topping");
// primerTopping.style.backgroundColor = "blue";
// primerTopping.style.color = "#6dff";
// primerTopping.style.textTransform = "uppercase";

// const listaDeToppings = document.getElementById("listaToppings");

// console.log("> innerText");
// console.log(listaDeToppings.innerText);

// console.log("> innerHTML");
// console.log(listaDeToppings.innerHTML);

// console.log("> textContent");
// console.log(listaDeToppings.textContent);

// const titulo = document.getElementById("titulo");
// titulo.innerText = "Mis topping favoritos";

// const enlace = document.getElementsByTagName("a");
// console.log(enlace[0].setAttribute("href", "https://www.freecodecamp.org"));

// const primerTopping = document.querySelector(".topping");

// console.log(primerTopping.classList);

// const listaDeToppings = document.getElementById("listaToppings");

// const toppingNuevo = document.createElement("li");
// toppingNuevo.classList.add("topping", "fondoMarron");
// toppingNuevo.innerText = "Queso Extra";

// listaDeToppings.appendChild(toppingNuevo);

// Ejemplos de Event Handler

// function mostrarClic() {
//   console.log("clic");
// }

//Ejemplo de addEventListener

const toppings = document.getElementsByClassName("topping");

for (const topping of toppings) {
  topping.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}
