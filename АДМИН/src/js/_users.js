import { countries } from './suggestions';

export const initUsers = () => {
  //выпадающий список для ПК
  const userItem = document.querySelectorAll('.users__item');
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

  //выпадающий список для мобильки
  const userArrow = document.querySelectorAll('.users__info-mob');
  userArrow.forEach(el => el.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      userArrow.forEach(element => {
        element.classList.remove('active')
      });
      this.classList.add('active')
    }
  }));

  //Для пк
  const userCategoryLink = document.querySelectorAll('.users__filter-item');
  userCategoryLink.forEach(function(e) {
    e.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      const content = document.querySelector('.users__tabs-items[data-tab="'+id+'"]');
      const activeTab = document.querySelector('.users__filter-item.active');
      const activeContent = document.querySelector('.users__tabs-items.active');

      activeTab.classList.remove('active');
      e.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    });
  });

  //Для Мобильки
  const userCategoryMobileLink = document.querySelectorAll('.users__filter__item-mob');
  userCategoryMobileLink.forEach(function(e) {
    e.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      const contents = document.querySelector('.users__tabs__items-mob[data-tab="'+id+'"]');
      const activeTabs = document.querySelector('.users__filter__item-mob.active');
      const activeContents = document.querySelector('.users__tabs__items-mob.active');

      activeTabs.classList.remove('active');
      e.classList.add('active');

      activeContents.classList.remove('active');
      contents.classList.add('active');
    });
  });

  // Скрипт для селекта
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");
  
  if (selected, optionsContainer) {
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });
  }
  
  optionsList.forEach(el => {
    el.addEventListener("click", () => {
      selected.innerHTML = el.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });

  // Скрипт для второго селекта
  const selected_2 = document.querySelector(".selected_2");
  const optionsContainer_2 = document.querySelector(".options-container_2");
  const optionsList_2 = document.querySelectorAll(".option_2");
  
  if (selected_2, optionsContainer_2) {
    selected_2.addEventListener("click", () => {
      optionsContainer_2.classList.toggle("active");
    });
  }
  
  optionsList_2.forEach(el => {
    el.addEventListener("click", () => {
      selected_2.innerHTML = el.querySelector("label").innerHTML;
      optionsContainer_2.classList.remove("active");
    });
  });

  const selectBtn = document.querySelector('.select-btn');
  const selectInput = document.querySelector('.inputs'); 

  if (selectBtn, selectInput) {
    selectBtn.addEventListener('click', ()=> {
      selectInput.classList.toggle('active')
    });
  }


  //Инпут с поиском Руководителей
  function autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  autocomplete(document.getElementById("myInput"), countries);
}

