document.addEventListener("DOMContentLoaded", () => {
    const formRegister2Container = document.querySelector(".parkalia-register-parking-lot-2-container");
    if (!formRegister2Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot2.html")
        .then(r => r.text())
        .then(html => formRegister2Container.innerHTML = html)
        .catch(console.error);
});
