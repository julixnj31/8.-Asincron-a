// Aquí simulo una cola de atención donde cada usuario se atiende uno por uno
// Cada uno tiene un tiempo diferente y toca esperar a que termine el anterior
// Esto muestra cómo controlar la asincronía sin que todo se ejecute al tiempo

const solicitudes = [
    { usuario: "Ana", tiempo: 2000 },
    { usuario: "Luis", tiempo: 1500 },
    { usuario: "María", tiempo: 2500 }
];

async function atender() {
    console.log("Inicio del proceso");

    let inicioTotal = Date.now();

    for (let s of solicitudes) {
        console.log(`Atendiendo a ${s.usuario}`);

        let inicio = Date.now();

        await new Promise(resolve => setTimeout(resolve, s.tiempo));

        let fin = Date.now();

        console.log(`Finalizó ${s.usuario} en ${(fin - inicio) / 1000} segundos`);
    }

    let finTotal = Date.now();

    console.log(`Tiempo total: ${(finTotal - inicioTotal) / 1000} segundos`);
}

atender();