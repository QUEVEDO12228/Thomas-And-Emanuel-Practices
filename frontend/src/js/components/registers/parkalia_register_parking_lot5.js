document.addEventListener("DOMContentLoaded", () => {
    const formRegister5Container = document.querySelector(".parkalia-register-parking-lot-5-container");
    if (!formRegister5Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot5.html")
        .then(r => r.text())
        .then(html => formRegister5Container.innerHTML = html)
        .catch(console.error);
});
