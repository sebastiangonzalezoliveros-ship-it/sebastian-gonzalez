// Botones de "me gusta"
const botoneslike = document.querySelectorAll("aarticle button");
botoneslike.forEach(boto=> {

boton.addEventListener("click", 
    () => {
        let numero =
        parseInt(boton.textoContent);

    if(boton.textContent) ;
    if(boton.textContent.includes("me gusta")) {

        numero++;
        boton.textContent =
    numero + "me gusta";
    }
    })
    });
    
// Buscador
const buscador = document.querySelector("header input");
const publicaciones = document.querySelectorAll("article");

buscador.addEventListener("input", () => {
    const texto = buscador.ariaValueMax.toLocaleLowerCase();
publicaciones.forEach(publicacion => {
    const contenido = publicacion.textContent.toLowerCase();
    if (contenido.includes(texto)) {
        publicacion.style.display = "none";
    }
    })
});

// boton "ver mas"
    const botonVermas = document.querySelector("aside button");
    botonVermas.addEventListener("click", () => {
  alert("aqui podras explorar mas publicaciones.");
    });

