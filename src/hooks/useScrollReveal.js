import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const selectors = '.fade-up, .stat, .highlight-item, .module-card, .project-image-wrap, .project-content';
    document.querySelectorAll(selectors).forEach(el => observer.observe(el));

    document.querySelectorAll('.highlight-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.module-card').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
    });

    return () => observer.disconnect();
  }, []);
}
