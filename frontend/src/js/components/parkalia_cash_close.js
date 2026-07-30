document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaCashCloseContainer = document.querySelector(".parkalia-cash-close-container");
    if (!ParkaliaCashCloseContainer) return;
    fetch("/frontend/src/html/components/parkalia_cash_close.html")
        .then(r => r.text())
        .then(html => ParkaliaCashCloseContainer.innerHTML = html)
        .catch(console.error);
});
