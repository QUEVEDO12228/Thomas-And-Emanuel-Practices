document.addEventListener("DOMContentLoaded", () => {
    const formRegister8Container = document.querySelector(".parkalia-register8-container");
    if (!formRegister8Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register8.html")
        .then(r => r.text())
        .then(html => formRegister8Container.innerHTML = html)
        .catch(console.error);
});
