document.addEventListener("DOMContentLoaded", () => {
    const ParkaliaDashboardContainer = document.querySelector(".parkalia-dashboard-container");
    if (!ParkaliaDashboardContainer) return;
    fetch("/frontend/src/html/components/parkalia_dashboard.html")
        .then(r => r.text())
        .then(html => ParkaliaDashboardContainer.innerHTML = html)
        .catch(console.error);
});
