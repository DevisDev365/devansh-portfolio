import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState(sectionIds[0] || 'about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = sectionIds[0] || 'about';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds.join(',')]);

  return active;
};
