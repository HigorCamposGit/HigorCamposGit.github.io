
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav--mobile');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
