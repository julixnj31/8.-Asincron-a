// Ejercicio 4 - Callback Hell

function tomarDatos(callback) {
  setTimeout(() => {
    console.log("Tomando datos");
    callback();
  }, 1000);
}

function procesarDatos(callback) {
  setTimeout(() => {
    console.log("Procesando datos");
    callback();
  }, 1000);
}

function mostrarResultado(callback) {
  setTimeout(() => {
    console.log("Mostrando resultado");
    callback();
  }, 1000);
}

// Encadenamiento (Callback Hell)
tomarDatos(() => {
  procesarDatos(() => {
    mostrarResultado(() => {
      console.log("Proceso completo");
    });
  });
});

/*
Complejidad:
El código se vuelve difícil de leer porque cada función
depende de la anterior y se anidan unas dentro de otras.
Esto se conoce como Callback Hell.
*/