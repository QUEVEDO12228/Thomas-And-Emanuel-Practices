document.addEventListener("DOMContentLoaded", () => {
    const formRegister7Container = document.querySelector(".parkalia-register7-container");
    if (!formRegister7Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register7.html")
        .then(r => r.text())
        .then(html => formRegister7Container.innerHTML = html)
        .catch(console.error);
});
