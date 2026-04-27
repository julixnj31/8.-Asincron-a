export async function integrarServicios(id, tiempos) {

  const A = new Promise(res => setTimeout(() => res("A OK"), tiempos.A));
  const B = new Promise(res => setTimeout(() => res({ nombre: "Usuario" }), tiempos.B));
  const C = new Promise(res => setTimeout(() => res(["historial"]), tiempos.C));

  const [a, b, c] = await Promise.all([A, B, C]);

  const D = await new Promise(res =>
    setTimeout(() => res("Recomendaciones"), tiempos.D)
  );

  return {
    A: a,
    B: b,
    C: c,
    D: D
  };
}