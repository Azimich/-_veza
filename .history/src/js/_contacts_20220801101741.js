
export const initContacts = ()=> {

  document.querySelectorAll('.information__managers__tabs-link').forEach((elem) => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      document.querySelectorAll('.information__managers__tabs-link').forEach(
        element => element.classList.remove('active')
      );
      document.querySelectorAll('.tab__cont').forEach(
        el => el.classList.add('hide')
      );
      elem.classList.add('active');
      document.getElementById(id).classList.remove('hide');
    });
  });




  const severZapad = document.querySelector('.severo__zapadniy-okrug');
  const baloon11 = document.querySelector('.information__baloon-11');

  if (severZapad) {
    severZapad.addEventListener('mouseenter', function() {
      baloon11.classList.add('active')
    })

    severZapad.addEventListener('mouseleave', function() {
      baloon11.classList.remove('active')
    })
  }

  const sibir = document.querySelector('.sybirskiy__federalniy-okrug');
  const baloon19 = document.querySelector('.information__baloon-19');

  if (sibir) {
    sibir.addEventListener('mouseenter', function() {
      baloon19.classList.add('active')
    })

    sibir.addEventListener('mouseleave', function() {
      baloon19.classList.remove('active')
    })
  }

  const rostov = document.querySelector('.rostov');
  const baloon5 = document.querySelector('.information__baloon-5');

  if (rostov) {
    rostov.addEventListener('mouseenter', function() {
      baloon5.classList.add('active')
    })

    rostov.addEventListener('mouseleave', function() {
      baloon5.classList.remove('active')
    })
  }

  const krasnodar = document.querySelector('.krasnodar');
  const baloon6 = document.querySelector('.information__baloon-6');

  if (krasnodar) {
    krasnodar.addEventListener('mouseenter', function() {
      baloon6.classList.add('active')
    })

    krasnodar.addEventListener('mouseleave', function() {
      baloon6.classList.remove('active')
    })
  }

  const vostok = document.querySelector('.dalniy__vostok');
  const baloon32 = document.querySelector('.information__baloon-32');

  if (vostok) {
    vostok.addEventListener('mouseenter', function() {
      baloon32.classList.add('active')
    })

    vostok.addEventListener('mouseleave', function() {
      baloon32.classList.remove('active')
    })
  }

  const krasnoyarsk = document.querySelector('.krasnoyarsk');
  const baloon30 = document.querySelector('.information__baloon-30');

  if (krasnoyarsk) {
    krasnoyarsk.addEventListener('mouseenter', function() {
      baloon30.classList.add('active')
    })

    krasnoyarsk.addEventListener('mouseleave', function() {
      baloon30.classList.remove('active')
    })
  }

  const tver = document.querySelector('.tver');
  const baloon21 = document.querySelector('.information__baloon-21');

  if (tver) {
    tver.addEventListener('mouseenter', function() {
      baloon21.classList.add('active')
    })

    tver.addEventListener('mouseleave', function() {
      baloon21.classList.remove('active')
    })
  }

  const ivanovo = document.querySelector('.ivanovo');
  const baloon15 = document.querySelector('.information__baloon-15');

  if (ivanovo) {
    ivanovo.addEventListener('mouseenter', function() {
      baloon15.classList.add('active')
    })

    ivanovo.addEventListener('mouseleave', function() {
      baloon15.classList.remove('active')
    })
  }

  const belorus = document.querySelector('.belorus');
  const baloon15 = document.querySelector('.information__baloon-15');

  if (belorus) {
    belorus.addEventListener('mouseenter', function() {
      baloon15.classList.add('active')
    })

    belorus.addEventListener('mouseleave', function() {
      baloon15.classList.remove('active')
    })
  }

}