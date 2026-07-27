document.addEventListener("DOMContentLoaded", () => {
    const formRegister3Container = document.querySelector(".parkalia-register-parking-lot-3-container");
    if (!formRegister3Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot3.html")
        .then(r => r.text())
        .then(html => formRegister3Container.innerHTML = html)
        .catch(console.error);
});
