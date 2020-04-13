var navbarhome = document.getElementById("navbarhome");
var active = navbarhome.classList.contains("active");
var hovernavbar = navbarhome.classList.contains("hovernavbar");
var NavbarEls = document.getElementById("navbar");
if (navbarhome.classList.contains("active")) {
  navbarhome.style.borderTopLeftRadius = "0px";
  navbarhome.style.borderBottomLeftRadius = "0px";
  navbarhome.style.backgroundColor = "rgb(224, 176, 17)";
}
else {
  NavbarEls.style.borderTopLeftRadius = "20px";
  NavbarEls.style.borderBottomLeftRadius = "20px";
}

if (navbarhome.classList.contains("active")) {
  navbarhome.style.borderTopLeftRadius = "0px";
  navbarhome.style.borderBottomLeftRadius = "0px";
}
 