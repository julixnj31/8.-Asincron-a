// Aquí quiero mostrar cómo JavaScript no se detiene aunque haya algo esperando
// Primero se imprime "Inicio", luego "Fin" y por último el mensaje del setTimeout
// Esto demuestra que el programa sigue avanzando sin esperar los 2 segundos

console.log("Inicio");

setTimeout(() => {
    console.log("Operación después de 2 segundos");
}, 2000);

console.log("Fin");