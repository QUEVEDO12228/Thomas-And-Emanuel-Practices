
document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaRealTimeContent = document.querySelector(".parkalia-realtime-content");
    if (!ParkaliaRealTimeContent) return;
    fetch("/frontend/src/html/components/parkalia_realtime.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_realtime.html");}return response.text();})
        .then(data => {ParkaliaRealTimeContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
