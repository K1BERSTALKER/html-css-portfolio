/**
 * RENDER MODULE
 * Handles dynamic rendering of skills, projects, socials, and footer links.
 */

const Render = (() => {
  /**
   * Render skill cards into the skills grid.
   */
  function skills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    DATA.skills.forEach((skill, idx) => {
      const card = document.createElement("div");

      // Determine wide cards (index 0 and 5 span 2 columns on large screens)
      const isWide = idx === 0 || idx === 5;

      card.className =
        "bento-card glass" + (isWide ? " skills-grid__item--wide" : "");

      const categoryLabel =
        skill.category.charAt(0).toUpperCase() + skill.category.slice(1);

      card.innerHTML = `
        <div class="bento-card__bg-icon">${skill.icon}</div>
        <div class="bento-card__content">
          <div class="bento-card__icon">${skill.icon}</div>
          <h3 class="bento-card__title font-display">${skill.name}</h3>
        </div>
        <div class="bento-card__tag-wrapper">
          <span class="bento-card__tag">${categoryLabel}</span>
        </div>
      `;

      container.appendChild(card);
    });
  }

  /**
   * Render project cards into the projects grid.
   */
  function projects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    DATA.projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img
          src="${project.imageUrl}"
          alt="${project.title}"
          class="project-card__image"
          loading="lazy"
        />
        <div class="project-card__overlay">
          <h3 class="project-card__title font-display">${project.title}</h3>
          <p class="project-card__description line-clamp-2">${project.description}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }

  /**
   * Render social buttons in the footer.
   */
  function socials() {
    const container = document.getElementById("socials");
    if (!container) return;

    DATA.socials.forEach((name) => {
      const btn = document.createElement("button");
      btn.className = "social-btn glass";
      btn.textContent = name;
      container.appendChild(btn);
    });
  }

  /**
   * Render footer navigation links.
   */
  function footerLinks() {
    const container = document.getElementById("footer-links");
    if (!container) return;

    DATA.footerLinks.forEach((label) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.href = `#${label.toLowerCase()}`;
      a.className = "footer-link";

      const bar = document.createElement("span");
      bar.className = "footer-link__bar";

      a.appendChild(bar);
      a.appendChild(document.createTextNode(label));
      li.appendChild(a);
      container.appendChild(li);
    });
  }

  /**
   * Render all dynamic content.
   */
  function all() {
    skills();
    projects();
    socials();
    footerLinks();
  }

  return { all, skills, projects, socials, footerLinks };
})();
