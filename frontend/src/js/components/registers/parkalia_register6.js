document.addEventListener("DOMContentLoaded", () => {
    const formRegister6Container = document.querySelector(".parkalia-register6-container");
    if (!formRegister6Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register6.html")
        .then(r => r.text())
        .then(html => formRegister6Container.innerHTML = html)
        .catch(console.error);
});
