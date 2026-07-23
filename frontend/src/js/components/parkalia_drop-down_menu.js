document.addEventListener("DOMContentLoaded", () => {
    const menuContainer =document.querySelector(".parkalia-drop-down-menu-container");
    if (!menuContainer) return;
    fetch("/frontend/src/html/components/parkalia_drop-down_menu.html")
    .then(res => res.text()).then(html => {menuContainer.innerHTML = html;initparkaliaMenuDrawer();})
        .catch(err => console.error(err));
});
function initparkaliaMenuDrawer() {
    const menuButton = document.querySelector(".parkalia-navbar__menu-trigger");
    const drawer = document.querySelector(".parkalia-menu-drawer");
    const overlay = document.querySelector(".parkalia-menu-overlay");
    const closeButton = document.querySelector(".parkalia-menu-drawer__close");
    if (!menuButton || !drawer || !overlay) {return;}
    menuButton.addEventListener("click", () => {drawer.classList.add("parkalia-menu-drawer--active");
    overlay.classList.add("parkalia-menu-overlay--active");document.body.style.overflow = "hidden";});
    closeButton?.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {closeMenu();}});
    function closeMenu() {
        drawer.classList.remove("parkalia-menu-drawer--active");
        overlay.classList.remove("parkalia-menu-overlay--active");
        document.body.style.overflow = "";
    }
}