

export const initialPointsSecond = () => {
  const pointsCategoryLink = document.querySelectorAll('.pointsecond__category-link');
  const pointsTabsItems = document.querySelectorAll('.pointsecond__tabs-items');

  pointsCategoryLink.forEach(function(e) {
    e.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      const content = document.querySelector('.pointsecond__tabs-items[data-tab="'+id+'"]');
      const activeTab = document.querySelector('.pointsecond__category-link.active');
      const activeContent = document.querySelector('.pointsecond__tabs-items.active');

      activeTab.classList.remove('active');
      e.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    });
  });
}