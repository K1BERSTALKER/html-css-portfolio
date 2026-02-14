/**
 * MAIN ENTRY POINT
 * Initializes theme, renders content, and sets up interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme (dark/light mode)
  Theme.init();

  // Render all dynamic content
  Render.all();

  // Smooth scroll for navigation links (polyfill for older browsers)
  setupSmoothScroll();

  // Contact form handler
  setupContactForm();

  // Active nav link highlighting on scroll
  setupScrollSpy();
});

/**
 * Smooth scroll handler for anchor links.
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * Contact form submission handler.
 */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    form.querySelectorAll("input, textarea").forEach((field) => {
      data[field.placeholder] = field.value;
    });

    console.log("Form submitted:", data);

    // Visual feedback
    const btn = form.querySelector(".btn--submit");
    const originalText = btn.textContent;
    btn.textContent = "✓ Sent!";
    btn.style.backgroundColor = "#22c55e";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.backgroundColor = "";
      form.reset();
    }, 2000);
  });
}

/**
 * Scroll spy – highlights the active nav link based on scroll position.
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.style.color = "";
            if (link.getAttribute("href") === `#${id}`) {
              link.style.color = "var(--color-primary-600)";
            }
          });
        }
      });
    },
    {
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}
