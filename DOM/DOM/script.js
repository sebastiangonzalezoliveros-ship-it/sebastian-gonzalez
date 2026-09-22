document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
   let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio; }

   //seleccion el boton por su id
   let boton = document.getElementById("cambiartexto");

   //agrego un evento "click" al boton
   boton.addEventListener("click", function() {
      //cambio el texto del boton usando "this"
      this.innerText = "! texto cambiadooo !";
      console.log("El texto del boton ha sido cambiado a: " + this.innerText);
   
   });

cambiado = false; // estado inicial del boton
textoOriginal = boton.textContent; // guardo el texto original 

boton.addEventListener("click", function() {
   if (!cambiado) {
      this.textContent = "¡Haz clic en mí!"; // cambio el texto del boton 
      cambiado = true;
   }
});