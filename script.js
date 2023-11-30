// script.js
document.addEventListener("DOMContentLoaded", function() {
   // declaración y asignación de variable utilizando DOM
   let tabla = document.querySelector("table");

   // función para diferenciar los eventos click y doble click
   function eventos() {
      let retraso = 400, clicks = 0, tiempo = null;
      tabla.addEventListener("click", function(e) {
         clicks++;  // contar clics
         if (clicks === 1) { // si click es exactamente 1
            // utilizo un temporizador
            tiempo = setTimeout(function() {
               alert("Has hecho Click con el botón izquierdo"); //realizar acción de un solo clic
               clicks = 0;  //después de realizar la acción, restablecer el contador
            }, retraso);
         } else { // si click es mayor de 1
            clearTimeout(tiempo); //prevenir la acción de un solo clic
            alert("Has hecho Doble Click con el botón izquierdo"); //realizar la acción de doble clic
            clicks = 0; //después de realizar la acción, restablecer el contador
         }
      });
      tabla.addEventListener("dblclick", function(e) {
         e.preventDefault();  //después de realizar la acción, restablecer el contador
      });
   }

   // permanecer a la escucha del evento menú contextual
   tabla.addEventListener("contextmenu", function(e) {
      alert("Has hecho Click en el botón derecho");
      e.preventDefault(); // evitar la aparición del menú contextual
   });

   // La siguiente función se invoca con el controlador on para los eventos mousedown y mouseup, permite cambiar el color del texto del caption de la tabla
   function cambiarColor(e, color) {
      e.style.color = color;
      alert("El texto de caption cambiará a naranja. Evento: mouseup")
   }

   //función para mejorar la accesibilidad con modo oscuro con CSS
   function modoOscuro() {
      let todo = document.body; // afecta a todo el body
      todo.classList.toggle("modo-oscuro");
   }

   eventos(); // invocar a la función de control de clics 
});
