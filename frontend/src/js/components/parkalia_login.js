document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".parkalia-login-container");
    if (!container) return;
    fetch("/frontend/src/html/components/parkalia_login.html")
        .then(r => r.text())
        .then(html => container.innerHTML = html)
        .catch(console.error);
});

/* 
Claro. Tomemos esta versión:

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".parkalia-login-container");
    if (!container) return;

    fetch("/frontend/src/html/components/parkalia_login.html")
        .then(r => r.text())
        .then(html => container.innerHTML = html)
        .catch(console.error);
});
Línea 1
document.addEventListener("DOMContentLoaded", () => {
document representa toda la página HTML.
addEventListener() sirve para escuchar un evento.
"DOMContentLoaded" es el evento que ocurre cuando el navegador terminó de cargar el HTML.
() => { ... } es una función flecha que se ejecutará cuando ocurra ese evento.

Es como decir:

"Cuando la página termine de cargar, ejecuta este código."

Línea 2
const container = document.querySelector(".parkalia-login-container");
const crea una variable que no cambiará de referencia.
document.querySelector() busca un elemento en el HTML.
".parkalia-login-container" significa que busca un elemento con esa clase.

Por ejemplo, encuentra esto:

<div class="parkalia-login-container"></div>

y lo guarda en la variable container.

Línea 3
if (!container) return;

Esta línea verifica si el elemento fue encontrado.

!container significa "si container no existe".
return detiene la ejecución de la función.

Es equivalente a escribir:

if (container === null) {
    return;
}

Esto evita errores si el elemento no está en la página.

Línea 4
fetch("/frontend/src/html/components/parkalia_login.html")

fetch() hace una petición HTTP para obtener un recurso.

Aquí le está diciendo al navegador:

"Ve a esta ruta y trae el archivo parkalia_login.html."

Todavía no llega el archivo; la petición es asíncrona.

Línea 5
.then(r => r.text())

Cuando el servidor responde:

r es la respuesta (Response).
r.text() convierte esa respuesta en texto.

Si el archivo contiene:

<h1>Hola</h1>

entonces r.text() devolverá:

"<h1>Hola</h1>"
Línea 6
.then(html => container.innerHTML = html)

Aquí html contiene el texto que devolvió r.text().

Por ejemplo:

html = "<h1>Hola</h1>"

Luego hace:

container.innerHTML = html;

Es decir, reemplaza el contenido del contenedor por ese HTML.

Si el contenedor era:

<div class="parkalia-login-container"></div>

después queda:

<div class="parkalia-login-container">
    <h1>Hola</h1>
</div>
Línea 7
.catch(console.error);

Si ocurre un error (por ejemplo, el archivo no existe o la ruta es incorrecta), se ejecuta:

console.error(error);

y el error aparecerá en la consola del navegador.
*/