export const initLeaders = () => {

  const checkCommercial = document.querySelector('.check-commercial');
  const checkCommercialItem = document.querySelector('.leaders__active__container-1');

  const checkSocial = document.querySelector('.check-social');
  const checkSocialItem = document.querySelector('.leaders__active__container-2');

  const checkIndustrial = document.querySelector('.check-industrial');
  const checkIndustrialItem = document.querySelector('.leaders__active__container-3');


  if (checkCommercial) {
    checkCommercial.addEventListener('click', ()=> {
      checkCommercialItem.classList.toggle('active')
    })
  }

  if (checkSocial) {
    checkSocial.addEventListener('click', ()=> {
      checkSocialItem.classList.toggle('active')
    })
  }

  if (checkIndustrial) {
    checkCommercial.addEventListener('click', ()=> {
      checkIndustrialItem.classList.toggle('active')
    })
  }


 
}

