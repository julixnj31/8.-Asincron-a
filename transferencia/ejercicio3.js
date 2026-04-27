// Datos de entrada
const usuario = {
  correo: "test@mail.com",
  documento: "12345",
  nombre: "Selena"
};

// Funciones simuladas (servicios externos)
function validarCorreo(correo) {
  return new Promise((resolve, reject) => {
    const tiempo = 1000;
    setTimeout(() => {
      const ok = Math.random() > 0.2;
      ok ? resolve("Correo válido") : reject("Correo inválido");
    }, tiempo);
  });
}

function validarDocumento(doc) {
  return new Promise((resolve, reject) => {
    const tiempo = 1500;
    setTimeout(() => {
      const ok = Math.random() > 0.2;
      ok ? resolve("Documento válido") : reject("Documento inválido");
    }, tiempo);
  });
}

function validarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    const tiempo = 1200;
    setTimeout(() => {
      const ok = Math.random() > 0.2;
      ok ? resolve("Usuario disponible") : reject("Usuario no disponible");
    }, tiempo);
  });
}

// Proceso principal
async function validarFormulario() {
  console.log("Iniciando validación...");
  const inicio = Date.now();

  const resultados = await Promise.allSettled([
    validarCorreo(usuario.correo),
    validarDocumento(usuario.documento),
    validarUsuario(usuario.nombre)
  ]);

  // Consolidar resultados
  const estado = {
    correo: resultados[0],
    documento: resultados[1],
    usuario: resultados[2]
  };

  console.log("Resultados individuales:", estado);

  // Verificar si todos fueron exitosos
  const todoOk = resultados.every(r => r.status === "fulfilled");

  const fin = Date.now();
  const tiempoTotal = (fin - inicio) / 1000;

  console.log("Resultado final:", todoOk ? "Formulario validado" : "Validación fallida");
  console.log("Tiempo total:", tiempoTotal + "s");
}

validarFormulario();