const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() {
    if (loginBtn.innerText == "Iniciar sesión") {
        loginBtn.innerText = "Cerrar sesión";
    } else {
        loginBtn.innerText = "Iniciar sesión";
    }
});

const profileBtn = document.getElementById("profileBtn");

profileBtn.addEventListener("click", function() {
    alert("Cargando perfil...");
});

const likeBtn1 = document.getElementById("likeBtn1");

likeBtn1.addEventListener("click", function() {
    const contador = likeBtn1.querySelector(".like-count");
    contador.innerText++;
});

const likeBtn2 = document.getElementById("likeBtn2");

likeBtn2.addEventListener("click", function() {
    const contador = likeBtn2.querySelector(".like-count");
    contador.innerText++;
});

const searchInput = document.getElementById("searchInput");
const publicaciones = document.querySelectorAll(".post");

searchInput.addEventListener("input", function() {
    const texto = searchInput.value.toLowerCase();

    publicaciones.forEach(function(publicacion) {
        const titulo = publicacion.querySelector("h2").innerText.toLowerCase();

        if (titulo.includes(texto)) {
            publicacion.style.display = "block";
        } else {
            publicacion.style.display = "none";
        }
    });
});
