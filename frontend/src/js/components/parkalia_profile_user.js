document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaProfileUserContent = document.querySelector(".parkalia-profile-user-content");
    if (!ParkaliaProfileUserContent) return;
    fetch("/frontend/src/html/components/parkalia_profile_user.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar parkalia_profile_user.html");}return response.text();})
        .then(data => {ParkaliaProfileUserContent.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
