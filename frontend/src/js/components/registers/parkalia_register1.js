document.addEventListener("DOMContentLoaded", () => {
    const formRegister1Container = document.querySelector(".parkalia-register1-container");
    if (!formRegister1Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register1.html")
        .then(r => r.text())
        .then(html => formRegister1Container.innerHTML = html)
        .catch(console.error);
});
