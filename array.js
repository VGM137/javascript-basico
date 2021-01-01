var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);

console.log(frutas.length) // Con el .length podemos saber el tamaño de un array.

//Los metodos ayudan a mutar al Array(a cambiearlo)
//Metodo .push sirve para empujar nuevos elementos a arrays existentes
var masFrutas = frutas.push("Uvas")

//Método .pop elimina elementos de un array
var ultimo = frutas.pop("Uvas")

//Método .unshift agrega nuevos elementos pero al principio, no al final.
var nuevaLongitud = frutas.unshift("Uvas");

//Método .shift elimina el primer elemento del array
var borrarFruta = frutas.shift("Uvas")

//Método .indexOf Arroja la posicion en la que se encuentra el elemento que busquemos
var posicion = frutas.indexOf("Cereza")

// También se pueden asignar o añadir datos con string keys
var frutas = ["pera", "manzana"]

frutas["dos"] = "piña"
frutas["loQueSea"] = "mango"
//Para saber la longitud de un array tomando en cuenta los string keys usar Object.keys() y Object.keys(frutas).lenght
Object.keys(frutas)
Object.keys(frutas).length