
let boton = document.getElementById("boton")

/*creacion de objetos*/

const clases = [
{
    clase: `Nº 1`,
    fecha:`17/11/22`,
    contenidos:[`navegadores`, `git`, `github`],
},
{
    clase:`Nº 2`,
    fecha:`9/11/22`,
    contenidos:[`html`],
},
{
    clase: `Nº 3`,
    fecha: `14/11/22`,
    contenidos:[`inclusion css`, `unidades css`, `propiedades css` , `css`],
},
{
    clase: `Nº 4`,
    fecha:`16/11/22`,
    contenidos:[`maquetacion html`],
},
{
    clase: `Nº 5`,
    fecha:`23/11/22`,
    contenidos:[`position`, `media queries`],
},
{
    clase: `Nº 6`,
    fecha:`28/11/22`,
    contenidos:[`flexbox`, `flex`, `formularios`],
},
{
    clase: `Nº 7`,
    fecha:`5/12/22`,
    contenidos:[`flexbox avanzado`, `animacion`, `animaciones`],
},
{
    clase: `Nº 8`,
    fecha:`7/12/22`,
    contenidos:[`filtros`, `animacion svg`, `video`],
},
{
    clase: `Nº 9`,
    fecha:`12/12/22`,
    contenidos:[`responsive`, `ejemplo web`],
},
{
    clase: `Nº 10`,
    fecha:`14/12/22`,
    contenidos:[`ejemplo web 2`],
},
{
    clase: `Nº 11`,
    fecha:`19/12/22`,
    contenidos:[`javascript`, `js`, `variables`, `tipo de datos`, `ingreso de datos`, `if`, `else if`, `datos`],
},
{
    clase: `Nº 12`,
    fecha:`21/12/22`,
    contenidos:[`if anidados`, `operador logico`, `operadores`],
},
{
    clase: `Nº 13`,
    fecha:`26/12/22`,
    contenidos:[`while`, `for`, `funciones`],
},
{
    clase: `Nº 14`,
    fecha:`28/12/22`,
    contenidos:[`funciones por parametros`],
},
{
    clase: `Nº 15`,
    fecha:`2/1/23`,
    contenidos:[`array`, `metodos`, `dom`],
},
{
    clase: `Nº 16`,
    fecha:`4/1/23`,
    contenidos:[`inner`, `innerhtml`, `innertext`, `style`, `setinterval`],
},
{
    clase: `Nº 17`,
    fecha:`9/1/23`,
    contenidos:[`repaso`],
},
{
    clase: `Nº 18`,
    fecha:`11/1/23`,
    contenidos:[`input`, `funciones flecha`, `flecha`, `scope`],
},
{
    clase: `Nº 19`,
    fecha:`16/1/23`,
    contenidos:[`metodos avanzados`, `objetos`, `array de objetos`],
},

]


/*funcion que se ejecuta al hacer la consulta*/ 
let idRespuesta = document.getElementById("idRespuesta")
let objetoMostrar= ``;

const haceClick = (event) => { 
let inputConsulta = document.getElementById("inputConsulta").value;
let inputConsultaMinus = inputConsulta.toLowerCase() //CONVIERTO EL VALOR DE ENTRADA TODO A MINUSCULAS

let sum = 0

for(let i=0;i<clases.length; i++){

   
   

        let arrayContenido = clases[i].contenidos.filter(elemento => elemento == inputConsultaMinus)
       

        if(arrayContenido == inputConsultaMinus){
            objetoMostrar = clases[i]

            idRespuesta.innerHTML = `<div class="contH1">
            <h1 class="titBusq">su busqueda:</h1>
        </div><div class="contBusqueda">
            <h2>Clase Nº</h2>
            <p>${clases[i].clase}</p>
            <h2>Fecha</h2>
            <p>${clases[i].fecha}</p>
            <h2>Contenido visto esa clase</h2>
            <p>${clases[i].contenidos}</p>

        </div>`            
        
        sum = sum + 1


            
        }

        }
        
       


    if(sum == 0){
        idRespuesta.innerHTML=` <div class="contH1">
        <h1 class="titBusq">El contenido buscado no aparece, intente nuevamente</h1>
    </div>`

    }

}


boton.addEventListener("click", haceClick);