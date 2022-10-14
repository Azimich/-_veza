

export const initialPoints = () => {
  const pointsCategoryLink = document.querySelectorAll('.points__category-link');
  const pointsTabsItems = document.querySelectorAll('.points__tabs-items');

  pointsCategoryLink.forEach(function(e) {
    e.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      const content = document.querySelector('.points__tabs-items[data-tab="'+id+'"]');
      const activeTab = document.querySelector('.points__category-link.active');
      const activeContent = document.querySelector('.points__tabs-items.active');

      activeTab.classList.remove('active');
      e.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
    });
  });
}