export async function procesarPedidoCompleto(pedido, tiempos) {

  try {
    const recomendaciones = new Promise(res =>
      setTimeout(() => res("Recomendaciones"), tiempos.recomendaciones)
    );

    await new Promise(res => setTimeout(res, tiempos.stock));
    await new Promise(res => setTimeout(res, tiempos.costos));

    const rec = await recomendaciones;

    await new Promise(res => setTimeout(res, tiempos.factura));

    return { pedido: pedido.id, recomendaciones: rec, estado: "OK" };

  } catch (error) {
    return { error };
  }
}