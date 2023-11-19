var titulo = document.getElementById("cabecera");
var layout2 = document.getElementById("cuerpo");
var url = window.location.href; // Parsea la URL y obtén los parámetros
var urlParams = new URL(url); // Ahora puedes acceder a los parámetros de la URL
var param1 = urlParams.searchParams.get("page"); // crea un parametro dentro de la url

function crear(parametro){
    fetch("../contenido.json")
    .then(data=>data.json())
    .then(Element=>{
        let index = param1 ? parseInt(param1) : 0; //evalua si el parametro tiene un valor o si se ingreso un valor al parametro
        let datos = Element[parametro][index];
        titulo.innerHTML+=`
            <h1 class="titulo">Comprendiendo la adaptacion Curricular</h1>
                <h2 class="subtitulo">Maneras de comprender y ayudar el progreso</h2>`
        Element.adaptacion.map((datos, i)=>{
        layout2.innerHTML+=`
            <section class="layout">
                <div class="foto">
                    <img src="${datos.imagen}">
                </div>
                <div class="texto">
                    <h1 class="titulo2">${datos.titulo}</h1>
                        <p>${datos.descripcion}</p>
                </div>
            </section>`
        });
        Element.metodologia.map((datos, i)=>{
            layout2.innerHTML+=`
                <div class="texto">
                    <h1 class="titulo2">${datos.titulo}</h1>
                        <p>${datos.descripcion}</p>
                </div>`
            });
        Element.metodologiaContenido.map((datos, i)=>{
            layout2.innerHTML+=`
                <section class="layout">
                    <div class="foto">
                        <img src="${datos.imagen}">
                    </div>
                    <div class="texto">
                        <h1 class="titulo2">${datos.titulo}</h1>
                            <p>${datos.descripcion}</p>
                    </div>`
            });

    });
}
crear("adaptacion")