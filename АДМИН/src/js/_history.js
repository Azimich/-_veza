export const initHistory = () => {
  
  const historyTabs = document.querySelectorAll('.tabs__history');
  const historyTabLinks = document.querySelectorAll('.history__slide-item')

  if (historyTabLinks) {
    historyTabLinks.forEach((elem) => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();

        const idia = e.target.getAttribute('href').replace("#", "")
        historyTabLinks.forEach((element) => element.classList.remove("active"));
  
        historyTabs.forEach((el) => el.classList.add("hide"));
  
        elem.classList.add("active");
        document.getElementById(idia).classList.remove("hide");
      });
    });
  }

}
