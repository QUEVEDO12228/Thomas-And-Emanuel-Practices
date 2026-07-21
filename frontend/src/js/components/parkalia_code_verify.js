document.addEventListener("DOMContentLoaded", () => {
    const formCodeVerifyContainer = document.querySelector(".parkalia-code-verify-container");
    if (!formCodeVerifyContainer) return;
    fetch("/frontend/src/html/components/parkalia_code_verify.html")
        .then(r => r.text())
        .then(html => formCodeVerifyContainer.innerHTML = html)
        .catch(console.error);
});
