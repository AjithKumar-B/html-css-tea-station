const side_blade_windowEl = document.querySelector(".side_blade_window");
const cancel_arrowEl = document.querySelector(".cancel_arrow");
const side_menu_barEl = document.querySelector(".side_menu_bar");

side_menu_barEl.addEventListener("click", () => {
  side_blade_windowEl.classList.add("side_blade_window_open");
});

cancel_arrowEl.addEventListener("click", () => {
  side_blade_windowEl.classList.remove("side_blade_window_open");
});
