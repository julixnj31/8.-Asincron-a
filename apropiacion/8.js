//| Simulación de operaciones asíncronas con callbacks y promesas
// Simulo buscar usuario (1 segundo)
function buscarUsuario(callback) {
  setTimeout(() => {
    console.log("👤 Usuario encontrado");
    callback({ id: 1, nombre: "Juan" });
  }, 1000);
}

// Simulo consultar permisos (2 segundos)
function consultarPermisos(usuario, callback) {
  setTimeout(() => {
    console.log("🔐 Permisos obtenidos");
    callback({ ...usuario, permisos: ["admin"] });
  }, 2000);
}

// Simulo generar reporte (1 segundo)
function generarReporte(usuario, callback) {
  setTimeout(() => {
    console.log("📄 Reporte generado");
    callback(`Reporte de ${usuario.nombre}`);
  }, 1000);
}


// Ejecución con callbacks (anidados)
export function ejecutarCallbacks() {
  console.log("=== CALLBACKS ===");

  buscarUsuario((usuario) => {
    consultarPermisos(usuario, (usuarioConPermisos) => {
      generarReporte(usuarioConPermisos, (reporte) => {
        console.log("✅ Resultado:", reporte);
      });
    });
  });
}

// Buscar usuario
function buscarUsuarioP() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👤 Usuario encontrado");
      resolve({ id: 1, nombre: "Juan" });
    }, 1000);
  });
}

// Consultar permisos
function consultarPermisosP(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔐 Permisos obtenidos");
      resolve({ ...usuario, permisos: ["admin"] });
    }, 2000);
  });
}

// Generar reporte
function generarReporteP(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📄 Reporte generado");
      resolve(`Reporte de ${usuario.nombre}`);
    }, 1000);
  });
}

// Ejecución con async/await

// Ejecución con .then()
export function ejecutarPromesas() {
  console.log("=== PROMESAS ===");

  buscarUsuarioP()
    .then(consultarPermisosP)
    .then(generarReporteP)
    .then((reporte) => {
      console.log("✅ Resultado:", reporte);
    });
}