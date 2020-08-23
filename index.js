const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
let mobileMenuVisible = false;

mobileMenuButton.addEventListener("click", ()=>{
    if(mobileMenuVisible)
        mobileMenu.style.display = "none";
    else
        mobileMenu.style.display = "flex";

    mobileMenuVisible = !mobileMenuVisible;
    //console.log(mobileMenu.style.display);
})