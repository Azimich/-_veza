
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
  const baloon1 = document.querySelector('.information__baloon-1');

  if (sibir) {
    sibir.addEventListener('mouseenter', function() {
      baloon1.classList.add('active')
    })

    sibir.addEventListener('mouseleave', function() {
      baloon1.classList.remove('active')
    })
  }

  const rostov = document.querySelector('.rostov');
  const baloon19 = document.querySelector('.information__baloon-19');

  if (rostov) {
    rostov.addEventListener('mouseenter', function() {
      baloon19.classList.add('active')
    })

    rostov.addEventListener('mouseleave', function() {
      baloon19.classList.remove('active')
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

}