document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaSecurityHistoryContent = document.querySelector(".parkalia-security-history-content");
    if (!ParkaliaSecurityHistoryContent) return;
    fetch("/frontend/src/html/components/parkalia_security_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_security_history.html");}return response.text();})
        .then(data => {ParkaliaSecurityHistoryContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
