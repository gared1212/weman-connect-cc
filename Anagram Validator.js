// Anagram Validator

// Tu Technical Lead te hizo una petición de desarrollar un método para la validación de anagramas dados 2 Arrays de tipo String.
// Definición de Anagrama: Un anagrama es una palabra o frase que resulta de la transposición de letras de otra palabra o frase. Por ejemplo:

// AMOR - ROMA - OMAR - MORA - RAMO - ARMO - MARO

// Entrada:
//  Dos arreglos de igual tamaño( 0 < arrayLength <= 1000 )
//  La relación de los arreglos será con referencia a N; es decir La posición N del primer
// arreglo debe de ser anagram de la posición N del segundo arreglo
// Array1 = {AMOR,MONJA,ESPONJA};
// Array2 = {ROMA,JAMON,JAPONES};
// Dada esta entrada podemos asumir que es una entrada valida ya que:
// Array[0] es anagrama de Array[0] al igual que
// Array[1] es anagrama de Array[1] al igual que
// …
// Array[N] es anagrams de Array[N]
// Retorno:
//  El retorno debe de ser un valor booleano:
// True = Debe de retornar true si y solo sí todos los miembros del arreglo son anagramas
// en relación a N.
// False = Debe de retornar false si y solo si uno de los elementos del arreglo no es
// anagrama del otro en relación a N.
// Ejemplo:
// Entrada :
// Array1 = {AMOR,MONJA,ESPONJA};
// Array2 = {ROMA,JAMON,JAPONES};
// Salida :
// True

// Entrada :
// Array1 = {AMOR,MONA ,ESPONJA};
// Array2 = {ROMA,JAMON,JAPONES};
// Salida :

// false

var palabra1 = []
var palabra2 = []

function anagrama (palabra1, palabra2) {
    0 < palabra1.length <= 1000 ? "analizando1" : "la palabra es demasiado larga"
    0 < palabra2.length <= 1000 ? "analizando2" : "la palabra es demasiado larga"
    
    palabra1.length === palabra2.length? "comparando" : "las palabras insertadas no coinciden" 


} 