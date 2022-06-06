export const initCompany = ()=> {

  const $mapLinks = document.querySelectorAll('.map a'),
        $tooltip = document.querySelector('.company__maps-tooltip');

  $mapLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      let self = e.currentTarget;
      let color = self.dataset.color;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el =>
         el.style.cssText = `fill: ${color}; stroke-width: 2px; transition: all 0.5s;`);
      if (currentPath) currentPath.forEach(el => 
        el.style.cssText = `fill: ${color}; stroke-width: 2px; transition: all .5s;`);
    });

    $mapLinks.forEach(continents => {
      continents.addEventListener('mousemove', function(e) {
        $tooltip.innerText = this.dataset.title;
        $tooltip.style.top = (e.y - 0) + 'px';
        $tooltip.style.left = (e.x - 400) + 'px';
        $tooltip.style.fontSize = '12'  + 'px';
      });

      continents.addEventListener('mouseenter', function() {$tooltip.style.display = 'block';});
      continents.addEventListener('mouseleave', function() {$tooltip.style.display = 'none';});
    });

    el.addEventListener('mouseleave', (e) => {
      let self = e.currentTarget;
      let currentPolygon = self.querySelectorAll('polygon');
      let currentPath = self.querySelectorAll('path');
      if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
      if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
    });
  });
}