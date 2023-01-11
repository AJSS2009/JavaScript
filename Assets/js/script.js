var precio = 400000;
// INPUTS
var cantidadInput = document.querySelector("input[type='number']");
var colorInput = document.querySelector("input[type='text']");
// TOTALES
var precioFinal = document.querySelector(".valor-total");
var cantidadFinal = document.querySelector(".cantidad-total");
var colorFinal = document.querySelector(".color div");

// FUNCIONES
function calcularTotal() {
  var cantidad = cantidadInput.value;
  var color = colorInput.value;
  precioFinal.innerHTML = (precio*cantidad).toLocaleString();
  cantidadFinal.innerHTML = cantidad;
  colorFinal.style.backgroundColor = color;
}
