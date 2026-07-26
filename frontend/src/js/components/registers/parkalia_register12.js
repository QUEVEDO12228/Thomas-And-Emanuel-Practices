document.addEventListener("DOMContentLoaded", () => {
    const formRegister12Container = document.querySelector(".parkalia-register12-container");
    if (!formRegister12Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register12.html")
        .then(r => r.text())
        .then(html => formRegister12Container.innerHTML = html)
        .catch(console.error);
});
