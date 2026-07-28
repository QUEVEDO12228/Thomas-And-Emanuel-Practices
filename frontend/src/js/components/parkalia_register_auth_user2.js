document.addEventListener("DOMContentLoaded", () => {
    const formRegisterAuthUser2Container = document.querySelector(".parkalia-register-auth-user2-container");
    if (!formRegisterAuthUser2Container) return;
    fetch("/frontend/src/html/components/parkalia_register_auth_user2.html")
        .then(r => r.text())
        .then(html => formRegisterAuthUser2Container.innerHTML = html)
        .catch(console.error);
});
