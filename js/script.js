const body = document.body;
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('site-menu');
const menuLinks = menu ? Array.from(menu.querySelectorAll('a')) : [];

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!body.classList.contains('menu-open')) {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (!menu.contains(target) && !menuToggle.contains(target)) {
      body.classList.remove('menu-open');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      body.classList.remove('menu-open');
    }
  });
}

const yearNodes = document.querySelectorAll('#year');
yearNodes.forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const revealNodes = Array.from(document.querySelectorAll('.reveal'));
revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
}

const pageSections = Array.from(document.querySelectorAll('main section[id]'));
const hashLinks = menuLinks.filter((link) => link.getAttribute('href')?.startsWith('#'));

if (pageSections.length > 0 && hashLinks.length > 0) {
  const syncActiveSection = () => {
    const scrollY = window.scrollY + 150;

    pageSections.forEach((section) => {
      const id = section.getAttribute('id');
      if (!id) {
        return;
      }

      const start = section.offsetTop;
      const end = start + section.offsetHeight;
      const match = scrollY >= start && scrollY < end;

      const menuLink = menu.querySelector(`a[href="#${id}"]`);
      if (menuLink) {
        menuLink.classList.toggle('active', match);
      }
    });
  };

  window.addEventListener('scroll', syncActiveSection, { passive: true });
  syncActiveSection();
}
