export const initStaff = () => {
  //выпадающий список для ПК
  const userItem = document.querySelectorAll('.staff__item');
  userItem.forEach(elem => elem.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      userItem.forEach(el => {
        el.classList.remove('active')
      })
      this.classList.add('active')
    }
  }));
}