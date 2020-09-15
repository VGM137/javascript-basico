//mediante una función constructora podemos crear varios objetos del mismo tipo
function auto(marca, modelo, año){
  this.marca = marca;
  this.modelo = modelo;
  this.año = año
}
//esta función es un template, está dando parametros de construcción para objetos nuevos que se creen. La funcion tiene como parametros las propiedades que espero que mi objeto tenga. La palabra recerbada this es una referencia a la función constructora y la palabra clabe hace referencia ala propiedad del objeto.

//para construir un objeto con relacion al template hay que generar una variable.
var autoNuevo = new auto("Tesla", "Model 3", 2020)
// con ayuda del operador new generamos una nueva instancia de la funcion constructora y una instancia es un objeto que deriba de otro objeto
