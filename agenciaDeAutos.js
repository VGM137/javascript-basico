var agencia = []

function auto(marca, modelo, año){
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

for(var i = 0; i > 0; i++){
  agencia.push(new auto(marca, modelo, año))
}

function auto (marca, modelo, año){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = año;
}
var autos = [];
for(let i = 0; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var año = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, año));
}

for(let i = 0; i < autos.length ; i++){
  console.log(autos[i]);
}


for(var autoNuevo of agencia){

}
/* var autoNuevo = new auto("Tesla", "Modelo S", 2020)
var ingreso = agencia.push(auto)
 */