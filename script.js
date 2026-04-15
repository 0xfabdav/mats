const revealEls = document.querySelectorAll('.reveal');

const setTimeTheme = () => {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 16) {
    body.dataset.timeTheme = 'day';
    return;
  }

  if (hour >= 16 && hour < 20) {
    body.dataset.timeTheme = 'dusk';
    return;
  }

  body.dataset.timeTheme = 'night';
};

setTimeTheme();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
  }
);

revealEls.forEach((el) => observer.observe(el));
