

function checkMenuState() {
    var isMobile = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var navMenu = document.getElementById("navigation-menu-mobile");
    var navMenuIcon = document.getElementById("hamburger_btn")
    var menuState = navMenu.getAttribute("data-menuOpen");
    if (menuState == "open" && isMobile < 1025 ) {
        navMenu.setAttribute("data-menuOpen", "closed");
        navMenu.style.display = "none";
        navMenuIcon.src="./icons und Logos/sevent-sandwich.svg";
        console.log("menu-closed");
    } else if (menuState == "closed" && isMobile < 1025 ) {
        navMenu.style.display = "flex";
        navMenu.setAttribute("data-menuOpen", "open");
        navMenuIcon.src="./icons und Logos/close.svg";
        console.log("menu-open");
    }
}