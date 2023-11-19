var url = "../contenido.json";
var titulo = document.getElementById("cabecera");
var layout = document.getElementById("cuerpo");

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titulo.innerHTML +=`
        <h1 class="titulo">${data.titulo3}</h1>
            <h2 class="subtitulo">${data.subtitulo2}</h2>`
    });
    elementApi.educacion.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="texto">
                <h1 class="subtitulo2">${data.titulo}</h1>
                    <p>${data.descripcion}</p>
            </div>
            <div class="foto">
                <img src=${data.imagen}>
            </div>
        </section>`
    });
    elementApi.titulos.map(data =>{
        layout.innerHTML +=`
            <div class="texto">
                <h1 class="titulo2">${data.titulo6}</h1>
            </div>`
    });
    elementApi.educacionLista.map((data,i) =>{
        layout.innerHTML +=`
            <section class="layout">
                <div class="lista">
                    <ul>
                        <li>${data.elemento}</li>
                    </ul>
                </div>
            </section>`
    });
    elementApi.educacion2.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="texto">
                <h1 class="subtitulo2">${data.titulo}</h1>
                    <p>${data.descripcion}</p>
            </div>
            <div class="foto">
                <img src=${data.imagen}>
            </div>
        </section>`
    });
    elementApi.intervencion.map((data,i) =>{
        layout.innerHTML +=`
            <section class="layout">
                <div class="lista">
                    <ul>
                        <li>${data.elemento}</li>
                    </ul>
                </div>
            </section>`
    });
    elementApi.titulos.map((data, i) =>{
        layout.innerHTML+=`
        <div class="enlace">
            <h1 class="titulo2">${data.sigPag2}</h1>
                <h2 class="subtitulo2">${data.descripcion}</h2>
                    <a href="adaptacion.html?page=${i}">
                        <button class="enlacePag">Siguiente</button>
                    </a>
        </div>`
    });
})