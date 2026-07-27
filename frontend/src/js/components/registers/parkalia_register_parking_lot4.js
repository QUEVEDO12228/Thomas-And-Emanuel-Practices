document.addEventListener("DOMContentLoaded", () => {
    const formRegister4Container = document.querySelector(".parkalia-register-parking-lot-4-container");
    if (!formRegister4Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot4.html")
        .then(r => r.text())
        .then(html => formRegister4Container.innerHTML = html)
        .catch(console.error);
});
