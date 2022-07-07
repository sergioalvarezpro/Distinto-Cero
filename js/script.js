let numero = 0;
let contador = 0;

function serieNumeros() {

    do {
        numero = Number(prompt('Introduce un número, ¡Qué no sea el 0!'));
        //Si el usuario no introduze un valor númerico se produce un escape del script.
        if (!numero) break;
        contador++;

        alert(`Has introducido el valor ${numero}.`);
        document.write(`<p>Has introducido el valor ${numero}.</p><br>`);

    } while (numero !== 0);

    alert(`Has introducido un total de ${contador} valores.`);
    document.write(`<p>Has introducido un total de ${contador} valores.</p>`);
}

serieNumeros();