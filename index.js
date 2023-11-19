var url = "contenido.json"
var titu = document.getElementById("cabecera");
var layout = document.getElementById("cuerpo");

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titu.innerHTML +=`
        <h1 class="titulo">${data.titulo1}</h1>
            <h2 class="subtitulo">${data.subtitulo1}</h2>`
    });
    elementApi.layouts.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="foto">
                <img src=${data.imagen}>
            </div>
            <div class="texto">
                <h2 class="subtitulo">${data.titulo}</h2>
                <p>${data.descripcion}</p>
                    <a href="${data.url}"><button class="boton">Conocer más!</button></a>
            </div>
            <br>
        </section>`
    });
})