document.addEventListener("DOMContentLoaded", () => {
    const formForgotPasswordContainer = document.querySelector(".parkalia-forgot-password-container");
    if (!formForgotPasswordContainer) return;
    fetch("/frontend/src/html/components/parkalia_forgot_password.html")
        .then(r => r.text())
        .then(html => formForgotPasswordContainer.innerHTML = html)
        .catch(console.error);
});
