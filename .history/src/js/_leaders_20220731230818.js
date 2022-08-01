export const initLeaders = () => {

  const checkCommercial = document.querySelector('.check-commercial');
  const checkCommercialItem = document.querySelector('.leaders__active__container-1');

  const checkSocial = document.querySelector('.check-social');
  const checkSocialItem = document.querySelector('.leaders__active__container-2');

  const checkIndustrial = document.querySelector('.check-industrial');
  const checkIndustrialItem = document.querySelector('.leaders__active__container-3');



    checkCommercial.addEventListener('click', ()=> {
      checkCommercialItem.classList.toggle('active')

      checkSocialItem.classList.remove('active')
      checkIndustrialItem.classList.remove('active')
    })
  

  // if (checkSocial) {
  //   checkSocial.addEventListener('click', ()=> {
  //     checkSocialItem.classList.toggle('active')

  //     checkCommercialItem.classList.remove('active')
  //     checkIndustrialItem.classList.remove('active')
  //   })
  // }

  // if (checkIndustrial) {
  //   checkCommercial.addEventListener('click', ()=> {
  //     checkIndustrial.classList.toggle('active')

  //     checkSocialItem.classList.remove('active')
  //     checkCommercialItem.classList.remove('active')
  //   })
  // }


 
}


