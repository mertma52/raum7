

function checkMenuState() {
    var navMenu = document.getElementById("navigation-menu-mobile");
    var menuState = navMenu.getAttribute("data-menuOpen");
    if (menuState == "open") {
        navMenu.setAttribute("data-menuOpen", "closed");
        navMenu.style.display = "none";
        console.log("menu-closed");
    } else if (menuState == "closed") {
        navMenu.style.display = "flex";
        navMenu.setAttribute("data-menuOpen", "open");
        console.log("menu-open");
    }
}