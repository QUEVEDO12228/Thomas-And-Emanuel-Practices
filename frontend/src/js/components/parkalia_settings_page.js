
document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaSettingsPageContent = document.querySelector(".parkalia-settings-page-content");
    if (!ParkaliaSettingsPageContent) return;
    fetch("/frontend/src/html/components/parkalia_settings_page.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_settings_page.html");}return response.text();})
        .then(data => {ParkaliaSettingsPageContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
