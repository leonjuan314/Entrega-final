//$$GENERAR EL CREADOR DE CARTELERA TENIENDO EN CUENTA TODAS LAS PELICULAS$$


/* A esto voy:

                <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w3/12 rounded border border-red-500">
                    <img src="https://moviestack.onrender.com/static/y5szbv8zju.jpg" alt="">
                    <h2>The Nun II</h2>
                    <h3>Horror- Mystery</h3>
                    <p>In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.</p>
                </article>

*/

function crearPelicula( pelicula ){
    return `

    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded border border-violet-300">
        <img src="${pelicula.image}" alt="">
        <h2 class=" text-center text-violet-300">${pelicula.title}</h2>
        <h3 class=" flex flex-col gap-3 gap-3 text-violet-300">${pelicula.genres}</h3>
        <p class=" flex flex-col gap-3 gap-3 text-white">${pelicula.overview}</p>
    </article>
    
    `

}

/*
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[0])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[1])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[2])
document.getElementById( "main" ).innerHTML += crearPelicula(peliculas[3])
*/ //ESTO QUEDO PIOLA

const main = document.getElementById( "main" )

function crearCartelera( listaPeliculas, ubicacion){

    let base = ""
    for( const pelicula of listaPeliculas){
        base += crearPelicula(pelicula)

    }

    ubicacion.innerHTML = base  //ME VOLVI LOCO PORQUE EL INPUT NO ME FUNCIONABA POR CULPA DEL +=, VA SOLO =!!!!!!!!!!!!!!!!!!!!!!!!

}

crearCartelera(peliculas, main)

//$$AHORA PASO A CREAR EL BUSCADOR Y EL SELECT QUE FILTRE SEGUN EL GENERO DE LA PELICULA$$

//ESTRUCTURA BUSCADA, DONDE VOY A TRABAJAR SOBRE EL DIV SELECTOR Y LUEGO VINCULARLO CON EL BUSCADOR

/*
            <search class="flex flex-wrap gap-5 justify-center text-white">
                <div class="w-3/4 flex justify-center relative">
                    <input id="Busqueda" class="w-full h-9 rounded text-black ps-2" placeholder="Ej: Sound of Freedom" type="text">
                    
                </div>
                <div class="flex flex-wrap gap-5 justify-center" id="Selector">
                    
                </div>
            </search>
*/

//I) BUSCADOR

const input = document.getElementById("Busqueda")

function FiltrarPeliculas( listaPeliculas, nombre){
    
    const peliculasFiltradas = listaPeliculas.filter( pelicula => pelicula.title.toLowerCase().startsWith(nombre.toLowerCase() ) ) 
    return peliculasFiltradas
} 

console.log(FiltrarPeliculas(peliculas, "the "))
console.log(FiltrarPeliculas(peliculas, "the nun"))
console.log(FiltrarPeliculas(peliculas, "juan")) //filtra bien

//A tener en cuenta: entra el array, se guarda por filtrado segun el nombre impuesto (y lo compara con la key pelicula.name): se pasa a minuscula el ingresado y se tiene en cuenta
//las primeras letras ingresadas, no que se contengan en la palabra. Luego se almacena nuevamente en minuscula. Te guarda el objeto que coincide con pelicula.title, y te da todas sus keys.

/*function filtrarPeliculas2( listaPersonajes, seleccionados){
      
    if( seleccionados.lenght == 0) {               //SI NO TENES SELECCIONADO NINGUINO ENTONCES TE MUESTRA TODO
      return listapersonajes
    }else{
      return listaPersonajes.filter( personaje => seleccionados.some( seleccionado => personaje.tags.includes(seleccionado) )
    }
})  */

input.addEventListener( 'input', () => {
    
    console.log(input.value) //responde bien
    const peliculasFiltradasNombre = FiltrarPeliculas(peliculas, input.value)

    //console.log(peliculasFiltradasNombre) //responde bien en consola
    if( event.target.value == "All" ){
        crearCartelera( peliculas, main)
    }else{
        const filtradoFinal = generoPelicula( peliculasFiltradasNombre, event.target.value)
        crearCartelera( filtradoFinal, main)
    }

    crearCartelera(peliculasFiltradasNombre, main) //ME FUNCIONABA MAL POR CULPA DE TENER += EN LA FUNCION, Y NO = SOLO
} )

/*  TAMBIEN PODRIA HABER PUESTO, dentro del evento, EN VEZ DE crearCartelera solo:
    if( peliculasFiltradasNombre.lenght == 0){
        crearCartelera( peliculas, main)
    }else{
        crearCartelera( peliculasFiltradasNombre, main)
    }
 */

//II)SELECT

//A ESTO VOY
/*
                    <select class="text-black" name="select">
                        <option class="text-black"  value="value1">All</option>
                        <option class="text-black" value="value2">Fiction</option>
                        <option class="text-black" value="value3">Horror</option>
                      </select>
*/
const selector = document.getElementById("Selector")
const genres = peliculas.map( genre => genre.genres).flat()
console.log(genres)
const genreSet = new Set(genres)
const genreSinRep = Array.from(genreSet) //el array que voy a usar finalmente
console.log(genreSinRep)

function crearSelect( dato){
    return `

    <option value="${dato}">${dato}</option>
    
    `
}

function agregarSelect( listaPeliculas){

    let base = `<option value="All">All</option>`
    
    for( const pelicula of listaPeliculas){
        base += crearSelect(pelicula)

    }
    console.log(base)
    selector.innerHTML += base


}
agregarSelect(genreSinRep)

function generoPelicula( listaPeliculas, valor){

    return listaPeliculas.filter( pelicula => pelicula.genres.includes(valor))

} //me devuelve el objeto (la pelicula) que posee tal VALOR en la key genres

console.log(generoPelicula(peliculas, "Mystery"))


selector.addEventListener('change', (event) => {
    
    console.log(`You like ${event.target.value}`)
    const peliculasFiltradasNombre = FiltrarPeliculas(peliculas, input.value)
    //const peliculasFiltradasGenero = generoPelicula(peliculas, event.target.value)

    if( event.target.value == "All" ){
        crearCartelera( peliculas, main)
    }else{
        const filtradoFinal = generoPelicula( peliculasFiltradasNombre, event.target.value)
        crearCartelera( filtradoFinal, main)
    }
    


} )


