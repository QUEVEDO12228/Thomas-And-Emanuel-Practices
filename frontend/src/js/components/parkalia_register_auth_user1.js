document.addEventListener("DOMContentLoaded", () => {
    const formRegisterauth1Container = document.querySelector(".parkalia-register-auth-user1-container");
    if (!formRegisterauth1Container) return;
    fetch("/frontend/src/html/components/parkalia_register_auth_user1.html")
        .then(r => r.text())
        .then(html => formRegisterauth1Container.innerHTML = html)
        .catch(console.error);
});
