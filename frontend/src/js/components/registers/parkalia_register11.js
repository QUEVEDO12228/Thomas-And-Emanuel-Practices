document.addEventListener("DOMContentLoaded", () => {
    const formRegister11Container = document.querySelector(".parkalia-register11-container");
    if (!formRegister11Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register11.html")
        .then(r => r.text())
        .then(html => formRegister11Container.innerHTML = html)
        .catch(console.error);
});
