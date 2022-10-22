// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista = new Array('Leche', 'Pan', 'Huevos', 'Café', 'Azúcar');
console.log(lista);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push('Aceite de Girasol');
console.log(lista);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// lista.pop();
const r = lista.find(elemento => elemento === 'Aceite de Girasol');
lista.splice(lista.indexOf(r), 1);
console.log(lista);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: 'El Padrino', director: 'Francis Ford Coppola_1', fecha: "01/01/1972"},
    {titulo: 'El Padrino II', director: 'Francis Ford Coppola_2', fecha: "01/01/1974"},
    {titulo: 'El Padrino III', director: 'Francis Ford Coppola_3', fecha: "01/01/2011"},
    {titulo: 'El Padrino IV', director: 'Francis Ford Coppola_4', fecha: "01/01/2012"},

];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas_posteriores = peliculas.filter(pelicula => pelicula.fecha > "01/01/2010");
console.log(peliculas_posteriores);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(pelicula => pelicula.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(pelicula => pelicula.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos);
console.log(directores_titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_spread = [...directores, ...titulos];
console.log(directores_titulos_spread);

