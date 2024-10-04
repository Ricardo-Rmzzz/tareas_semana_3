// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Tu código aquí
    let nombreCliente = pedido.shift();

    pedido.unshift("bebida");

    pedido.push(nombreCliente);

    return pedido;
}
let pedido = ["Ricardo", "pizza"];
let resultado = procesarPedido(pedido);
console.log(resultado); 


// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    // tu código aquí
    return numeros
        .filter(num => num % 2 === 0) 
        .reduce((acumulador, num) => acumulador + num, 0); 
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Tu código aquí
    return palabras.every(palabra => palabra[palabra.length - 1] === 'a');
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    // Tu código aquí
    let index = words.indexOf(word);

    if (index === -1) {
        return [];
    }

    return words.splice(index + 1);
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Tu código aquí
    for (let i = 0; i < matriz.length; i++) { 
        for (let j = 0; j < matriz[i].length; j++) { 
            if (matriz[i][j] === "JavaScript") { 
                return [i, j]; 
            }
        }
    }
    return [-1, -1];
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Tu código aquí
    if (libros.length === 0) {
        return [-1, -1];
    }

    let min = Math.min(...libros);
    let max = Math.max(...libros);

    return [libros.indexOf(min), libros.indexOf(max)];
}
const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado2 = findMinMaxPages(libros);
console.log(resultado2); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
