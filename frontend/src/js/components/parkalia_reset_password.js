document.addEventListener("DOMContentLoaded", () => {
    const formResetPasswordContainer = document.querySelector(".parkalia-reset-password-container");

    if (!formResetPasswordContainer) return;

    fetch("/frontend/src/html/components/parkalia_reset_password.html")
        .then(res => res.text())
        .then(html => {
            formResetPasswordContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});