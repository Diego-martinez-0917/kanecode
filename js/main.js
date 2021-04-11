const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".sidemenu");
const imgHeader = document.querySelector(".img-header");
const mainContainer = document.querySelector(".main-container");


menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let menuState = menu.classList[1];
  switch (menuState) {
    case "menu-expanded":
      menu.classList.replace("menu-expanded", "menu-collapsed");
      imgHeader.setAttribute("src", "../images/P.svg");
      mainContainer.classList.replace(
        "container-expanded",
        "container-collapsed"
      );
      break;
    case "menu-collapsed":
      menu.classList.replace("menu-collapsed", "menu-expanded");
      imgHeader.setAttribute("src", "../images/Prendo.svg");
      mainContainer.classList.replace(
        "container-collapsed",
        "container-expanded"
      );
      break;
    default:
      break;
  }
});

