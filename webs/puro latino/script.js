// Obtenemos valor del div
var bienvenida = document.getElementById('bienvenida');

// Alerta que pregunta quién eres y lo pone en el div
var user = prompt("Bienvenido a Puro Latino, ¿quién eres?");
bienvenida.innerHTML = "Bienvenido " + user + "!";

// Función formulario
function enviar(event) {
    // Evitamos el comportamiento predeterminado de recargar la página
    event.preventDefault();

    if (confirm("¿Deseas confirmar tu compra?")) {
        alert("¡Muchas gracias por tu compra!");
        console.log("Compra confirmada");
    } else {
        alert("Compra cancelada.");
        console.log("Compra cancelada");
    }
}
