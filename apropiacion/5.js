// Ejercicio 5 - Promesas

function tomarDatos() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Tomando datos...");
      res();
    }, 1000);
  });
}

function procesarDatos() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Procesando datos...");
      res();
    }, 1000);
  });
}

function mostrarResultado() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Mostrando resultado...");
      res();
    }, 1000);
  });
}

// Cadena de promesas
tomarDatos()
  .then(() => procesarDatos())
  .then(() => mostrarResultado())
  .then(() => console.log("Proceso completo"));

/*
Mejora:
El código es más ordenado y fácil de leer.
No hay anidación como en los callbacks.
*/