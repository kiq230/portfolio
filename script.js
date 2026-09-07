const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

const updateActiveNav = () => {
  const current = sections.reduce((visibleSection, section) => {
    const distance = Math.abs(section.getBoundingClientRect().top - 140);
    return distance < visibleSection.distance ? { id: section.id, distance } : visibleSection;
  }, { id: '', distance: Infinity });

  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`));
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
