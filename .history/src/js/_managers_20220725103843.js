export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');

  mapHref.forEach((element) => {
    if (mapHref.getAttribute('#our-map')) {
      element.classList.add('close-popup')
    }
  })
}