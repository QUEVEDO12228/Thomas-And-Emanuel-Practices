document.addEventListener("DOMContentLoaded", () => {
    const formRegister10Container = document.querySelector(".parkalia-register-parking-lot-10-container");
    if (!formRegister10Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot10.html")
        .then(r => r.text())
        .then(html => formRegister10Container.innerHTML = html)
        .catch(console.error);
});
