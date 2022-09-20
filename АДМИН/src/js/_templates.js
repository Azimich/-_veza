
export const initTamplates = () => {
  // Скрипт для селекта
  const selecTamplate = document.querySelector(".selected");
  const optionsContainerTamplate = document.querySelector(".tamplates__options-container");
  const optionsLisTamplate = document.querySelectorAll(".tamplates__option");
  
  if (selecTamplate, optionsContainerTamplate) {
    selecTamplate.addEventListener("click", () => {
      optionsContainerTamplate.classList.toggle("active");
    });
  }
  
  optionsLisTamplate.forEach(el => {
    el.addEventListener("click", () => {
      selecTamplate.innerHTML = el.querySelector("label").innerHTML;
      optionsContainerTamplate.classList.remove("active");
    });
  });
}