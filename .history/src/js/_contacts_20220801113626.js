
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
  const baloon17 = document.querySelector('.information__baloon-17');

  if (belorus) {
    belorus.addEventListener('mouseenter', function() {
      baloon17.classList.add('active')
    })

    belorus.addEventListener('mouseleave', function() {
      baloon17.classList.remove('active')
    })
  }

  const tumen = document.querySelector('.tumen');
  const baloon25 = document.querySelector('.information__baloon-25');

  if (tumen) {
    tumen.addEventListener('mouseenter', function() {
      baloon25.classList.add('active')
    })

    tumen.addEventListener('mouseleave', function() {
      baloon25.classList.remove('active')
    })
  }

  const chehov = document.querySelector('.chehov');
  const baloon16 = document.querySelector('.information__baloon-16');

  if (chehov) {
    chehov.addEventListener('mouseenter', function() {
      baloon16.classList.add('active')
    })

    chehov.addEventListener('mouseleave', function() {
      baloon16.classList.remove('active')
    })
  }

  const bryansk = document.querySelector('.bryansk');
  const baloon2 = document.querySelector('.information__baloon-2');

  if (bryansk) {
    bryansk.addEventListener('mouseenter', function() {
      baloon2.classList.add('active')
    })

    bryansk.addEventListener('mouseleave', function() {
      baloon2.classList.remove('active')
    })
  }

  const belgorod = document.querySelector('.belgorod');
  const baloon3 = document.querySelector('.information__baloon-3');

  if (belgorod) {
    belgorod.addEventListener('mouseenter', function() {
      baloon3.classList.add('active')
    })

    belgorod.addEventListener('mouseleave', function() {
      baloon3.classList.remove('active')
    })
  }

  const volgograd = document.querySelector('.volgograd');
  const baloon7 = document.querySelector('.information__baloon-7');

  if (volgograd) {
    volgograd.addEventListener('mouseenter', function() {
      baloon7.classList.add('active')
    })

    volgograd.addEventListener('mouseleave', function() {
      baloon7.classList.remove('active')
    })
  }

  const cheboksari = document.querySelector('.cheboksari');
  const baloon14 = document.querySelector('.information__baloon-14');

  if (cheboksari) {
    cheboksari.addEventListener('mouseenter', function() {
      baloon14.classList.add('active')
    })

    cheboksari.addEventListener('mouseleave', function() {
      baloon14.classList.remove('active')
    })
  }

  const kurganskayaOblast = document.querySelector('.kurganskaya__oblast');
  const baloon26 = document.querySelector('.information__baloon-26');

  if (kurganskayaOblast) {
    kurganskayaOblast.addEventListener('mouseenter', function() {
      baloon26.classList.add('active')
    })

    kurganskayaOblast.addEventListener('mouseleave', function() {
      baloon26.classList.remove('active')
    })
  }

  const saratov = document.querySelector('.saratov');
  const baloon8 = document.querySelector('.information__baloon-8');

  if (saratov) {
    saratov.addEventListener('mouseenter', function() {
      baloon8.classList.add('active')
    })

    saratov.addEventListener('mouseleave', function() {
      baloon8.classList.remove('active')
    })
  }

  const voronezh = document.querySelector('.voronezh');
  const baloon4 = document.querySelector('.information__baloon-4');

  if (voronezh) {
    voronezh.addEventListener('mouseenter', function() {
      baloon4.classList.add('active')
    })

    voronezh.addEventListener('mouseleave', function() {
      baloon4.classList.remove('active')
    })
  }

  const novosibirskayaOblast = document.querySelector('.novosibirskaya__oblast');
  const baloon28 = document.querySelector('.information__baloon-28');

  if (novosibirskayaOblast) {
    novosibirskayaOblast.addEventListener('mouseenter', function() {
      baloon28.classList.add('active')
    })

    novosibirskayaOblast.addEventListener('mouseleave', function() {
      baloon28.classList.remove('active')
    })
  }

  const OMSK = document.querySelector('.OMSK');
  const baloon27 = document.querySelector('.information__baloon-27');

  if (OMSK) {
    OMSK.addEventListener('mouseenter', function() {
      baloon27.classList.add('active')
    })

    OMSK.addEventListener('mouseleave', function() {
      baloon27.classList.remove('active')
    })
  }

  const samara = document.querySelector('.samara');
  const baloon12 = document.querySelector('.information__baloon-12');

  if (samara) {
    samara.addEventListener('mouseenter', function() {
      baloon12.classList.add('active')
    })

    samara.addEventListener('mouseleave', function() {
      baloon12.classList.remove('active')
    })
  }

  const ufa = document.querySelector('.ufa');
  const baloon23 = document.querySelector('.information__baloon-23');

  if (ufa) {
    ufa.addEventListener('mouseenter', function() {
      baloon23.classList.add('active')
    })

    ufa.addEventListener('mouseleave', function() {
      baloon23.classList.remove('active')
    })
  }

  const perm = document.querySelector('.perm');
  const baloon23 = document.querySelector('.information__baloon-23');

  if (perm) {
    perm.addEventListener('mouseenter', function() {
      baloon23.classList.add('active')
    })

    perm.addEventListener('mouseleave', function() {
      baloon23.classList.remove('active')
    })
  }

}