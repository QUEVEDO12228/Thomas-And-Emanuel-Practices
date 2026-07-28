
document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaNotificationsHistoryContent = document.querySelector(".parkalia-notifications-history-content");
    if (!ParkaliaNotificationsHistoryContent) return;
    fetch("/frontend/src/html/components/parkalia_notifications_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_notifications_history.html");}return response.text();})
        .then(data => {ParkaliaNotificationsHistoryContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
