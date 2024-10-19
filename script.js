function toggleMenu() {

  // the two elements we target
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // the action on those elements
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}