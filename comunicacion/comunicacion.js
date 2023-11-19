var url = "../contenido.json";
var titulo = document.getElementById("cabecera");
var layout = document.getElementById("cuerpo");

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titulo.innerHTML +=`
        <h1 class="titulo">${data.titulo4}</h1>
            <h2 class="subtitulo">${data.subtitulo2}</h2>`
    });
    elementApi.comunicacion.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="texto">
                <p>${data.texto}</p>
            </div>
            <div class="foto">
                <img src=${data.imagen}>
            </div>
        </section>`
    });
    elementApi.titulos.map(data =>{
        layout.innerHTML +=`
            <div class="texto">
                <h1 class="titulo2">${data.tituloCom}</h1>
            </div>`
    });
    elementApi.comunicacionLista.map((data,i) =>{
        layout.innerHTML +=`
            <section class="layout">
                <div class="lista">
                    <ul>
                        <li>${data.elemento}</li>
                            <p>${data.descripcion}</p>
                    </ul>
                </div>
                <div class="foto">
                    <img src="${data.imagen}">
                </div>
            </section>`
    });
})