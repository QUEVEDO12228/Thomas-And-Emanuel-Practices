document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaShiftOpeningContent = document.querySelector(".parkalia-shift-opening-content");
    if (!ParkaliaShiftOpeningContent) return;
    fetch("/frontend/src/html/components/parkalia_shift_opening.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_realtime.html");}return response.text();})
        .then(data => {ParkaliaShiftOpeningContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
