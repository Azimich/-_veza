
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
  const baloon5 = document.querySelector('.information__baloon-5');

  if (rostov) {
    rostov.addEventListener('mouseenter', function() {
      baloon1.classList.add('active')
    })

    rostov.addEventListener('mouseleave', function() {
      baloon5.classList.remove('active')
    })
  }

}