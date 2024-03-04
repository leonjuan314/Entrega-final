/*
1. Convert the following named function to an arrow function:

           function printMessage( message ) {

                    console.log( message )

           }

2. Convert the following named function to an arrow function:

            function createMultplication (number1, number2) {

                      let result = number1 * number2

                      return result

             }

3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.

4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.

5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.

6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

9. Generate a func tion that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.

*/

console.log(beers)

//1  Convertir la funcion en funcion linea

function printMessage( message ) {

    console.log( message )

}

const printMessageArrow = message => console.log(message)

printMessageArrow('hola')

const holaMundo = () => "hola mundo" 

function imprimir(a,fn){
    console.log(fn(a))

}

imprimir( "chau", holaMundo)
imprimir( 6, holaMundo)

//2


function createMultplication (number1, number2) {

    let result = number1 * number2

    return result

}

const createMultplicationArrow = (a,b) => console.log(a*b)

createMultplicationArrow(3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709, 2.718281828459045235360287471352662497757247093699959574966967627724076630353547594571382178525166427427466391932003059921817413596629043572900334295260595630)

//3 3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.

const numeros = [ 1,2,3,4,5,6,7,8,9 ]

const numerosMultiplicados = numeros.map(createMultplication)
console.log(numerosMultiplicados)

console.log( numeros.map((a,b) => console.log(a*b)))

console.log( numeros.map(createMultplicationArrow))

//4 4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.

console.log(beers[0].abv)
console.log(beers[1].abv)
console.log(beers[2].abv)

//const beersAbv = beers.map( beer => beer.abv) //extraigo todos los abv de la lista
//console.log(beersAbv)

//const values  = [1,2,3,7,77,33,1,99,999999]
//const ordenadosGraduacion = values.toSorted( (a,b) => a - b)

//console.log(ordenadosGraduacion)

function graduacion( lista){

    const beersAbv = lista.map( beer => beer.abv)
    const ordenadosGraduacion = beersAbv.toSorted( (a,b) => a - b)
    const listaAcortada = []
    for( let i = 10; i < 0; i--){
        listaAcortada.push(ordenadosGraduacion[i])

    }
    return listaAcortada
}

console.log(graduacion(beers))

const hola = beers.map( beer => beer.abv)
console.log(hola)
const chau = beers.toSorted( (a,b) => a.abv - b.abv)
console.log(chau)

const listaAcortada = []

for( let i = chau.length - 1 ; i >= chau.length - 10; i--){
    listaAcortada.push( chau[i].name )

}

console.log(listaAcortada) //ACA ESTA HECHO, SOLO FALTARIA HACERLO FUNCION

//5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.

const amargura = beers.toSorted( (a,b) => a.ibu - b.ibu)

console.log(amargura)

const listaAcortada2 = []

for( let i = 0; i < 10; i++){
    listaAcortada2.push( amargura[i].name )

}

console.log(listaAcortada2)

//6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.
 
function buscar(lista, cosa){

    const resultado = lista.find( cerveza => cerveza.name == cosa )
    return resultado

}

const logi = ["juan", "carlos", "adriel"]

console.log( buscar( beers, "Rabiator"))

console.log( buscar( logi, "adriel"))

//7 7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

function buscarIbu(lista, valor){

    if(lista.find( cerveza => cerveza.ibu == valor ) ){
        const elemento = lista.find( cerveza => cerveza.ibu == valor)
        console.log( elemento)
    }else{
        console.log(`There is no beer with an ibu of ${valor}.`)
    }
}

buscarIbu(beers, 55)
buscarIbu(beers, 59)
buscarIbu(beers, 60)

//8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

function searchBeer( lista, nombre){
    if(lista.find( cerveza => cerveza.name == nombre ) ){
        const elemento = lista.find( cerveza => cerveza.name == nombre)
        console.log( lista.indexOf(elemento))
    }else{
        console.log(`Name of the beer entered (${nombre}) does not exist.`)
    }
}

//sino tambien poner 
//const elemento = lista.findIndex( cerveza => cerveza.name == nombre)
//console.log( elemento)

searchBeer( beers, "Pilsen Lager")

//9. Generate a func tion that receives as a parameter the array of beers and an alcohol value. 
//The function must return a new array with the beers that do not exceed the alcohol level.
//Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

function alcohol( list, level){

    const alc = list.filter( beer => beer.abv < level)
    return alc
}


const jaime = alcohol( beers, 5)
console.log(jaime)

function alcohol2( list, level){

    const alc = list.filter( beer => beer.abv < level)
    const newList = []

    for( i=0; i< alc.length; i++){
        const element = { name: alc[i].name, abv: alc[i].abv, ibu: alc[i].ibu}
        newList.push(element)
    }
    return newList
    

}

const jaique = alcohol2(beers, 5)
console.log(jaique)

//10. Generate a function that receives as parameters an array of beers, a property name
// and a boolean value. It should return a new array with 10 beers ordered by the property 
//entered as the second argument, ascending if the third is true or descending if it is false.



function lista10( lista){
    const extraccion = lista.map( beer => beer.name)
    console.log(extraccion)
    const nombresOrdenados3 = extraccion.toSorted( (a,b) => {
        if( a < b ){
            return -1
        }
        if( a > b ){
            return 1
        }
        return 0
    } ) 
    console.log(nombresOrdenados3)
}

lista10(beers)

function lista11( lista, prop, boolean){

    const extraccion = lista.map( beer => beer[prop])
    console.log(extraccion)
    if( boolean == true){
        const nombresOrdenados3 = extraccion.toSorted( (a,b) => {
            if( a < b ){
                return -1
            }
            if( a > b ){
                return 1
            }
            return 0
        } ) 
        console.log(nombresOrdenados3)
    }else{
        const nombresOrdenados3 = extraccion.toSorted( (a,b) => {
            if( a < b ){
                return 1
            }
            if( a > b ){
                return -1
            }
            return 0
        } ) 
        console.log(nombresOrdenados3)
    }

}
lista11( beers, "name", false)

//11. Generate a function that receives as a parameter an array of beers and 
//an id of an HTML element where the table will be printed. The function must render 
//(render, draw, paint, fill, etc.) in an html file a table that contains 
//the columns "Name", "ABV", "IBU", and one row for each element of the array.
// Each row must have the data requested for each of the beers.
