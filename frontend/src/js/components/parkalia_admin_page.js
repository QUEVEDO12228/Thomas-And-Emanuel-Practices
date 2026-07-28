document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaAdminPageContent = document.querySelector(".parkalia-parkalia-admin-page-content");
    if (!ParkaliaAdminPageContent) return;
    fetch("/frontend/src/html/components/parkalia_admin_page.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_admin_page.html");}return response.text();})
        .then(data => {ParkaliaAdminPageContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
