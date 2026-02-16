import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";

const app = document.getElementById("app");

// Render first
app.innerHTML += Navbar();
app.innerHTML += Hero();

// Initialize icons
lucide.createIcons();

/* ------------------- */
/* Mobile Toggle Logic */
/* ------------------- */

const toggle = document.getElementById("mobileToggle");
const menu = document.getElementById("mobileMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/* ------------------- */
/* Active Link Logic   */
/* ------------------- */

const currentPath = window.location.pathname;

document.querySelectorAll(".nav-link").forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});