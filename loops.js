var estudiante = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiante.length; i++){
  saludarEstudiantes(estudiante[i]);
}
// Para generar un loop es necesario tener varios elementos que ingresar a una tarea que se va a repetir por lo que se hace un array que se ingresa en una funcion que posteriormente, con un for, vamos a determinarle una variable i, en este caso empieza en 0 y mientras sea menor que la longitud del array, se va a volver a reptir aumentando su valor más uno (i+1 = i++), mandadon el mensaje de la función.

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}

//La variable interna que se hace dentro del loop for funciona como un singular del plural que es el array de la variable estudiantes.
