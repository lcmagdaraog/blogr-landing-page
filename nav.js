const mobileOpen = document.getElementById("mobile-open");
nav = document.querySelector("nav");
mobileClose = document.getElementById("mobile-close");

mobileOpen.addEventListener("click", () => {
  nav.classList.add("menu");
  mobileOpen.classList.add("hidden");
});

mobileClose.addEventListener("click", () => {
  nav.classList.remove("menu");
  mobileOpen.classList.remove("hidden");
});
