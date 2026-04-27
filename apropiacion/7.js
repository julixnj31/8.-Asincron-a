// Función que retorna una promesa (simula algo que tarda 2 segundos)
function esperarResultado() {
  return new Promise((resolve) => {

    // Simulo un proceso lento (como una API o base de datos)
    setTimeout(() => {
      resolve("✅ Resultado recibido después de 2 segundos");
    }, 2000);

  });
}


// Función async que usa await
export async function ejecutarAsyncAwait() {

  console.log("⏳ Esperando resultado...");

  // await pausa esta línea hasta que la promesa se resuelva
  const resultado = await esperarResultado();

  // Se ejecuta después de los 2 segundos
  console.log(resultado);

  console.log("🚀 El programa continúa sin bloquearse");
}
