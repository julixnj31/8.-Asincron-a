function validarCorreo(correo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      correo.includes("@") ? res("OK") : rej("Correo inválido");
    }, 1000);
  });
}

function validarDocumento(doc) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      doc.length > 4 ? res("OK") : rej("Documento inválido");
    }, 1500);
  });
}

function validarUsuario(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      nombre !== "admin" ? res("OK") : rej("Usuario ocupado");
    }, 2000);
  });
}

export async function validarFormulario(user) {

  const inicio = Date.now();

  const resultados = await Promise.allSettled([
    validarCorreo(user.correo),
    validarDocumento(user.documento),
    validarUsuario(user.nombre)
  ]);

  const fin = Date.now();

  return {
    resultados,
    estadoFinal: resultados.every(r => r.status === "fulfilled")
      ? "Formulario válido"
      : "Formulario inválido",
    tiempo: `${(fin - inicio) / 1000}s`
  };
}
