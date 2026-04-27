import { gestionarCola } from "./transferencia/ejercicio1.js";
import { procesarEntregas } from "./transferencia/ejercicio2.js";
import { validarFormulario } from "./transferencia/ejercicio3.js";
import { procesarPedidoCompleto } from "./transferencia/ejercicio4.js";
import { integrarServicios } from "./transferencia/ejercicio5.js";

// 🔴 EJERCICIO 1
const usuarios = [
  { nombre: "Ana", tiempo: 2000 },
  { nombre: "Luis", tiempo: 1000 },
  { nombre: "Carlos", tiempo: 1500 }
];

gestionarCola(usuarios).then(res => {
  console.log("👥 EJERCICIO 1", res);
});


// 🟠 EJERCICIO 2
const paquetes = [
  { id: 1, tiempo: 3000 },
  { id: 2, tiempo: 1000 },
  { id: 3, tiempo: 2000 }
];

procesarEntregas(paquetes).then(res => {
  console.log("📦 EJERCICIO 2", res);
});

// 🟡 EJERCICIO 3
const usuario = {
  correo: "juan@email.com",
  documento: "12345",
  nombre: "juan"
};

validarFormulario(usuario).then(res => {
  console.log("🧪 EJERCICIO 3", res);
});
  
// 🟢 EJERCICIO 4
const pedido = {
  id: 1,
  precio: 100,
  cantidad: 2,
  stockDisponible: true
};

const tiemposPedido = {
  stock: 1000,
  costos: 1500,
  recomendaciones: 2000,
  factura: 1000
};

procesarPedidoCompleto(pedido, tiemposPedido).then(res => {
  console.log("🛒 EJERCICIO 4", res);
});


// 🔵 EJERCICIO 5
const tiemposServicios = {
  A: 1000,
  B: 1500,
  C: 2000,
  D: 1000
};

integrarServicios(101, tiemposServicios).then(res => {
  console.log("🌐 EJERCICIO 5", res);
}); // 