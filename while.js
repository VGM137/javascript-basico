var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`)
}

while(estudiante.length > 0){
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante)
}

//Con el ciclo while podemos hacer algo parecido a lo que se hizo con for y for of, en este caso se le está indicando a la variable estudiantes que mientras su longitud sea mayor a 0 se ejecute la función por cada nombre y que se le aplique el método .shift para elimiminar el primer nombre de la lista que es al que se saluda con la función.

//`Hola ${}`: uso de literal o template strings o interpolación de variables