/**
 * THEME MODULE
 * Handles dark/light mode toggling with localStorage persistence.
 */

const Theme = (() => {
  const STORAGE_KEY = "xub-theme";

  /**
   * Get the user's preferred theme from localStorage or system preference.
   * @returns {'dark'|'light'}
   */
  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  /**
   * Apply theme to the document.
   * @param {'dark'|'light'} theme
   */
  function apply(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    updateButton(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Update the toggle button icon.
   * @param {'dark'|'light'} theme
   */
  function updateButton(theme) {
    const btn = document.getElementById("theme-btn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute(
        "aria-label",
        `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      );
    }
  }

  /**
   * Toggle between dark and light mode.
   */
  function toggle() {
    const isDark = document.documentElement.classList.contains("dark");
    apply(isDark ? "light" : "dark");
  }

  /**
   * Initialize theme on page load.
   */
  function init() {
    const theme = getPreferred();
    apply(theme);

    const btn = document.getElementById("theme-btn");
    if (btn) {
      btn.addEventListener("click", toggle);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (!localStorage.getItem(STORAGE_KEY)) {
            apply(e.matches ? "dark" : "light");
          }
        });
    }
  }

  return { init, toggle };
})();
