var jugador01 = "piedra";

var jugador02 = "tijera";


if (jugador01 === "piedra" && jugador02 === "papel"){console.log("El ganador es el jugador 02");}

    else if (jugador01 === "piedra" && jugador02 === "tijera") {console.log("El ganador es el jugador 01");}

    else if (jugador01 === "piedra" && jugador02 === "piedra") {console.log("Es un empate");}

    else if (jugador01 === "papel" && jugador02 === "papel") {console.log("Es un empate");}

    else if (jugador01 === "papel" && jugador02 === "tijera") {console.log("El ganador es el jugador 02");}

    else if (jugador01 === "papel" && jugador02 === "piedra") {console.log("El ganador es el jugador 01");}

    else if (jugador01 === "tijera" && jugador02 === "papel") {console.log("El ganador es el jugador 01");}

    else if (jugador01 === "tijera" && jugador02 === "tijera") {console.log("Es un empate");}

    else if (jugador01 === "tijera" && jugador02 === "piedra") {console.log("El ganador es el jugador 02");}

        else {console.log("Los comandos no son válidos. Intenta nuevamente!");}