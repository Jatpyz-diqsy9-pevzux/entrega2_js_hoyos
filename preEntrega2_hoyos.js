// Capturar entrada del usuario
const precioBase = parseFloat(prompt("Ingrese el precio del producto:"));

// Declarar variables y objetos necesarios
let descuento = 0;
let precioFinal = 0;

// Array de descuentos
const descuentos = [
  { rango: 100, porcentaje: 15 }, // Descuento del 15% si el precio es mayor a 100
  { rango: 50, porcentaje: 5 },   // Descuento del 5% si el precio es mayor a 50
  { rango: 0, porcentaje: 0 }     // Sin descuento para precios menores o iguales a 50
];

// Función para calcular el descuento
function calcularDescuento(precio) {
  for (let i = 0; i < descuentos.length; i++) {
    if (precio > descuentos[i].rango) {
      descuento = precio * (descuentos[i].porcentaje / 100);
      break;
    }
  }
}

// Función para calcular el precio final
function calcularPrecioFinal(precio, descuento) {
  precioFinal = precio - descuento;
}

// Procesamiento esencial del simulador
calcularDescuento(precioBase);
calcularPrecioFinal(precioBase, descuento);

// Notificación de resultado
alert("El precio base del producto es: " + precioBase.toFixed(2) + " pesos.\n" +
      "El descuento aplicado es: " + descuento.toFixed(2) + " pesos.\n" +
      "El precio final es: " + precioFinal.toFixed(2) + " pesos.");
