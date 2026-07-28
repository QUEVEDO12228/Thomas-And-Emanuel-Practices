document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaHelpStatusContent = document.querySelector(".parkalia-parkalia-help-status-content");
    if (!ParkaliaHelpStatusContent) return;
    fetch("/frontend/src/html/components/parkalia_help_status.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_help_status.html");}return response.text();})
        .then(data => {ParkaliaHelpStatusContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
