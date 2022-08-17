export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');
  mapHref.forEach(link => link.addEventListener('click', () => popupManagers()));

  function popupManagers() {
    mapHref.addEventListener('click', ()=> {
      mapHref.classList.toggle()
    })
  }

  // mapHref.forEach(elem=> {
  //   elem.addEventListener('click', function() {
  //     elem.classList.toggle('close-popup')
  //   });
  // });
}