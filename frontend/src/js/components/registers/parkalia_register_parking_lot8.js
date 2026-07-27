document.addEventListener("DOMContentLoaded", () => {
    const formRegister8Container = document.querySelector(".parkalia-register-parking-lot-8-container");
    if (!formRegister8Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot8.html")
        .then(r => r.text())
        .then(html => formRegister8Container.innerHTML = html)
        .catch(console.error);
});
