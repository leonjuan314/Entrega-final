//1

//pongo en h1 id="titulo"

const titulo = document.getElementById("titulo")

//2

const tituloPrincipal = "Frutas"
titulo.innerText = tituloPrincipal

//3
const header = document.getElementById('header')
const footer = document.getElementById('footer')

//no entendi como hacer "mediante la misma clase", entonces arme una funcion que aplique
//el className sobre ambas. Mas facil era escribir los classNames por separado, pero bue...

function naranja(valor1, valor2){
    valor1.className += 'bg-orange-500'
    valor2.className += 'bg-orange-500'
    return valor1, valor2
}

naranja(header, footer)

//4

const footerP = document.querySelector('footer p')

footerP.innerText = "Juan Leon"

//5

//si es crearlo manualmente via html lo hago de una: voy al main y creo un div con id="contenedor" 
//y luego const div1 = document.getElementById("contenedor")

//si es crearlo via JS seria:

const main = document.getElementById('main')

const divOne = document.createElement( 'div' )
divOne.id = "div1"
main.appendChild( divOne)

console.log(divOne)


//6

function crearCard(fruta){

    return `
    <article class="flex flex-col gap-3 w-1/5 rounded border border-orange-500">
        <h2>${fruta.nombre}</h2>
        <img src="${fruta.foto}" class="w-2/3">
        <p>  ${fruta.descripcion}</p>

    </article>
    `;
}

//7

function renderCard(fn, listado){

    let frutas = ""
    for( const fruta of listado){

        frutas += fn(fruta)
    }
    return frutas
}

//8

divOne.innerHTML = renderCard( crearCard, frutas)

//9

//si es crearlo manualmente via html lo hago de una: voy al main y creo un segundo div con id="lista" 
//y luego const div2 = document.getElementById("lista")

//si es crearlo via JS seria:

const divTwo = document.createElement( 'div')
divTwo.id = "div2"
divTwo.innerHTML = `<h1> Frutas Dulces </h1>`
main.appendChild(divTwo)


//10 

function frutasDulces( listado){
    
    let lista = "<ul>"
      
    for( const fruta of listado){

        if( fruta.esDulce == true){
            lista += `<li class=" text-blue-600"> ${fruta.nombre} </li>`
        }
    }
    lista += "</ul>"
    return lista
}

//11

const listadoDulce = frutasDulces( frutas)

divTwo.innerHTML += listadoDulce