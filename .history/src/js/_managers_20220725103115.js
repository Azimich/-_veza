export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');

  mapHref.forEach((element) => {
    if (mapHref.get) {
      element.classList.add('close-popup')
    }
  })



}