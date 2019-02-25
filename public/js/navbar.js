var navToggleBtn = document.getElementById("nav-toggle");
var navbar = document.getElementById("navbar");
var branding = document.getElementById("branding");
var navLinks = document.getElementsByClassName("nav-link");
var logoutLink = document.getElementById("logout");
var loginLink = document.getElementById("login");
var meLink = document.getElementById("me");
var registerLink = document.getElementById("register");
var addProject = document.getElementById("addproject");


navToggleBtn.addEventListener("click", toggleNav);
logoutLink.addEventListener("click", handleLogout);
navToggleCount = 1;

function toggleNav() {
    if(navToggleCount == 0) {
        navToggleBtn.style.transform = "rotate(-180deg)";
        navbar.style.maxWidth = "1px";
        navToggleCount = 1;
    } else {
        navToggleBtn.style.transform = "rotate(0deg)";
        branding.style.display = "block";
        navbar.style.maxWidth = "20%";
        navToggleCount = 0;
    }
    
}

if(sessionStorage.getItem('auth')){
    handleLogin();
} else {
    handleLogout();
}

function handleLogin() {
    logoutLink.style.display = "block";
    meLink.style.display = "block";
    addProject.style.display = "block";
    loginLink.style.display = "none";
    registerLink.style.display = "none";

}

function handleLogout() {
    logoutLink.style.display = "none";
    meLink.style.display = "none";
    loginLink.style.display = "block";
    registerLink.style.display = "block";
    addProject.style.display = "none";
    sessionStorage.clear();
}
