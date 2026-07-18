document.addEventListener("DOMContentLoaded", () => {
    const formForgotPasswordContainer = document.querySelector(".parkalia-forgot-password-container");

    if (!formForgotPasswordContainer) return;

    fetch("/frontend/src/html/components/parkalia_forgot_password.html")
        .then(res => res.text())
        .then(html => {
            formForgotPasswordContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});