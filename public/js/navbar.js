var navToggleBtn = document.getElementById("nav-toggle");
var navbar = document.getElementById("navbar");
var branding = document.getElementById("branding");
var navLinks = document.getElementsByClassName("nav-link");

navToggleBtn.addEventListener("click", toggleNav);

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