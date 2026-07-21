document.addEventListener("DOMContentLoaded", () => {
    const formResetPasswordContainer = document.querySelector(".parkalia-reset-password-container");
    if (!formResetPasswordContainer) return;
    fetch("/frontend/src/html/components/parkalia_reset_password.html")
        .then(r => r.text())
        .then(html => formResetPasswordContainer.innerHTML = html)
        .catch(console.error);
});
