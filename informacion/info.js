var url = "../contenido.json";
var titu = document.getElementById("cabecera");
var layout = document.getElementById("cuerpo");

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titu.innerHTML +=`
        <h1 class="titulo">${data.titulo2}</h1>
            <h2 class="subtitulo">${data.subtitulo2}</h2>`
    });
    elementApi.contenido.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="texto">
                <h1 class="titulo2">${data.titulo}</h1>
                <p>${data.que}</p>
            </div>
            <div class="foto">
                <img src=${data.imagen}>
            </div>
        </section>`
    });
    elementApi.contenidoListado.map((data,i) =>{
        layout.innerHTML +=`
            <div class="texto">
                <h1 class="titulo2">${data.titulo}</h1>
                <p>${data.que}</p>
            </div>
            <section class="layout">
                <div class="foto">
                    <img src="${data.imagen}">
                </div>
                <div class="lista">
                    <ul>
                        <li>${data.elemento1}</li>
                        <li>${data.elemento2}</li>
                        <li>${data.elemento3}</li>
                        <li>${data.elemento4}</li>
                        <li>${data.elemento5}</li>
                    </ul>
                </div>
            </section>`
    });
    elementApi.tipos.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="foto">
                <img src=${data.imagen}>
            </div>
            <div class="texto">
                <h1 class="titulo2">${data.titulo}</h1>
                <p>${data.descripcion}</p>    
            </div>
        </section>`
    });
    elementApi.titulos.map((data, i) =>{
        layout.innerHTML+=`
        <div class="enlace">
            <h1 class="titulo2">${data.sigPag}</h1>
                <h2 class="subtitulo2">${data.descripcion}</h2>
                    <a href="sintomas.html?page=${i}"><button class="enlacePag">Siguiente</button></a>
        </div>`
    });
})