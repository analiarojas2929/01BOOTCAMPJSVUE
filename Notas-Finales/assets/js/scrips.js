function capturarNota(ramo, numeroNota) {
    let nota = prompt("Ingrese la nota " + numeroNota + " para " + ramo + ":");
    if (nota !== null && !isNaN(nota)) {
        document.getElementById(`nota${ramo}${numeroNota}`).textContent = nota;
        calcularPromedio(ramo);
    } else {
        alert("Ingrese un valor numérico válido");
    }
}


function calcularPromedio(ramo) {
    let nota1 = parseFloat(document.getElementById(`nota${ramo}1`).textContent) || 0;
    let nota2 = parseFloat(document.getElementById(`nota${ramo}2`).textContent) || 0;
    let nota3 = parseFloat(document.getElementById(`nota${ramo}3`).textContent) || 0;
    let promedio = (nota1 + nota2 + nota3) / 3;
    document.getElementById(`promedio${ramo}`).textContent = promedio.toFixed(2);
}


// Llamadas a las funciones para capturar las notas
document.addEventListener("DOMContentLoaded", () => {
    capturarNota("HTML", 1);
    capturarNota("HTML", 2);
    capturarNota("HTML", 3);
    capturarNota("CSS", 1);
    capturarNota("CSS", 2);
    capturarNota("CSS", 3);
    capturarNota("JS", 1);
    capturarNota("JS", 2);
    capturarNota("JS", 3);
});