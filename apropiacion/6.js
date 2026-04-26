// Ejercicio 6 - Manejo de errores

const proceso = new Promise((resolve, reject) => {
  setTimeout(() => {
    let exito = Math.random() > 0.5;

    if (exito) {
      resolve("Proceso exitoso");
    } else {
      reject("Error en el proceso");
    }
  }, 1000);
});

proceso
  .then(r => console.log(r))
  .catch(e => console.log(e));

/*
Puede fallar o funcionar.
.catch() captura el error.
*/