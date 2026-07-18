document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaTopOffersContainer = document.querySelector(".parkalia-parkalia-top-offers-container");

    if (!ParkaliaTopOffersContainer) return;

    fetch("/frontend/src/html/components/parkalia_top_offers.html")
        .then(res => res.text())
        .then(html => {
            ParkaliaTopOffersContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});