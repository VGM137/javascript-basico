// Las funciones son un conjunto de sentencias que se pueden utilizar para generar acciones con los valores guardados en las variables
// Existen dos tipos de funciones:
// Declarativas: es una función que va a inicializar un valor en la memoria y va aguardar lo que hay en ella

  function miFuncion(){
    return 3;
  }

  miFuncion(); // forma de llamar una función.

// Expresión: también se conocen como anónimas, se genera una variable para guardar una función

  var miFuncion = function(){
    return a + b;
  }

/*   Diferencias:

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar. */

// las funciones necesitan parametros, estos van dentro de los parentecis (), para que sepan qué valores esperar cuando se mande llamar para que pueda hacer algo.

  miFuncion(); // se manda llamar con el nombre la variable como si fuera una función.

  console.log("parametro") // es una herramienta del navegador que permite imprimir resultados al llamar el nombre de uina función agregandole el parametro requerido.

  return "parametro" // permite recibir de regreso el resultado de una operación generada por los parametros de una función.