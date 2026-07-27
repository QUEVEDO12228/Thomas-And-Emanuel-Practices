document.addEventListener("DOMContentLoaded", () => {
    const formRegisterContainer = document.querySelector(".parkalia-register-parking-lot-container");
    if (!formRegisterContainer) return;
    fetch("/frontend/src/html/components/registers/parkalia_register_parking_lot.html")
        .then(r => r.text())
        .then(html => formRegisterContainer.innerHTML = html)
        .catch(console.error);
});
