document.addEventListener("DOMContentLoaded", () => {
    const NavbarGlobalLanding = document.querySelector(".parkalia-navbar-global-content");
    if (!NavbarGlobalLanding) return;
    fetch("/frontend/src/html/components/parkalia_navbar_global.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_navbar_global.html");}return response.text();})
        .then(data => {NavbarGlobalLanding.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
