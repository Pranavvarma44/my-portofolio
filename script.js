document.addEventListener("DOMContentLoaded", () => {

  // Scroll reveal
  const elements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .stat-card"
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elements.forEach((element) => observer.observe(element));


  // Highlight navbar link while scrolling
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("active-nav");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-nav");
      }

    });

  });

});
