const sideBarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".sidebar");
const menuToggler = document.querySelector(".menu-toggler");

const collapseSidebarHieght = "56px";
const fullSidebarHeight = "calc(100vh - 32px)";
sideBarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive
    ? `${sidebar.scrollHeight}px`
    : collapseSidebarHieght;
  menuToggler.querySelector("span").innerHTML = isMenuActive ? "close" : "menu";
};

menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collased");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});
