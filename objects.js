//Java script es un lenguaje que está diseñado en un paradigma de objetos
//sintaxis para escribir un objeto en js var objeto = {};

var miAuto = {
  marca: "Ferrari",
  modelo: "La Ferrari",
  annio: 2020
};
//para poder conocer el valor de una propiedad de un objeto la sintaxis es objeto.popiedad
miAuto.marca

//Los métodos de objetos son propiedades que llevan una función como valor, se escribe: propiedad: function(){}
var miAuto = {
  marca: "Ferrari",
  modelo: "La Ferrari",
  annio: 2020,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`)
  }
};
//para conocer el valor de una propiedad que tenga una funcion la sitaxis es propiedad.valorFuncion()
miAuto.detalleDelAuto();
