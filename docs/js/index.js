const navbar = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navbar.addEventListener("click", () => {
    navbar.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
});
