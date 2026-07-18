document.addEventListener("DOMContentLoaded", () => {
    const formLoginContainer = document.querySelector(".parkalia-login-container");

    if (!formLoginContainer) return;

    fetch("/frontend/src/html/components/parkalia_login.html")
        .then(res => res.text())
        .then(html => {
            formLoginContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});