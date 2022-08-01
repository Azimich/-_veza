
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

  severZapad.addEventListener('clic', function(e) {
    console.log(severZapad);
  })

}