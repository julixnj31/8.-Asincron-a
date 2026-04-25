// Aquí hago un ciclo muy grande para ver qué pasa con el programa
// Se puede notar que se demora bastante y no muestra nada hasta que termine
// Esto demuestra que cuando hay un proceso pesado, todo se queda esperando

console.log("Inicio");

for (let i = 0; i < 1000000000; i++) {
    // simulando un proceso pesado
}

console.log("Fin");