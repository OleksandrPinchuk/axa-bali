(() => {
  const popUp = document.querySelector('.js-popup-container');
  const openPopUpBtn = document.querySelector('.js-open-popup');
  const closePopUpBtn = document.querySelector('.js-close-popup');

  if (!popUp || !openPopUpBtn) return;

  let isAnimating = false;

  const togglePopUp = (open) => {
    if (isAnimating) return;
    const isOpen = popUp.classList.contains('is-open');
    const willOpen = open !== undefined ? open : !isOpen;

    if (willOpen === isOpen) return;

    isAnimating = true;

    if (willOpen) {
      popUp.classList.add('is-opening');
      document.body.classList.add('no-scroll');
      requestAnimationFrame(() => {
        popUp.classList.add('is-open');
        popUp.addEventListener('transitionend', () => {
          popUp.classList.remove('is-opening');
          isAnimating = false;
        }, { once: true });
      });
    } else {
      popUp.classList.add('is-closing');
      popUp.classList.remove('is-open');
      popUp.addEventListener('transitionend', () => {
        popUp.classList.remove('is-closing');
        document.body.classList.remove('no-scroll');
        isAnimating = false;
      }, { once: true });
    }

    openPopUpBtn.setAttribute('aria-expanded', String(willOpen));
  };

  openPopUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    togglePopUp(true);
  });

  closePopUpBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    togglePopUp(false);
  });

  document.addEventListener('click', (e) => {
    if (!popUp.classList.contains('is-open')) return;
    if (!popUp.contains(e.target) && e.target !== openPopUpBtn) {
      togglePopUp(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popUp.classList.contains('is-open')) {
      togglePopUp(false);
    }
  });
})();

// (() => {
//   const popUp = document.querySelector('.js-popup-container');
//   const openPopUpBtn = document.querySelector('.js-open-popup');
//   const closePopUpBtn = document.querySelector('.js-close-popup');

//   if (!popUp || !openPopUpBtn) return;

//   const togglePopUp = (e) => {
//     e.preventDefault();
//     const isPopUpOpen =
//     openPopUpBtn.getAttribute('aria-expanded') === 'true' || false;
//     openPopUpBtn.setAttribute('aria-expanded', String(!isPopUpOpen));
//     popUp.classList.toggle('is-open');
//     console.log("tooogle")
//     document.body.classList.toggle('no-scroll', !isPopUpOpen);
//   };

//   openPopUpBtn?.addEventListener('click', togglePopUp);
//   closePopUpBtn?.addEventListener('click', togglePopUp);

//   document.addEventListener('click', (e) => {
//     if (!popUp.classList.contains('is-open')) return;
//     if (!popUp.contains(e.target) && e.target !== openPopUpBtn) {
//       togglePopUp(false);
//     };

//     document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && popUp.classList.contains('is-open')) {
//       togglePopUp(false);
//     }
//   });
//   });

//     // Close the mobile menu on wider screens if the device orientation changes
// //   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
// //     if (!e.matches) return;
// //     mobileMenu.classList.remove('is-open');
// //     openMenuBtn.setAttribute('aria-expanded', false);
// //     document.body.classList.remove('no-scroll')
// // });
// })();

// (() => {
//     const refs = {
//       openPopUpBtn: document.querySelector("[data-popup-open]"),
//       closePopUpBtn: document.querySelector("[data-popup-close]"),
//       popup: document.querySelector("[data-popup]"),
//     };

//     refs.openPopUpBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       togglePopUp();
//     });
//     refs.closePopUpBtn.addEventListener("click", togglePopUp);

//   function togglePopUp() {
//       console.log("toggle is-hidden")
//       refs.popup.classList.toggle("is-hidden");
//     }
//   })();

