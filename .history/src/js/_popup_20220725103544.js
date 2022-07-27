import { popupOpen, popupClose, bodyLock, bodyUnlock } from './_helpers';

export const initPopup = () => {
  const popupLinks = document.querySelectorAll('.popup-links');

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        e.preventDefault();
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        bodyLock()
      });
    }
  }
}