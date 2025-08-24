(() => {
  const form = document.querySelector('.js-form-container');
  const openFormBtns = document.querySelectorAll('.js-open-form');

  if (!form || !openFormBtns.length) return;

  let isAnimating = false;

  const toggleForm = (open) => {
    if (isAnimating) return;
    const isOpen = form.classList.contains('is-open');
    const willOpen = open !== undefined ? open : !isOpen;

    if (willOpen === isOpen) return;

    isAnimating = true;

    if (willOpen) {
      form.classList.add('is-opening');
      document.body.classList.add('no-scroll');
      requestAnimationFrame(() => {
        form.classList.add('is-open');
        form.addEventListener('transitionend', () => {
          form.classList.remove('is-opening');
          isAnimating = false;
        }, { once: true });
      });
    } else {
      form.classList.add('is-closing');
      form.classList.remove('is-open');
      form.addEventListener('transitionend', () => {
        form.classList.remove('is-closing');
        document.body.classList.remove('no-scroll');
        isAnimating = false;
      }, { once: true });
    }

    openFormBtns.forEach((btn) => {
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  };

  openFormBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleForm(true);
    });
  });

  form.addEventListener('click', (e) => {
    if (e.target.closest('.js-close-form')) {
      e.preventDefault();
      toggleForm(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (!form.classList.contains('is-open')) return;
    if (!form.contains(e.target) && e.target !== openFormBtn) {
      toggleForm(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && form.classList.contains('is-open')) {
      toggleForm(false);
    }
  });
})();

