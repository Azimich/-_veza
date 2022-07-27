export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');

  mapHref.forEach(elem=> {
    elem.addEventListener('click', function() {
      elem.classList.add('close-popup')
    });

    if (mapHref === 'close-popup') {
      elem.classList.remove('close-popup')
    }
  });
}