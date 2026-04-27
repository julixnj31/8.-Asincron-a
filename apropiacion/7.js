// Ejercicio 7 - Async/Await

function esperar() {
  return new Promise(res => {
    setTimeout(() => {
      res("Resultado listo");
    }, 2000);
  });
}

async function ejecutar() {
  console.log("Esperando...");

  const resultado = await esperar();

  console.log(resultado);
}

ejecutar();

/*
La asincronía ocurre en setTimeout.
await espera el resultado sin bloquear el programa.
*/