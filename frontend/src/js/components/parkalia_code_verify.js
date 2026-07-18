document.addEventListener("DOMContentLoaded", () => {
    const formCodeVerifyContainer = document.querySelector(".parkalia-code-verify-container");

    if (!formCodeVerifyContainer) return;

    fetch("/frontend/src/html/components/parkalia_code_verify.html")
        .then(res => res.text())
        .then(html => {
            formCodeVerifyContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});