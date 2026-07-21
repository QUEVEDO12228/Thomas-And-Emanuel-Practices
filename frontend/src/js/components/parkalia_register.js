document.addEventListener("DOMContentLoaded", () => {
    const formRegisterContainer = document.querySelector(".parkalia-parkalia-register-container");
    if (!formRegisterContainer) return;
    fetch("/frontend/src/html/components/parkalia_register.html")
        .then(r => r.text())
        .then(html => formRegisterContainer.innerHTML = html)
        .catch(console.error);
});
