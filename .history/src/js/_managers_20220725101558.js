export const initManagers = () => {

  const mapHref = document.querySelectorAll('.geo');

  if(mapHref === '') {
    const mapsGeo = mapHref.getAttribute('href').replace('#', '');
    mapHref.forEach(element => {
      element.addEventListener('click', ()=> {
        element.classList.
      })
    });
  }

  // mapHref.forEach(elem=> {
  //   elem.addEventListener('click', function() {
  //     if (mapHref === '.close-popup') {
  //       elem.classList.remove('.close-popup')
  //     }
  //   });
  // });
}