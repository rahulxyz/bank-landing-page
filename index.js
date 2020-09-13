const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navItem = document.getElementsByClassName("nav-item");

let mobileMenuVisible = false;

mobileMenuButton.addEventListener("click", ()=>{
    if(mobileMenuVisible)
        mobileMenu.style.display = "none";
    else
        mobileMenu.style.display = "flex";

    mobileMenuVisible = !mobileMenuVisible;
});
