export async function gestionarCola(usuarios) {

  const inicio = Date.now();
  const orden = [];

  for (const usuario of usuarios) {

    console.log(`Atendiendo a ${usuario.nombre}...`);

    await new Promise(resolve => {
      setTimeout(() => {
        orden.push(usuario.nombre);
        resolve();
      }, usuario.tiempo);
    });

  }

  const fin = Date.now();

  return {
    ordenAtencion: orden,
    tiempoTotal: `${(fin - inicio) / 1000}s`
  };
}