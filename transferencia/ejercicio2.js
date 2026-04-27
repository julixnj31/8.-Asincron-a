function entregarPaquete(paquete) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (Math.random() < 0.2) {
        reject({ id: paquete.id, estado: "Error" });
      } else {
        resolve({ id: paquete.id, estado: "Entregado" });
      }

    }, paquete.tiempo);
  });
}

export async function procesarEntregas(paquetes) {

  const orden = [];

  const promesas = paquetes.map(p =>
    entregarPaquete(p)
      .then(res => {
        orden.push(p.id);
        return res;
      })
      .catch(err => {
        orden.push(p.id);
        return err;
      })
  );

  const resultados = await Promise.all(promesas);

  return { resultados, ordenFinalizacion: orden };
}