export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');

  mapHref.forEach(elem=> {
    elem.addEventListener('click', function() {
      if (mapHref === 'юclose-popup') {
        elem.classList.remove('close-popup')
      }
    });
  });
}