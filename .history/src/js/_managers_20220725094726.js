export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');
  navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));

  mapHref.forEach(elem=> {
    elem.addEventListener('click', function() {
      elem.classList.toggle('close-popup')
    });
  });
}