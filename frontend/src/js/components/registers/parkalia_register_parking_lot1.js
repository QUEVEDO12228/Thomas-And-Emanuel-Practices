document.addEventListener("DOMContentLoaded", () => {
    const formRegister1Container = document.querySelector(".parkalia-register-parking-lot-1-container");
    if (!formRegister1Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot1.html")
        .then(r => r.text())
        .then(html => formRegister1Container.innerHTML = html)
        .catch(console.error);
});
