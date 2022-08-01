export const initLeaders = () => {

  
  
}



checkEnterprises.forEach(elem => {
  elem.addEventListener('click', function(e) {
    enterprises.classList.toggle('active')
  });
});

checkBranches.forEach(el => {
  el.addEventListener('click', function(e) {
    branches.classList.toggle('active');
  });
});
