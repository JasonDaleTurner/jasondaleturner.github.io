// Highlights the active dot in the fallback carousel navigation
(function () {
  const carousel = document.querySelector('.carousel');
  const dotsNav = document.querySelector('.carousel-dots');
  if (!carousel || !dotsNav) return;

  const items = carousel.querySelectorAll('li[id]');
  const dots = dotsNav.querySelectorAll('.dot');

  const setActive = (id) => {
    dots.forEach((dot) => {
      const isMatch = dot.getAttribute('href') === `#${id}`;
      dot.classList.toggle('is-active', isMatch);
      if (isMatch) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { root: carousel, threshold: 0.6 }
  );

  items.forEach((item) => observer.observe(item));
})();
