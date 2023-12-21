let key = '93a0da789162c1f662b93834d5c00d48'
let url_base = 'http://api.openweathermap.org/data/2.5/weather'

let botonBusqueda = document.getElementById('botonBusqueda')
let datosClima = document.getElementById('datosClima')



botonBusqueda.addEventListener("click", () => {
    datosClima.innerHTML = ''
    let ciudad = document.getElementById('ciudadEntrada').value

    fetch(`${url_base}?q=${ciudad}&appid=${key}`)
        .then(data => data.json())
        .then(data => mostrarDatos(data))
        .catch(error => {
            console.log(error)
        })

})

function mostrarDatos(data)
{
    document.getElementById('ciudadEntrada').value = ''
    let titulo = document.createElement('h2')
    let pais = document.createElement('p')
    let descripcion = document.createElement('p')

    datosClima.appendChild(titulo)
    datosClima.appendChild(pais)
    datosClima.appendChild(descripcion)
    titulo.innerHTML = data.name
    pais.innerHTML = `Pais: ${data.sys.country}`
    descripcion.innerHTML = `Descripción: ${data.weather[0].description}`
}


