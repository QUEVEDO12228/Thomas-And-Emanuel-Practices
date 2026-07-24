document.addEventListener("DOMContentLoaded", () => {
    const formRegister9Container = document.querySelector(".parkalia-register9-container");
    if (!formRegister9Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register9.html")
        .then(r => r.text())
        .then(html => formRegister9Container.innerHTML = html)
        .catch(console.error);
});
