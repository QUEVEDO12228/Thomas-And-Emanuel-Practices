document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaCashContainer = document.querySelector(".parkalia-cash-container");
    if (!ParkaliaCashContainer) return;
    fetch("/frontend/src/html/components/parkalia_cash.html")
        .then(r => r.text())
        .then(html => ParkaliaCashContainer.innerHTML = html)
        .catch(console.error);
});
