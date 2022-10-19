let nombre = "Luis", apellido = "Salinas";

let estudiante = `Estudiante: ${nombre} ${apellido}`
console.log(estudiante); 

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let longitud = estudiante.length;
console.log(longitud);

let primerLetraNombre = nombre.charAt(0);
console.log(primerLetraNombre);

let utlimaLetraApellido = apellido.charAt(apellido.length - 1);
console.log(utlimaLetraApellido);

let contenido = estudiante.includes(nombre);
console.log(contenido);

