document.addEventListener("DOMContentLoaded", () => {
    const formRegister3Container = document.querySelector(".parkalia-register3-container");
    if (!formRegister3Container) return;
    fetch("/frontend/src/html/components/registers/parkalia_register3.html")
        .then(r => r.text())
        .then(html => formRegister3Container.innerHTML = html)
        .catch(console.error);
});
