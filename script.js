
"use strict";

// Show a welcome message in the browser console
console.log("Welcome to Digital Hub!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Update the footer year automatically
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.innerHTML =
    `Copyright &copy; ${new Date().getFullYear()} Digital Hub. All rights reserved.`;
}
