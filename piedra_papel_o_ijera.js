var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var juego1 = {
  piedra: true,
  papel: false, 
  tijera: false};
var juego2 = {
  piedra: false,
  papel: false, 
  tijera: true};
var piedragana = "piedra" > "tijera";
var papelgana = "papel" > "piedra";
var tijeragana = "tijera" > "papel";
var resultados = [piedragana, papelgana, tijeragana]

switch (juego1){
  case piedra:
    if(juego1 = piedra){
      console.log(`Jugador 1 eligió ${juego1}`)
    }
    break 
  case papel:
    if(juego1 = papel){l
      console.log(`Jugador 1 eligió ${juego1}`)
    }
    break
  case tijera:
    if(juego1 = tijera){
      console.log(`Jugador 1 eligió ${juego1}`)
    }
    break
  default:
    console.log("Elige entre piedra, papel y tijera")
}
switch (juego2){
  case piedra:
    if(juego2 = piedra){
      console.log(`Jugador 2 eligió ${juego2}`)
    }
    break 
  case papel:
    if(juego2 = papel){
      console.log(`Jugador 2 eligió ${juego2}`)
    }
    break
  case tijera:
    if(juego2 = tijera){
      console.log(`Jugador 2 eligió ${juego2}`)
    }
    break
  default:
    console.log("Elige entre piedra, papel y tijera")
}
/* piedra(juego1, juego2)
papel(juego1, juego2)
tijera(juego1, juego2) */
function gana(){
  if(juego1.piedra){
    gana(juego1)
    console.log('Jugador 1 gana')
  }
}


/* switch (resultados) {
  case juego1 > juego2:
    function gana1 () {
      if (`${juego1}` > `${juego2}`){
        console.log("Jugador 1 gana")
      }
    }
    break
  case juego2 > juego1:
    function gana2 () {
      if (`${juego2}` > `${juego1}`){
        console.log("Jugador 2 gana")
      }
    }
    break
  default:
    console.log("Empate")
} */
/* gana1(juego1, juego2)
gana2(juego1, juego2) */

/* if (resultado1 > resultado2){
  console.log("Gana Jugador 1");
} else if (resultado2 > resultado1){
  console.log("Gana Jugador 2");
} else {
  console.log("empate");
} */

/* if (juego = op1){
  console.log(op1);
} else if (juego = op2){
  console.log(op2);
} else if (juego = op3) {
  console.log(op3);
} else {
  console.log("Elige entre op1, op2 y op3");
} */



/* var piedra = true;
var papel = true;
var tijera = true;

function elegir(piedra, papel, tijera){
  if (elegir === piedra){
    return piedra;
  }
  else if (elegir === papel){
    return papel;
  }
  else if (elegir === tijera){
    return tijera;
  }
  else {

  }
}

console.log(elegir) */