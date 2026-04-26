// Aquí simulo un pedido que tarda un tiempo en procesarse
// Uso un callback para que al final muestre que ya se entregó
// Esto ayuda a entender cómo ejecutar algo después de que termine un proceso

function procesarPedido(callback) {
    console.log("Procesando pedido...");

    setTimeout(() => {
        console.log("Pedido listo");
        callback();
    }, 3000);
}

procesarPedido(() => {
    console.log("Pedido entregado");
});