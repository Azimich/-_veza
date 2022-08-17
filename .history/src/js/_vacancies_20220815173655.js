
export const initialVacanceis = () => {

  const checkEnterprises = document.querySelectorAll('.check-enterprises');
  const checkBranches = document.querySelectorAll('.check-branches');
  const enterprises = document.querySelector('.enterprises');
  const branches = document.querySelector('.branches');


  if (checkEnterprises) {

  }

  if (checkBranches) {
    checkBranches.forEach(el => {
      el.addEventListener('click', function(e) {
        branches.classList.toggle('active');
      });
    });
  }

}


