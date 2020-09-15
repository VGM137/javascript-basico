
  var articulo = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
    { nombre: "Libro", costo: 300 },
  ];
  //Metodo par filtrar objetos de un array: filter, dentro de usa una funcion
  var articulosFiltrados = articulo.filter(function(articulo){
    return articulo.costo<=500
  });

  //Metodo map: sirve para filtrar los elemento de un array atraves de una de sus caracteristicas y nos regresa un array nuevo  
  var nombreArticulos = articulo.map(function(articulo){return articulo.nombre})

  //Metrodo find: nos va a ayudar a encontrar algo, no va a modificar el aaray y lo que hace es valodar un true o un false y genera un nuevo array con lo que encuantra.
  var encontrarArticulo = articulo.find(function(articulo){
    return articulo.nombre === "Laptop"
  });

  //Metodo forEach: este metodo no generea un nuevo array sino que hace el filtrado sobre el mismo
  articulo.forEach(function(articulo){
    console.log(articulo.nombre)
  })

  //Metodo some regreesa una validacion de verdadero o falso para objetos que cumplan esa valudacion
  var articulosBaratos = articulo.some(function(articulo){
    return articulo.costo <= 700
  })
  // solo regresa un true o false si cumple la condicion o no peor no los objetos en sí